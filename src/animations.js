const sideFadeIn = () => ({
    in: {
        style: {
          // `p` is number (0~1)
          // When just before this page appear, `p` will be 0
          // When this page filled your screen, `p` will be 1
          opacity: (value) => value
        },
      },
      out: {
        style: {
          // `p` is number (0~1)
          // When this page filled your screen, `p` will be 0
          // When just after this page disappear, `p` will be 1
          opacity: (value) => (1-value)
        },
      },
});

export {sideFadeIn};