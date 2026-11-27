import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const COLORS = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFFF33', '#FF8C00'];

export function Confetti() {
  const seeds = Array.from({ length: 30 });
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {seeds.map((_, i) => <ConfettiPiece key={i} delay={i * 100} />)}
    </View>
  );
}

function ConfettiPiece({ delay }: { delay: number }) {
  const y = useRef(new Animated.Value(-50)).current;
  const x = useRef(Math.random() * width).current;
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(y, { toValue: height + 50, duration: 2500 + Math.random() * 2000, useNativeDriver: true }),
        Animated.timing(y, { toValue: -50, duration: 0, useNativeDriver: true })
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.p, { transform: [{ translateY: y }, { translateX: x }], backgroundColor: color }]} />
  );
}

const styles = StyleSheet.create({
  p: { position: 'absolute', width: 10, height: 10, borderRadius: 2 }
});
