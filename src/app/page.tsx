'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import SignupForm from '@/components/SignupForm'

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Organize <span className="text-primary">pagamentos compartilhados</span> de forma simples e intuitiva. 
            </h1>
            <p className="text-xl text-[#616161] mb-8">
              Transforme a maneira como você gerencia seus pagamentos com o TaPago, o aplicativo que torna suas transações financeiras mais simples, seguras e inteligentes.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn-primary flex items-center gap-2">
                Começar Agora <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="btn-secondary">
                Saiba Mais
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold mb-2 text-primary">Funcionalidades</h2>
            <p className="text-2xl font-bold text-gray-900">O que você pode fazer com o TaPago</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rachar o Aluguel</h3>
              <p className="text-[#616161]">
                Divida facilmente as despesas mensais do apartamento, incluindo aluguel, contas e compras.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Viagens em Grupo</h3>
              <p className="text-[#616161]">
                Organize gastos de viagem com amigos, desde hospedagem até refeições e passeios.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Despesas Compartilhadas</h3>
              <p className="text-[#616161]">
                Gerencie despesas recorrentes com roommates ou família de forma organizada.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Conta do Restaurante</h3>
              <p className="text-[#616161]">
                Divida a conta do restaurante na hora, incluindo taxas e gorjetas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-[#EFF0F3]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold mb-2 text-primary">Testemunhas</h2>
            <p className="text-2xl font-bold text-gray-900">Usado por quem divide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <p className="text-[#616161] font-light mb-4">
                "O TaPago é incrível! Dividir contas com amigos ficou super fácil. Interface intuitiva e prática!"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="Marina Silva"
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <div>
                  <p className="font-normal text-gray-900">Marina Silva</p>
                  <p className="text-primary text-sm">@marianasilva</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <p className="text-[#616161] font-light mb-4">
                "Melhor app para dividir despesas! Interface limpa e intuitiva!"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="Ana Laura Silva"
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <div>
                  <p className="font-normal text-gray-900">Ana Laura Silva</p>
                  <p className="text-primary text-sm">@anaoliveira</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <p className="text-[#616161] font-light mb-4">
                "Perfeito para dividir contas da república! Prático, eficiente e todo mundo consegue ver o que deve!"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Pedro Silva"
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <div>
                  <p className="font-normal text-gray-900">Pedro Silva</p>
                  <p className="text-primary text-sm">@pedrosantos</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <p className="text-[#616161] font-light mb-4">
                "TaPago mudou a forma como dividimos as contas da viagem! Agora é tudo automático!"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src="https://randomuser.me/api/portraits/women/3.jpg"
                  alt="Rafaela Costa"
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <div>
                  <p className="font-normal text-gray-900">Rafaela Costa</p>
                  <p className="text-primary text-sm">@rafacosta</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <p className="text-[#616161] font-light mb-4">
                "Simplesmente fantástico! Uso para dividir as contas do apartamento e nunca mais tivemos problemas com pagamentos!"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="Lucas Mendes"
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <div>
                  <p className="font-normal text-gray-900">Lucas Mendes</p>
                  <p className="text-primary text-sm">@lucasmendes</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <p className="text-[#616161] font-light mb-4">
                "Recomendo demais! Uso com minha família para dividir as contas mensais e ficou muito mais organizado!"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src="https://randomuser.me/api/portraits/women/4.jpg"
                  alt="Juliana Alves"
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <div>
                  <p className="font-normal text-gray-900">Juliana Alves</p>
                  <p className="text-primary text-sm">@jualves</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Benefits Section */}
      <section id="design" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold mb-2 text-primary">Design Limpo</h2>
            <p className="text-2xl font-bold text-gray-900">Interface pensada em você</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Rápido e Intuitivo</h3>
                  <p className="text-[#616161]">Interface otimizada para que você divida contas em segundos, sem complicações.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Visualização Clara</h3>
                  <p className="text-[#616161]">Veja exatamente quanto cada pessoa deve, com gráficos e resumos simplificados.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Seguro e Confiável</h3>
                  <p className="text-[#616161]">Design que prioriza a segurança dos seus dados e a transparência nas divisões.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Sempre Atualizado</h3>
                  <p className="text-[#616161]">Sincronização automática para manter todos os participantes informados em tempo real.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg"
            >
              <img
                src="/components/Pacific-Blue.png"
                alt="Interface TaPago"
                className="rounded-lg shadow-md w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#EFF0F3] py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            A <span className="text-primary">solução moderna</span> para um <span className="text-primary">problema antigo</span>
          </h2>
          <p className="text-xl mb-8 text-[#616161]">
            Baixe agora e descubra por que TaPago é a escolha inteligente para dividir despesas.
          </p>
          <SignupForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TaPago</h3>
              <p className="text-gray-400">
                Tornando a divisão de despesas simples e sem estresse.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Funcionalidades</li>
                <li>Preços</li>
                <li>Segurança</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre</li>
                <li>Blog</li>
                <li>Carreiras</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacidade</li>
                <li>Termos</li>
                <li>Política de Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TaPago. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 