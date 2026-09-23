import { NextResponse } from "next/server";

export interface PortfolioVideo {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  fallbackThumbnail: string;
  category: string;
}

const FALLBACK_VIDEOS: PortfolioVideo[] = [
  {
    id: "GDQ9VaxA3BM",
    title: "I.A para vídeos automotivos",
    duration: "0:07",
    thumbnail: "https://i.ytimg.com/vi/GDQ9VaxA3BM/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/GDQ9VaxA3BM/hqdefault.jpg",
    category: "Automotivo",
  },
  {
    id: "mCTSufrvAE4",
    title: "Vídeo perfume Cebolinha - Posicionamento",
    duration: "0:18",
    thumbnail: "https://i.ytimg.com/vi/mCTSufrvAE4/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/mCTSufrvAE4/hqdefault.jpg",
    category: "Produto Hero",
  },
  {
    id: "NdbhInXJZ80",
    title: "BARBIE VFX TRANSIÇÕES",
    duration: "0:08",
    thumbnail: "https://i.ytimg.com/vi/NdbhInXJZ80/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/NdbhInXJZ80/hqdefault.jpg",
    category: "VFX & Transições",
  },
  {
    id: "pO0uIrTR_68",
    title: "VFX Para marcas",
    duration: "0:26",
    thumbnail: "https://i.ytimg.com/vi/pO0uIrTR_68/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/pO0uIrTR_68/hqdefault.jpg",
    category: "VFX & Marcas",
  },
  {
    id: "eeIVLZthwqI",
    title: "AUTOMOTIVO ELEANOR MUSTANG",
    duration: "0:18",
    thumbnail: "https://i.ytimg.com/vi/eeIVLZthwqI/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/eeIVLZthwqI/hqdefault.jpg",
    category: "Automotivo",
  },
  {
    id: "zyC0kESa4-o",
    title: "VFX PRODUTOS - MANSÃO MAROMBA",
    duration: "0:08",
    thumbnail: "https://i.ytimg.com/vi/zyC0kESa4-o/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/zyC0kESa4-o/hqdefault.jpg",
    category: "Produto Hero",
  },
  {
    id: "jXeChQ9fRfQ",
    title: "PRODUTO HERO - VFX ESCAPE LESTE",
    duration: "0:13",
    thumbnail: "https://i.ytimg.com/vi/jXeChQ9fRfQ/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/jXeChQ9fRfQ/hqdefault.jpg",
    category: "Produto Hero",
  },
  {
    id: "GwrW-rr4YBI",
    title: "Motion Control com I.A",
    duration: "0:16",
    thumbnail: "https://i.ytimg.com/vi/GwrW-rr4YBI/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/GwrW-rr4YBI/hqdefault.jpg",
    category: "IA Criativa",
  },
  {
    id: "icKJJt_GqSA",
    title: "CRIATIVO IA - PRODUTOS",
    duration: "0:11",
    thumbnail: "https://i.ytimg.com/vi/icKJJt_GqSA/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/icKJJt_GqSA/hqdefault.jpg",
    category: "IA Criativa",
  },
  {
    id: "mTxQ279vjQw",
    title: "CONTEÚDO CINEMÁTICO COM IA",
    duration: "0:55",
    thumbnail: "https://i.ytimg.com/vi/mTxQ279vjQw/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/mTxQ279vjQw/hqdefault.jpg",
    category: "IA Criativa",
  },
  {
    id: "wAZu605viPk",
    title: "VFX IRON MAN",
    duration: "0:32",
    thumbnail: "https://i.ytimg.com/vi/wAZu605viPk/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/wAZu605viPk/hqdefault.jpg",
    category: "Efeitos Visuais",
  },
  {
    id: "G21W2TR4g4w",
    title: "VFX EXCLUSIVO 2 - PROJETO SUPERMAN",
    duration: "0:09",
    thumbnail: "https://i.ytimg.com/vi/G21W2TR4g4w/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/G21W2TR4g4w/hqdefault.jpg",
    category: "Efeitos Visuais",
  },
  {
    id: "HgJsh2lj6WA",
    title: "VFX EXCLUSIVO 1 - ENERGÉTICO",
    duration: "0:12",
    thumbnail: "https://i.ytimg.com/vi/HgJsh2lj6WA/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/HgJsh2lj6WA/hqdefault.jpg",
    category: "Produto Hero",
  },
  {
    id: "IjAb4nT9PrQ",
    title: "Efeito VFX LASER OLHOS",
    duration: "0:04",
    thumbnail: "https://i.ytimg.com/vi/IjAb4nT9PrQ/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/IjAb4nT9PrQ/hqdefault.jpg",
    category: "Efeitos Visuais",
  },
  {
    id: "rdcYtvdP7LY",
    title: "Efeito Voando VFX",
    duration: "0:04",
    thumbnail: "https://i.ytimg.com/vi/rdcYtvdP7LY/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/rdcYtvdP7LY/hqdefault.jpg",
    category: "Efeitos Visuais",
  },
  {
    id: "JsssbN2tOxg",
    title: "OUTFIT - MOTION CONTROL 2",
    duration: "0:10",
    thumbnail: "https://i.ytimg.com/vi/JsssbN2tOxg/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/JsssbN2tOxg/hqdefault.jpg",
    category: "Motion Control",
  },
  {
    id: "8u8xb1mOa6U",
    title: "ESTÉTICA CINEMÁTICA",
    duration: "0:22",
    thumbnail: "https://i.ytimg.com/vi/8u8xb1mOa6U/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/8u8xb1mOa6U/hqdefault.jpg",
    category: "Cinematográfico",
  },
  {
    id: "0K0lc02wPTw",
    title: "NARRATIVA FORTE",
    duration: "0:12",
    thumbnail: "https://i.ytimg.com/vi/0K0lc02wPTw/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/0K0lc02wPTw/hqdefault.jpg",
    category: "Cinematográfico",
  },
  {
    id: "OIlfbC2bB50",
    title: "Efeito VFX Gêmeos",
    duration: "0:10",
    thumbnail: "https://i.ytimg.com/vi/OIlfbC2bB50/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/OIlfbC2bB50/hqdefault.jpg",
    category: "Efeitos Visuais",
  },
  {
    id: "CalSP2aHshU",
    title: "Projeto Ação I30 Automotivo",
    duration: "1:27",
    thumbnail: "https://i.ytimg.com/vi/CalSP2aHshU/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/CalSP2aHshU/hqdefault.jpg",
    category: "Automotivo",
  },
  {
    id: "YkwCkyMpLbE",
    title: "Vídeo curso Defesa Pessoal Feminina",
    duration: "1:47",
    thumbnail: "https://i.ytimg.com/vi/YkwCkyMpLbE/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/YkwCkyMpLbE/hqdefault.jpg",
    category: "Comercial",
  },
  {
    id: "siMzw7ScHNk",
    title: "Rocket Visuals (DemoReel) 2026",
    duration: "1:52",
    thumbnail: "https://i.ytimg.com/vi/siMzw7ScHNk/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/siMzw7ScHNk/hqdefault.jpg",
    category: "Demo Reel",
  },
  {
    id: "orCVt7UUpyg",
    title: "ENTRE EM CONTATO",
    duration: "0:05",
    thumbnail: "https://i.ytimg.com/vi/orCVt7UUpyg/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/orCVt7UUpyg/hqdefault.jpg",
    category: "Comercial",
  },
  {
    id: "zqv7flghCJs",
    title: "ENTREGA RÁPIDA",
    duration: "0:03",
    thumbnail: "https://i.ytimg.com/vi/zqv7flghCJs/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/zqv7flghCJs/hqdefault.jpg",
    category: "Comercial",
  },
];

