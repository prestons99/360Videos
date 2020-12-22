declare module '@capacitor/core' {
  interface PluginRegistry {
    Echo: EchoPlugin;
  }
}

export interface 360VideoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  openMap(location: {latitude: number; longitude: number}): Promise<void>;
}
