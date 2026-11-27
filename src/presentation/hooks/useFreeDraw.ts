import { useState, useRef, useMemo, useEffect } from 'react';
import { PanResponder } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FREE_DRAW_KEY = '@free_draw_paths';
const UNDO_BAL_KEY = '@free_draw_undo_bal';

export function useFreeDraw(color: string) {
  const [paths, setPaths] = useState<any[]>([]);
  const [current, setCurrent] = useState<string>('');
  const [undoBalance, setUndoBalance] = useState(5);
  const pathRef = useRef('');

  useEffect(() => {
    AsyncStorage.getItem(FREE_DRAW_KEY).then(d => d && setPaths(JSON.parse(d)));
    AsyncStorage.getItem(UNDO_BAL_KEY).then(d => {
      if (d) setUndoBalance(parseInt(d, 10));
    });
  }, []);

  const saveAndSet = (list: any[]) => {
    setPaths(list);
    AsyncStorage.setItem(FREE_DRAW_KEY, JSON.stringify(list));
  };

  const panResponder = useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (e) => setCurrent(pathRef.current = `M${e.nativeEvent.locationX},${e.nativeEvent.locationY}`),
    onPanResponderMove: (e) => setCurrent(pathRef.current += ` L${e.nativeEvent.locationX},${e.nativeEvent.locationY}`),
    onPanResponderRelease: () => {
      if (pathRef.current) saveAndSet([...paths, { d: pathRef.current, color }]);
      setCurrent(pathRef.current = '');
    }
  }), [color, paths]);

  const addUndos = (n: number) => {
    const nw = undoBalance + n;
    setUndoBalance(nw);
    AsyncStorage.setItem(UNDO_BAL_KEY, nw.toString());
  };

  const undo = () => {
    if (undoBalance <= 0 || paths.length === 0) return;
    addUndos(-1);
    saveAndSet(paths.slice(0, -1));
  };
  const clear = () => saveAndSet([]);

  return { paths, current, undo, clear, panHandlers: panResponder.panHandlers, undoBalance, addUndos };
}
