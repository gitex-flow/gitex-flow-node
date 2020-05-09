/**
 * Configuration provider.
 */
export interface ConfigProvider<T> {
  /**
   * Sets a new configuarion.
   *
   * @param config - Configuration to be set.
   */
  set(config: T): Promise<void>;

  /**
   * Gets the current configuration.
   */
  get(): Promise<T>;
}
