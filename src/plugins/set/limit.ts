
  limit(n: number) {
    const self = this.cloneIfReused()
    self.props.limit = n
    return self
  }
