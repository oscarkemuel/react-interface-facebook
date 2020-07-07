import React, { Component } from 'react'

import PostItem from './PostItem'

class PostList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Oscar Kemuel",
          avatar: "https://avatars3.githubusercontent.com/u/34771800?v=4"
        },
        date: "06 Jul 2020",
        content: "Bom dia pessoal.\n\nAlguém sabe dizer quando irá voltar as aulas da UFRN?",
        comments: [
          {
            id: 1,
            author: {
              name: "José Felipe",
              avatar: "https://conteudo.imguol.com.br/c/parceiros/2a/2019/08/26/jose-de-abreu-foto-divulgacao-tv-globo-1566837678058_v2_450x600.jpg"
            },
            content: "Rapaz ainda não temos previsão. Talvez lá para o meio de Agosto! O numero de casos no Brasil aumenta cada vez mais, espero que isso termine logo."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "React",
          avatar: "https://www.ssa-frontend.com/media/1164/react.png"
        },
        date: "07 Jul 2020",
        content: "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais",
        comments: [
          {
            id: 1,
            author: {
              name: "Oscar Kemuel",
              avatar: "https://avatars3.githubusercontent.com/u/34771800?v=4"
            },
            content: "Que legal! A coisa que mais gosto React é que é baseado em componentes encapsulados que gerenciam seu próprio estado e então, combine-os para criar UIs complexas."
          },
          {
            id: 2,
            author: {
              name: "Neymar Jr.",
              avatar: "https://rd1.com.br/wp-content/uploads/2018/11/20181114-neymar-1200x942.jpg"
            },
            content: "Muito bom. Outra coisa muito boa é que o React também pode ser renderizado no servidor, usando Node, e ser usado para criar aplicações mobile, através do React Native."
          }

        ]
      },
      {
        id: 3,
        author: {
          name: "React",
          avatar: "https://www.ssa-frontend.com/media/1164/react.png"
        },
        date: "07 Jul 2020",
        content: "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais",
        comments: [
          {
            id: 1,
            author: {
              name: "Oscar Kemuel",
              avatar: "https://avatars3.githubusercontent.com/u/34771800?v=4"
            },
            content: "Que legal! A coisa que mais gosto React é que é baseado em componentes encapsulados que gerenciam seu próprio estado e então, combine-os para criar UIs complexas."
          },
          {
            id: 2,
            author: {
              name: "Neymar Jr.",
              avatar: "https://rd1.com.br/wp-content/uploads/2018/11/20181114-neymar-1200x942.jpg"
            },
            content: "Muito bom. Outra coisa muito boa é que o React também pode ser renderizado no servidor, usando Node, e ser usado para criar aplicações mobile, através do React Native."
          }

        ]
      }
    ]
  }

  render(){
    return(
      <div className="posts">
          {this.state.posts.map(post => <PostItem key={post.id} post={post}/>)}
      </div>
    )
  }
}

export default PostList