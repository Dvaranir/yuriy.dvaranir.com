
export const EmptyIfUndefined = (value: string | undefined) => value === undefined ? '' : value;

export const NoComponentIfUndefined = (value: string | number | undefined, component: JSX.Element) => value === undefined ? '' : component;

export const GenLottieOptions = (animationPath: any) => {
    return {
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      },
      path: animationPath,
    }
}
