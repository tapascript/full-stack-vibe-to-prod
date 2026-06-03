
// We use 'type' or 'interface' in TypeScript to define the shape of an object.
// Think of this as a strict blueprint.

export interface CreatorStat {
  label: string;
  value: string | number;
}

export interface VideoStats {
  id: string; // ID should always be a string (UUID) or number, we'll enforce string here
  title: string;
  views: number;
  publishedAt: string;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  createdAt: string;
}