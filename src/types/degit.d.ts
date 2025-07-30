declare module 'degit' {
  export default function degit(
    repo: string,
    opts?: {
      cache?: boolean;
      force?: boolean;
      verbose?: boolean;
    }
  ): {
    clone(target: string): Promise<void>;
    on(event: string, callback: (...args: any[]) => void): void;
  };
}