export const revalidate = 3600; // Cache 1 hour

export async function GET() {
  try {
    const playlistUrl = "https://www.youtube.com/playlist?list=PLQIRjU8oGP0o";
    const res = await fetch(playlistUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ videos: FALLBACK_VIDEOS, source: "fallback" });
    }

    const html = await res.text();
    const match =
      html.match(/var ytInitialData = ({[\s\S]*?});<\/script>/) ||
      html.match(/ytInitialData\s*=\s*({[\s\S]+?});/);

    if (!match) {
      return NextResponse.json({ videos: FALLBACK_VIDEOS, source: "fallback" });
    }

    const data = JSON.parse(match[1]);
    const items =
      data?.contents?.twoColumnBrowseResultsRenderer?.tabs?.[0]?.tabRenderer
        ?.content?.sectionListRenderer?.contents?.[0]?.itemSectionRenderer
        ?.contents;

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ videos: FALLBACK_VIDEOS, source: "fallback" });
    }

    const parsedVideos: PortfolioVideo[] = [];

    items.forEach((item, index) => {
      const model = item.lockupViewModel;
      if (!model) return;

      const jsonStr = JSON.stringify(model);
      const idMatch =
        jsonStr.match(/"videoId":"([a-zA-Z0-9_-]{11})"/) ||
        jsonStr.match(/"video_id":"([a-zA-Z0-9_-]{11})"/) ||
        jsonStr.match(/vi\/([a-zA-Z0-9_-]{11})\//);

      if (!idMatch) return;
      const videoId = idMatch[1];

      const rawTitle =
        model.metadata?.lockupMetadataViewModel?.title?.content ||
        model.metadata?.lockupMetadataViewModel?.metadata?.contentMetadataViewModel?.metadataRows?.[0]?.metadataParts?.[0]?.text?.content ||
        `Projeto ${index + 1}`;

      const durationMatch = jsonStr.match(/"text":"(\d+:\d+|\d+:\d+:\d+)"/);
      const duration = durationMatch ? durationMatch[1] : "";

      // Match category from fallback list if available
      const existing = FALLBACK_VIDEOS.find((v) => v.id === videoId);
      const category = existing?.category || "Portfolio";

      parsedVideos.push({
        id: videoId,
        title: rawTitle,
        duration,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        fallbackThumbnail: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
        category,
      });
    });

    if (parsedVideos.length > 0) {
      return NextResponse.json({ videos: parsedVideos, source: "youtube-live" });
    }

    return NextResponse.json({ videos: FALLBACK_VIDEOS, source: "fallback" });
  } catch (err) {
    console.error("Error fetching YouTube playlist:", err);
    return NextResponse.json({ videos: FALLBACK_VIDEOS, source: "fallback" });
  }
}
