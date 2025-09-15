import Image, { type ImageProps } from 'next/image'
import { type MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    Image: (props: ImageProps) => {
      // Provide default alt text if not specified
      const { alt = "", ...restProps } = props
      return <Image alt={alt} {...restProps} />
    },
  }
}
