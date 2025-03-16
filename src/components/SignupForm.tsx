'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, UserIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
import { AnimatePresence } from 'framer-motion'

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    phone: '',
    deviceType: 'Apple'
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: '' })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar formulário')
      }

      setStatus({
        loading: false,
        success: true,
        error: ''
      })
      
      setFormData({
        name: '',
        email: '',
        age: '',
        phone: '',
        deviceType: 'Apple'
      })

    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: 'Ocorreu um erro ao enviar o formulário. Tente novamente.'
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="space-y-6">
          {/* Nome */}
          <div className="relative">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">
              Nome Completo
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 transition-colors"
                placeholder="Digite seu nome"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 transition-colors"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          {/* Idade e Telefone na mesma linha */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label htmlFor="age" className="text-sm font-medium text-gray-700 mb-1 block">
                Idade
              </label>
              <input
                type="number"
                id="age"
                name="age"
                required
                min="18"
                max="120"
                value={formData.age}
                onChange={handleChange}
                className="block w-full px-3 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 transition-colors"
                placeholder="18+"
              />
            </div>

            <div className="relative">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1 block">
                Telefone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
          </div>

          {/* Tipo de Dispositivo */}
          <div className="relative">
            <label htmlFor="deviceType" className="text-sm font-medium text-gray-700 mb-1 block">
              Tipo de Dispositivo
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DevicePhoneMobileIcon className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="deviceType"
                name="deviceType"
                required
                value={formData.deviceType}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 transition-colors appearance-none"
              >
                <option value="Apple">Apple (iOS)</option>
                <option value="Android">Android</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={status.loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors ${
            status.loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {status.loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            'Começar Agora'
          )}
        </motion.button>

        {/* Mensagens de Feedback */}
        <AnimatePresence>
          {status.success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-4 bg-green-50 rounded-xl border border-green-100"
            >
              <p className="text-sm text-green-700 flex items-center">
                <svg className="h-5 w-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Formulário enviado com sucesso! Entraremos em contato em breve.
              </p>
            </motion.div>
          )}

          {status.error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-4 bg-red-50 rounded-xl border border-red-100"
            >
              <p className="text-sm text-red-700 flex items-center">
                <svg className="h-5 w-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {status.error}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  )
} 