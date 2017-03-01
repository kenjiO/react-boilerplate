import React from 'react'

// import {  GithubCount, GithubLink } from './Styled'

class Github extends React.Component {
  state = {
    count: 0,
  }

  // componentDidMount = async () => {
  //   const url = 'https://api.github.com/repos/didierfranc/redux-react-starter'
  //   const res = await fetch(url).then(r => r.json())
  //   this.setState({ count: res.stargazers_count })
  // }

  render = () => (
    <div style={{ border: "1px solid black", margin: '5px', width: '500px', padding: '5px' }}>
      Github.js
      {/*<GithubLink
        href="http://github.com/didierfranc/redux-react-starter"
        target="_blank"
        rel="noopener"
      >
        <h3>  Star     </h3>
        <GithubCount>{this.state.count}</GithubCount>
      </GithubLink>*/}
    </div>
  )
}

export default Github
