export interface TemplatePath {
  id: string;
  path: string;
}

export interface Template {
  id: string;
  names: Record<string, string>;
  articles: Record<string, string>;
  pluralArticles: Record<string, string>;
  plurals: Record<string, string>;
  category: string;
  paths: TemplatePath[];
}
