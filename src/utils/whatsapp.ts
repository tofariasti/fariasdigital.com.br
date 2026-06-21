import { hubConfig } from '../data/hubConfig'
import type { WhatsAppKey } from '../data/types'

export function buildWhatsAppUrl(key: WhatsAppKey = 'geral'): string {
  const msg = hubConfig.mensagensWhatsApp[key] ?? hubConfig.mensagensWhatsApp.geral
  return `https://wa.me/${hubConfig.whatsappNumero}?text=${encodeURIComponent(msg)}`
}

export function buildDemoWhatsAppUrl(titulo: string): string {
  const msg = `Olá! Vi o site para ${titulo} em ${hubConfig.dominioHost} e quero algo assim para minha empresa.`
  return `https://wa.me/${hubConfig.whatsappNumero}?text=${encodeURIComponent(msg)}`
}

export function getDominioHost(): string {
  return hubConfig.dominioHost
}

export function getDominioUrl(): string {
  return hubConfig.dominio
}
