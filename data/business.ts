export const business = {
  name: "Sorridente",
  legalName: "Sorridente - Clínica Odontológica",
  niche: "Clínica odontológica em Montes Claros MG",
  description:
    "Clínica odontológica no Centro de Montes Claros MG, com atendimento desde 2009 e tratamentos em clínica geral, implantes, facetas em resina e clareamento dental.",
  city: "Montes Claros - MG",
  phoneLabel: "(38) 3221-0751",
  whatsappLabel: "(38) 9 9105-6433",
  whatsapp: "5538991056433",
  address: "Rua Camilo Prates, 292 - Centro, Montes Claros - MG, 39400-002",
  shortAddress: "Rua Camilo Prates, 292 - Centro",
  email: "dentistasorridente@hotmail.com",
  hours: "Segunda a sexta, das 08:00 às 18:00",
  foundedLabel: "Desde 2009",
  mapsUrl:
    "https://www.google.com.br/maps/place/Sorridente+-+Cl%C3%ADnica+Odontol%C3%B3gica+em+Montes+Claros+MG/@-16.7259601,-43.8664467,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOT1PPm8kiLzWEQ5Ksx0FaLhlR4Q00xPFhrcCKg!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipOT1PPm8kiLzWEQ5Ksx0FaLhlR4Q00xPFhrcCKg%3Dw203-h152-k-no!7i2880!8i2160!4m7!3m6!1s0xab551196c71edf:0x923e195bc31bb1f4!8m2!3d-16.7259474!4d-43.8665199!10e5!16s%2Fg%2F11z3y5c84n?entry=ttu",
  mapEmbed:
    "https://www.google.com/maps?q=Rua%20Camilo%20Prates%20292%20Centro%20Montes%20Claros%20MG&output=embed",
  sourceSite: "https://www.dentistasorridente.com.br/sobre",
  logo: "/assets/sorridente-logo.png",
  hero: {
    eyebrow: "Unidade Centro • Montes Claros",
    title: "Odontologia com cuidado, precisão e a luz de um sorriso bem tratado.",
    subtitle:
      "Atendimento para rotina, estética e reabilitação oral em uma clínica com localização central, estrutura organizada e agendamento direto pelo WhatsApp.",
    image: "/assets/clinica-sorridente-maps.png"
  },
  stats: [
    { value: "2009", label: "atendimento desde" },
    { value: "4", label: "consultórios na estrutura" },
    { value: "Centro", label: "localização prática" },
    { value: "WhatsApp", label: "agendamento direto" }
  ],
  services: [
    {
      title: "Clínica geral",
      description:
        "Avaliação, orientação preventiva, limpezas, restaurações e acompanhamento da saúde bucal do paciente.",
      tag: "Rotina",
      procedures: ["Avaliação", "Limpeza", "Restauração", "Prevenção"]
    },
    {
      title: "Implantes dentários",
      description:
        "Planejamento para reabilitar perdas dentárias com foco em função mastigatória, conforto e segurança.",
      tag: "Reabilitação",
      procedures: ["Planejamento", "Reposição dentária", "Função mastigatória", "Acompanhamento"]
    },
    {
      title: "Facetas em resina",
      description:
        "Alternativa estética para melhorar formato, proporção e harmonia do sorriso com abordagem conservadora.",
      tag: "Estética",
      procedures: ["Formato", "Proporção", "Harmonia", "Acabamento"]
    },
    {
      title: "Clareamento dental",
      description:
        "Tratamento para deixar o sorriso mais claro com orientação profissional e indicação personalizada.",
      tag: "Estética",
      procedures: ["Avaliação de cor", "Orientação", "Clareamento", "Manutenção"]
    }
  ],
  differentials: [
    {
      title: "Histórico local",
      description: "Atuação divulgada desde 2009, reforçando presença e reconhecimento em Montes Claros."
    },
    {
      title: "Estrutura acolhedora",
      description: "Ambiente interno com iluminação quente, acabamento claro e consultórios organizados."
    },
    {
      title: "Localização prática",
      description: "Endereço no Centro, em ponto fácil para consultas de rotina e retorno."
    },
    {
      title: "Contato direto",
      description: "WhatsApp em destaque para reduzir etapas entre pesquisa, dúvida e agendamento."
    }
  ],
  patientJourney: [
    {
      title: "Primeiro contato",
      description: "O paciente chama no WhatsApp e informa o que deseja avaliar."
    },
    {
      title: "Avaliação",
      description: "A clínica entende a necessidade e orienta o caminho de tratamento."
    },
    {
      title: "Planejamento",
      description: "Cada procedimento é indicado conforme o caso, sem promessas genéricas."
    },
    {
      title: "Acompanhamento",
      description: "Consultas e retornos ajudam a manter o cuidado depois do procedimento."
    }
  ],
  faq: [
    {
      question: "Onde fica a Clínica Sorridente?",
      answer: "A clínica fica na Rua Camilo Prates, 292, no Centro de Montes Claros MG."
    },
    {
      question: "Quais tratamentos aparecem como destaque?",
      answer:
        "As páginas públicas da clínica destacam clínica geral, implantes dentários, facetas em resina e clareamento dental."
    },
    {
      question: "Como agendar atendimento?",
      answer:
        "Use o WhatsApp oficial divulgado pela clínica para solicitar horários, avaliação ou mais informações."
    },
    {
      question: "A clínica atende urgências ou convênios?",
      answer:
        "Essas informações não aparecem com segurança nas fontes públicas consultadas. O ideal é confirmar diretamente com a clínica antes de se deslocar."
    }
  ],
  colors: {
    bg: "#fffaf0",
    surface: "#ffffff",
    text: "#191713",
    muted: "#6f6658",
    primary: "#1f1a13",
    secondary: "#c99b32",
    accent: "#f5df9d",
    soft: "#f7efe0"
  }
};

export type Business = typeof business;
