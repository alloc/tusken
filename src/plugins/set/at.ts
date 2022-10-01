
  /**
   * Resolve with a single row at the given offset.
   * - Negative offset is treated as zero.
   * - Multiple calls are not supported.
   */
   at(offset: number) {
    const self = this.cloneIfReused()
    self.props.single = true
    self.props.limit = 1
    self.props.offset = offset > 0 ? offset : undefined
    return self
  }