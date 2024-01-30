import { MDXProvider } from '@mdx-js/react';
import "@/styles/globals.css";
import "@/styles/prism.css"
import "@/styles/markdown.css"


function MyApp({ Component, pageProps }) {
  // 定义 mdx 中语法的映射组件
  const components = {
    // img: props => <Image {...props}></Image>,
    h1: props => {
      return <h1>
        <div id={props.id} className='relative -top-24 invisible' ></div>
        <a href={'#' + props.id}>{props.children}</a>
      </h1>
    },
    h2: props => {
      return <h2>
        <div id={props.id} className='relative -top-24 invisible' ></div>
        <a href={'#' + props.id}>{props.children}</a>
      </h2>
    },
    h3: props => {
      return <h3>
        <div id={props.id} className='relative -top-24 invisible' ></div>
        <a href={'#' + props.id}>{props.children}</a>
      </h3>
    },
    h4: props => {
      return <h4>
        <div id={props.id} className='relative -top-24 invisible' ></div>
        <a href={'#' + props.id}>{props.children}</a>
      </h4>
    },
    wrapper: ({ children, ...props }) => {
      // console.log(children.map(child => child.props.mdxType))
      // console.log(React.Children.toArray(children), 999)
      // console.log(children)
      // console.log(props, 111)
      // if (props.layout) {
      //   return <main {...props} />
      // }
      return <>{children}</>
    }
  }

  return <MDXProvider components={components}>
    <Component {...pageProps} />
  </MDXProvider>
}

export default MyApp
