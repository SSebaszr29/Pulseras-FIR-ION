/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Zap, 
  Moon, 
  Activity, 
  Battery, 
  ShieldCheck, 
  Truck, 
  Star, 
  ChevronDown, 
  MessageCircle, 
  ShoppingCart,
  Timer
} from 'lucide-react';

const Button = ({ children, primary = true, className = '', href = '#', justifyCenter = true }: any) => {
  const baseStyle = "inline-flex items-center font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg " + (justifyCenter ? "justify-center" : "");
  const primaryStyle = "bg-gradient-to-r from-primary-500 to-primary-700 text-white hover:shadow-primary-500/50";
  const wppStyle = "bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:shadow-secondary-500/50";
  
  return (
    <a href={href} className={`${baseStyle} ${primary ? primaryStyle : wppStyle} ${className}`}>
      {children}
    </a>
  );
};

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const WHATSAPP_LINK = "https://wa.me/1234567890?text=Hola,%20me%20interesa%20la%20oferta%20de%20la%20pulsera%20FIRit-ION";
  
  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-hidden font-sans">
      
      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-dark-950/80 backdrop-blur-md border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-primary-500" />
            <span className="font-display font-bold text-2xl tracking-tight">FIRit<span className="text-primary-500">-ION</span></span>
          </div>
          <div className="hidden md:flex gap-4">
             <Button href="#oferta" className="text-sm px-6 py-2">Comprar Ahora</Button>
             <Button primary={false} href={WHATSAPP_LINK} className="text-sm px-6 py-2 gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp
             </Button>
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-dark-700 text-sm font-medium text-gray-300">
                 <span className="flex h-2 w-2 rounded-full bg-secondary-500 animate-pulse"></span>
                 Tecnología Japonesa Avanzada
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                Reduce el dolor,<br/>
                mejora tu descanso y<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                  recupera tu energía.
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                La pulsera FIRit-ION combina tecnología FIR (Rayos Infrarrojos Lejanos) y millones de iones negativos para devolverle el equilibrio a tu cuerpo de forma natural.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button href="#oferta" className="text-lg gap-2 text-center w-full sm:w-auto">
                  <ShoppingCart className="w-5 h-5"/> Comprar AHORA
                </Button>
                <Button primary={false} href={WHATSAPP_LINK} className="text-lg gap-2 justify-center text-center w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5"/> Hablar por WhatsApp
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                 <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-8 h-8 rounded-full border-2 border-dark-950" />
                    ))}
                 </div>
                 <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500"/>)}
                 </div>
                 <span>+10,000 peruanos sin dolor</span>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="relative lg:h-[600px] flex justify-center items-center mt-10 lg:mt-0"
            >
               {/* Decorative ring */}
               <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-primary-500/30 rounded-full animate-[spin_30s_linear_infinite]" />
               <div className="absolute w-[340px] h-[340px] md:w-[500px] md:h-[500px] border border-secondary-500/20 text-secondary-500/20 border-dashed rounded-full animate-[spin_40s_reverse_linear_infinite]" />
               
               <img 
                 src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
                 alt="Persona usando la pulsera FIRit-ION sintiéndose relajada" 
                 className="relative z-10 w-[280px] md:w-full md:max-w-[400px] object-cover rounded-[2rem] shadow-2xl border border-dark-800 rotate-[-5deg] hover:rotate-0 transition-transform duration-500 aspect-[3/4]"
               />
               
               {/* Floating badges */}
               <div className="absolute top-0 right-0 sm:top-10 sm:-right-10 bg-dark-800 border border-dark-700 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
                  <div className="bg-secondary-500/20 p-2 rounded-full">
                     <Activity className="w-6 h-6 text-secondary-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase">Flujo Sanguíneo</p>
                    <p className="font-bold">+40% Mejora</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-20 bg-dark-900 border-y border-dark-800 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                ¿Sientes que el dolor y el cansancio controlan tu vida?
              </h2>
              <p className="text-gray-400 text-lg">
                El ritmo de vida actual, la radiación electromagnética (celulares, WiFi) y el estrés desequilibran tu cuerpo todos los días.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Dolor Constante", icon: <Activity />, desc: "Molestias en articulaciones, cuello, espalda y pesadez muscular." },
                { title: "Cansancio Extremo", icon: <Battery />, desc: "Sientes que te falta energía incluso después de haber dormido." },
                { title: "Mal Descanso", icon: <Moon />, desc: "Te despiertas por las noches o te levantas sin sentirte renovado." },
                { title: "Estrés y Tensión", icon: <Zap />, desc: "Nerviosismo constante, ansiedad y rigidez en el cuerpo." },
              ].map((item, i) => (
                <div key={i} className="bg-dark-950 p-8 rounded-3xl border border-red-500/10 hover:border-red-500/30 transition-colors group">
                  <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                 <img 
                   src="https://images.unsplash.com/photo-1579316279140-0220c4323c2d?q=80&w=1000&auto=format&fit=crop" 
                   alt="Tecnología FIRit-ION" 
                   className="rounded-3xl w-full object-cover shadow-[0_0_50px_rgba(14,165,233,0.15)] grayscale-[20%] contrast-125 aspect-square lg:aspect-auto"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/40 to-transparent rounded-3xl mix-blend-overlay"></div>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                 <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                    La ciencia detrás de <span className="text-primary-500">FIRit-ION</span>
                 </h2>
                 <p className="text-lg text-gray-300">
                    No es magia, es física y bienestar. Nuestra pulsera está fabricada con silicona quirúrgica infundida con polvo de Turmalina, y cuenta con imanes de neodimio de alta potencia.
                 </p>
                 
                 <div className="space-y-6 mt-8">
                    <div className="flex gap-4 items-start">
                       <div className="w-12 h-12 shrink-0 rounded-full bg-primary-500/20 text-primary-500 flex items-center justify-center mt-1">
                          <Zap className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold mb-2">Rayos Infrarrojos Lejanos (FIR)</h4>
                          <p className="text-gray-400 text-sm">Penetran suavemente en la piel, elevando ligeramente la temperatura de los tejidos, lo que provoca la dilatación de los vasos sanguíneos y mejora dramáticamente la circulación local.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <div className="w-12 h-12 shrink-0 rounded-full bg-secondary-500/20 text-secondary-500 flex items-center justify-center mt-1">
                          <Activity className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold mb-2">Iones Negativos</h4>
                          <p className="text-gray-400 text-sm">Contrarrestan los iones positivos emitidos por aparatos electrónicos. Ayudan a relajar la mente, reducir la fatiga ocular y muscular, y mejorar tu equilibrio general.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-24 bg-dark-900 border-y border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
              Transforma tu día a día
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Reduce el Dolor", desc: "Alivia dolores musculares y articulares gracias al aumento de la temperatura corporal local." },
                { title: "Mejora el Sueño", desc: "Equilibra tu sistema para lograr un descanso continuo, profundo y reparador por las noches." },
                { title: "Más Energía", desc: "Reduce la sensación de fatiga crónica y cansancio pesado. Rinde mucho más." },
                { title: "Diseño Cómodo", desc: "Resistente al agua, elegante, unisex y perfecta para usar todo el día sin darte cuenta." },
              ].map((benefit, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-dark-950 border border-dark-700 rounded-full flex items-center justify-center mb-6 shadow-xl relative">
                    <div className="absolute inset-0 bg-primary-500/10 rounded-full animate-ping opacity-75" style={{animationDuration: '3s'}}></div>
                    <CheckCircle2 className="w-10 h-10 text-secondary-500 relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
            Resultados Reales
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Miles de personas ya están disfrutando de una vida con menos molestias y mucha más energía. ¡Mira sus testimonios reales!</p>
          
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { name: "Carlos Mendoza", text: "Sufría de dolores en la muñeca y cuello por mi trabajo. Desde la primera semana de usar FIRit-ION, sentí un gran alivio. Ya no me la saco." },
               { name: "Maria Elena Rojas", text: "Tenía problemas serios de insomnio. Una amiga me la recomendó. Ahora duermo de corrido y me levanto con ganas de hacer cosas." },
               { name: "Jorge Silva", text: "Soy taxista y el dolor de espalda baja era insoportable. Compre el combo de 2x1 y le di una a mi esposa. Ambos súper aliviados." },
             ].map((review, i) => (
                <div key={i} className="bg-dark-900 border border-dark-800 p-8 rounded-3xl relative">
                   <div className="flex items-center gap-1 mb-4 text-yellow-500">
                      {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
                   </div>
                   <p className="text-gray-300 italic mb-6 text-sm">"{review.text}"</p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center font-bold text-lg text-primary-400">
                         {review.name.charAt(0)}
                      </div>
                      <div>
                         <h4 className="font-bold text-sm">{review.name}</h4>
                         <span className="text-xs text-secondary-500 flex items-center gap-1 mt-1">
                            <CheckCircle2 className="w-3 h-3" /> Comprador Verificado
                         </span>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </section>

        {/* CTA & OFFER */}
        <section id="oferta" className="py-24 bg-gradient-to-b from-dark-900 to-dark-950 border-t border-dark-800 relative overflow-hidden">
           {/* Background glow */}
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-950/20 to-dark-950/80 pointer-events-none"></div>

           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <div className="inline-flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/30 text-red-500 font-bold px-4 py-2 rounded-full mb-8">
                 <Timer className="w-5 h-5" /> 
                 <span className="text-sm">OFERTA POR TIEMPO LIMITADO</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                 No esperes más para sentirte bien.
              </h2>
              
              <div className="bg-dark-800/50 backdrop-blur border border-primary-500/30 p-8 md:p-12 rounded-3xl shadow-2xl mt-12 mb-12 transform hover:scale-[1.02] transition-transform duration-500 max-w-2xl mx-auto">
                 <h3 className="text-2xl md:text-3xl font-bold mb-2">PROMO SUPER AHORRO 2x1</h3>
                 <p className="text-gray-400 mb-8 max-w-md mx-auto">Lleva 2 pulseras por el precio de 1. Una para ti y otra para quien más quieres.</p>
                 
                 <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                    <div className="text-center">
                       <span className="text-gray-500 line-through text-xl block mb-1">Normal: S/ 190</span>
                       <span className="text-6xl font-black text-secondary-500 block">S/ 95</span>
                    </div>
                 </div>

                 <div className="space-y-4 mb-10 max-w-xs mx-auto text-left text-sm md:text-base">
                    <div className="flex items-center gap-3">
                       <Truck className="w-5 h-5 text-primary-500 shrink-0" />
                       <span className="font-medium">Envío GRATIS en Perú</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <ShieldCheck className="w-5 h-5 text-secondary-500 shrink-0" />
                       <span className="font-medium">Pagas al recibir en casa</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Star className="w-5 h-5 text-yellow-500 shrink-0" />
                       <span className="font-medium">Garantía de Satisfacción</span>
                    </div>
                 </div>
                 
                 <div className="flex flex-col gap-4 max-w-sm mx-auto w-full">
                    <Button href={WHATSAPP_LINK} className="text-lg w-full py-5 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)]">
                       👉 QUIERO EL COMBO 2X1
                    </Button>
                    <p className="text-xs text-gray-500 px-6">Trato directo y seguro por WhatsApp.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-dark-950 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-4 text-left">
             {[
               { q: "¿Funciona realmente la tecnología FIR?", a: "Los Infrarrojos Lejanos (FIR) penetran la piel y elevan ligeramente la temperatura de los tejidos, es un principio físico demostrado que promueve la circulación." },
               { q: "¿Cuánto tiempo para ver resultados?", a: "Puedes sentir más relajación en horas. Para mejora en dolores consistentes sugerimos el uso ininterrumpido por un mínimo de 1 a 2 semanas." },
               { q: "¿Tiene efectos secundarios?", a: "Al ser natural no tiene efectos negativos. (Personas con marcapasos o mujeres embarazadas deben consultar a su médico)." },
               { q: "¿Me puedo bañar con ella?", a: "Sí, la silicona y el acero son a prueba de agua y sudor, perfecta para el uso 24/7." },
             ].map((faq, i) => (
               <div key={i} className="border border-dark-800 rounded-2xl overflow-hidden bg-dark-900/50">
                  <button 
                     onClick={() => toggleFaq(i)}
                     className="w-full text-left p-6 font-bold flex justify-between items-center focus:outline-none"
                  >
                     <span className="text-base md:text-lg pr-4">{faq.q}</span>
                     <ChevronDown className={`w-5 h-5 text-primary-500 transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                     {openFaq === i && (
                        <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           style={{ overflow: 'hidden' }}
                        >
                           <p className="p-6 pt-0 text-gray-400 leading-relaxed text-sm">
                              {faq.a}
                           </p>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
             ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-dark-950 border-t border-dark-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary-500" />
            <span className="font-display font-bold text-xl tracking-tight text-gray-300">FIRit<span className="text-primary-500">-ION</span></span>
          </div>
          <p className="text-xs text-gray-500 text-center max-w-xl">
            Aviso de exención de responsabilidad: Este producto no es un dispositivo médico y no está destinado a diagnosticar, curar o prevenir ninguna enfermedad grave. Los beneficios reportados son testimoniales. Consulte a su médico ante problemas crónicos.
          </p>
          <div className="text-gray-600 text-sm">
             © {new Date().getFullYear()} FIRit-ION Perú.
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON MOBILE */}
      <a 
         href={WHATSAPP_LINK}
         className="fixed bottom-6 right-6 md:hidden z-50 bg-secondary-500 text-white rounded-full p-4 shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center animate-bounce duration-1000"
      >
         <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
