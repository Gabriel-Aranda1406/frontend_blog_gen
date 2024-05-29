// import React from 'react'
import { GithubLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

  let data = new Date().getFullYear()

  const { usuario } = useContext(AuthContext)

  let component: ReactNode;

  if (usuario.token !== ""){
    component =(
    <div className="flex justify-center bg-[rgb(218,20,0)] text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold font-display'>Geek Zone | {data}</p>
            <p className='text-xl font-bold font-display'>Desenvolvido por Gabriel Aranda</p>
            <p className='text-lg font-display font-bold'>Acesse minhas redes sociais</p>
            <div className='flex gap-2'>
            <a href="https://www.linkedin.com/in/gabriel-arandaa" target='_blank' rel="noopener noreferrer">
                <LinkedinLogo size={36} weight='bold' />
              </a>
              <a href="https://github.com/Gabriel-Aranda1406" target='_blank' rel="noopener noreferrer">
                <GithubLogo size={36} weight='bold'/>
              </a>
              <a href="https://api.whatsapp.com/send?phone=5511988042690&text=Seu%20projeto%20blog%20pessoal%20ficou%20bem%20legal!%20Poderíamos%20conversar%20um%20pouco?%20" target='_blank' rel="noopener noreferrer">
                <WhatsappLogo size={36} />
              </a>
            </div>
          </div>
        </div>
        )
  }

  return (
    <>
        { component }
      </>
  )
}

export default Footer