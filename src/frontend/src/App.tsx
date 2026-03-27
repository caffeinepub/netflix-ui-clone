import {
  Bell,
  Download,
  Flame,
  Gamepad2,
  Home,
  Info,
  Play,
  Search,
  Share2,
  ThumbsDown,
  ThumbsUp,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const PROFILES = [
  {
    id: 1,
    name: "Saúl",
    img: "https://occ-0-2430-2433.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfnZLmfujuhA1nXtX4UoO77cH0CJNAFRN7-s4R92qiPUQqUgHh_Q_YscfkNEZNVc_0UAyoytd8gY4USUO7VSbKB0Zl806PdA3J6F.png?r=f4c",
  },
  {
    id: 2,
    name: "Primeagen",
    img: "https://occ-0-2430-2433.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUA9QLiVGC4PuLGarV3oGLJhrOoIewsw54mdcsVtROUf1TRm69Wzoio5Ml2Vc09n4_MvJMUpo_FzjkVbnPBrFaZLHcKVgTt9lcBZ.png?r=508",
  },
  {
    id: 3,
    name: "Theo",
    img: "https://occ-0-2430-2433.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZumJ3wvSKM7od-r3UjhVF9j3yteWlQYA-51F3SNoI682llhul1Xf_CUkMnfP_17Md2lpOOhbwHeGufvo8kOTjptoS_bcwtniHKz.png?r=e6e",
  },
  {
    id: 4,
    name: "Kids",
    img: "https://occ-0-2430-2433.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfBs_RmrXu6XN02hkLZzUgrqSOMFIx6LUk_-T4dG4Vgr7rwnmYyejpUUebFqmVDbnrwxESqJu6ml0q-G6KQVzRqKA42KmNEPkDmn.png?r=f55",
  },
];

const TOP_PICKS: { key: string; url: string }[] = [
  {
    key: "tp1",
    url: "https://occ-0-1175-299.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZluAolekEH4h1By3Std8dcNk8JovnP34H6kSYJ4BPChXbH2-hOqhMtqsu5DBiR5vshilHH6FdA8K5n8n0ZIiOiWhkHbX8Spl-LlW7EwHc8GiU5UQz5LBeUl6SkUOZtS-qhllDJg6T2vbcW-GjrzgixhwH4riuh4nssRAqVbIbNK0FpoU8C8pG_Xox26ItqZivERjc11PwrFqt-APPboT20i0BGR6ofbPdvV9lBHHrUBs_lv7Xq6OLb5-JpRxoLbmOaa6dIQX16sBD0XZujQ3hWxtXFypAnjo20uC-dtfJ9pk0tToI0FFYU0Pg.jpg",
  },
  {
    key: "tp2",
    url: "https://m.media-amazon.com/images/I/61y3DfBfGdL._AC_UF894,1000_QL80_.jpg",
  },
  {
    key: "tp3",
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2518eb113535837.602a4c183dd5d.jpg",
  },
  {
    key: "tp4",
    url: "https://resizing.flixster.com/Dz6J1iPXCauKGnfcOIBwTPS_PGo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25443430_v_v13_af.jpg",
  },
  {
    key: "tp5",
    url: "https://occ-0-7-6.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYgABe8N58Ml7XKQVZb2QJf7p2xVZnwUY51qlPNkwPyu7zqTlm90GpBKIhMcOaNkSYmnVKnvHXgQOYzPphhZQEV7RIxBtMCKY0k.jpg?r=47f",
  },
  {
    key: "tp6",
    url: "https://occ-0-7-6.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYGcsFu_mkMjtk4rvnfxxvWjeeOlApllPCyc-29ewiIuXHmqXM-O95Tj-8I6zcxNCTKqbkTuRTUF697GYJhp4ma5UaL380pah7soKzUZ1P70hE8Mtr97WV2LKvvtlVLjkYpziQDosCVOoIQnaSH8W9b6irW5D0TuFr-lV01apG-65RzdiWNsWyWE53WTtpQEjCvSL-jzxnKgx5BkJjdmKcLX7q0cLpHoR1Vtgh7zWvvRGXO9JRq4P5NiTO5SB23T_MfJq0pFVnVsKUiaw174RESEVmxd.jpg?r=b02",
  },
];

const TOP10: { key: string; url: string; rank: number }[] = [
  {
    key: "t1",
    rank: 1,
    url: "https://flixpatrol.com/runtime/cache/files/posters/g/w350/gzmfmmpjhomofksahsdac62dyg2.webp",
  },
  {
    key: "t2",
    rank: 2,
    url: "https://flixpatrol.com/runtime/cache/files/posters/c/w350/cqsthxrvutfnannjtiehexiackv.webp",
  },
  {
    key: "t3",
    rank: 3,
    url: "https://flixpatrol.com/runtime/cache/files/posters/t/w350/tprh0rm00esnefni1zxqqttipzj.webp",
  },
  {
    key: "t4",
    rank: 4,
    url: "https://flixpatrol.com/runtime/cache/files/posters/h/w350/hruo0cxc5xinxvnmia2r5fjzqvd.webp",
  },
  {
    key: "t5",
    rank: 5,
    url: "https://flixpatrol.com/runtime/cache/files/posters/5/w350/5prgsfk28eapmhr247mhzp95upa.webp",
  },
];

const NEW_ON_NETFLIX: { key: string; url: string }[] = [
  {
    key: "n1",
    url: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVKA0u-N0ygB-RJjaICEHfq35IHNNvwQixGxkznVyHovZyHwmBDof11LD3b0JRTPoDC_ugmP_4HO9ZuBBStJOuY4FHIQf5nhrRoscwa-KEWvRf5hZfJ9_kFsK6iG6LILMhMv4Q.jpg?r=ee0",
  },
  {
    key: "n2",
    url: "https://ih1.redbubble.net/image.3317033122.2751/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  },
  {
    key: "n3",
    url: "https://www.indiewire.com/wp-content/uploads/2017/09/barry-2016.jpg?w=675",
  },
  {
    key: "n4",
    url: "https://occ-0-7-6.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc3sBosDZOtc_U75kJoAT7HlB_B6IHS4N8ljUIeiCxKtjQrFh8F3bKIoJijBd12oNf0BvhMUssbbuA8Fppuk7GiA4MS8KtXWMQ1RsBRZ5uEEE2iAprWfwHfeNLI6259THdaXq232FpwUHOhYXDtd9Aqm7mFH7PejaeAouQn521Gu-kBH7tINNi3-5aIwE1bO2PeZ0bgmf4LjA8Y-ipxl7q3A-wxsFN_ClZ1iMeTPLdf1DPtVJxMf5N6qZbBxG9yKLti0CYVhVHf5MZUS7jZ20nxRR5hTqtSyix0d1jFg6yHQTiiHl1p3dB89.jpg?r=1a2",
  },
  {
    key: "n5",
    url: "https://occ-0-7-6.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXjI9Ox37vDn-cwXjy3s6x_Jwi5aMyRXfrRi1PBRvwakPWypStvcptFi8N6msnOYGlrZm7ofqDis8LxTkOjvO8Zg6BU2Y2tPQPJNI9-1ybJi_OUBf4Lc429pXgnGbo6eBPLvxcQCMREwhoRKfoSiO8GLDmQ8YZxm0oHqj59dfLWUe1zcUOlb0D4S1kTwAIzW91D0scveopI234MPZoluP3ZnGgCCoBSPemxE2DNU2gzEMlJ0d0m4vxbUF5Kc_I3IIProVgdjoZlBPnxFc7mVAZMUr_MFvLl4C02baUL0h-8d1YUfin3j93uh.jpg?r=0e9",
  },
];

const FAMILIAR_TV: { key: string; url: string }[] = [
  {
    key: "f1",
    url: "https://i.pinimg.com/550x/0e/4c/e0/0e4ce03e5efed43efe2986faa47dd8f8.jpg",
  },
  {
    key: "f2",
    url: "https://kettlefirecreative.com/wp-content/uploads/2020/06/dead-to-me.jpg",
  },
  {
    key: "f3",
    url: "https://occ-0-7-6.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS9AuUEgM8he8VeLCq-Im5LFHkNiahiew8jirRpiS5rsLW4FtTQA8BlzN2jgNC7_waEOc7RrZkczxSVLwADNpe71PAlAMGr5cq8.jpg?r=28d",
  },
  {
    key: "f4",
    url: "https://occ-0-7-6.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRWpEIxie8Ugy9Ip4FTjEM2RMQ8AT70NDccCcoJO5Sme_HYg-iOptG3fcLLs1NmK0Jc63byQ_0FyTH9tDiI7EEpB88GQLXYToSoMibwhUPZ9bfw8ediiw2FnQQs6wOrhr2ExZxPiIo7VO8gtohTDQ6Sm4oeIB3P0RzX-_E1AvH6Q8Q9o40G1WFq7CX1QdYdwgg2LXVDOXslhWW78dPNwnm_4VVE9bOcmwtX3PWKxkCCGvG1drN2ULeY3ExzefX2yHb75AGXzfE2lR8zI7nytXz9cukZ6MdHvMIISxG3Oi7OkppsJtrY.jpg?r=266",
  },
  {
    key: "f5",
    url: "https://occ-0-7-6.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYCrKYQr0V1tvs1V2dfnwd5fQjFQ9LUtKj59HiLU738LSQrxHDfd-PH7vsHPLReszuITXohJ-T_zl9aj76lrdVtfyCgsYJwayyc.jpg?r=e4d",
  },
];

const GAMES = [
  {
    key: "g1",
    title: "Dead Cells: Netflix Edition",
    type: "Action",
    img: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQXlHfX_1WN1bSiZv4jXieBsZbXRLNIUU9BPzv0Cohep2F2pmqrMzmWwRp7anXyBLRGhrBKMOuoAZoj9v8Si3-mJ6o2-5bc6o2YZtsJSIgpOiM4gcLAETYcGsppaorpaRaXWzgZBX5ftLz-15gi1mBNcD.jpg?r=77f",
  },
  {
    key: "g2",
    title: "GTA Vice City",
    type: "Action",
    img: "https://cdn2.steamgriddb.com/grid/288da12c771014e02856de1075993bfe.png",
  },
  {
    key: "g3",
    title: "Dumb Ways to Survive",
    type: "Adventure",
    img: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQQcDhhT3e1DUow6g0_4qwopgNp7SlXCdu0lUEUsVkOIWO31cqxdLNL_opwXg-xVAEelLSrjpOAAHM7fDTyz-5h-jhQELzJG2faAEOEtTt-4NKcgkLre5Ep4dqwJE3-ZHPioqxe1w3MVDR8J8APA7m4wQ.jpg?r=01d",
  },
  {
    key: "g4",
    title: "Bowling Ballers",
    type: "Arcade",
    img: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQcIeF6n2wF0YVb_qZZQnxFsky2xLQEGMq1zxnK5EbjY-3tJVS8YOOdYUzRvrEgBH1NV_Nw761AOTWdfs3vPFpBpjNnpwA148Tj-l4q3e_cCXRoRxMTM17W9t2VsY7QS7M3nTyUB9vbeRZnurR5q4oREQ.jpg?r=af2",
  },
  {
    key: "g5",
    title: "Braid",
    type: "Puzzle",
    img: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQSfHSN4chf1cmF68hhmMu3hA76r-h-O1OB1-cjSZh7BJsHPpTiGnPe6N8ywi9jVdR5mpXFbD9_aA49IfZCZ9YYowfGtTs_jHDC7YnRlrscX67sFLyokqn8PHPd-QGDx_VoQVbj15XUQsuDSDpuULeDSj.jpg?r=1e8",
  },
  {
    key: "g6",
    title: "Country Friends",
    type: "Simulation",
    img: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQXnyh2jfpZQvwntLidUqGhMCdvfOmu70gDuCxW2m8zb0Pe2IgbGCPT__U9hZbGyHMTBTc1RxLouspr_bwbq79lmzcrtRxZNLrV2Hmt5PEbzUEvP-rPl3RHcS0rai2eImnN_yhRgu5mLhG5-cMhrPQakm.jpg?r=b5c",
  },
];

const GAME_ROW_IMAGES = GAMES.map((g) => ({ key: g.key, url: g.img }));

const NEW_HOT_ITEMS = [
  {
    id: 1,
    title: "Jake Paul vs. Mike Tyson",
    date: "NOV 15",
    img: "https://occ-0-2430-2433.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSWRinEsQOaPuYqcT8MP4lkknrc5czNm9qgpVzfBrl7maTIufi_VLNohrkfAyT4zPnHfos7z0-PMaq-cjPP8qI4fmsmo7F4nRO6M.jpg?r=77a",
    type: "LIVE",
    subtext: "Live Event Coming November 15 at 8:00 PM EST",
    desc: "The most anticipated boxing match of the year. Jake Paul faces off against the legendary Mike Tyson in a historic event.",
    watchNow: false,
  },
  {
    id: 2,
    title: "The Madness",
    date: "NOV 7",
    img: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS9bCR4F6Js4srd5OilhZjU7lDN1fPubypyab5erIbx1_2z-p82uS8v1jrQw2g4afqaVLtGLq-ZLDQDrIp__lui88gHXmWogeu-hG8_zGTFNCH963EFK89IlVeuHwwalhtHGaA.webp?r=0c3",
    type: "SERIES",
    subtext: "New Series arriving November 7",
    desc: "A Black sports commentator becomes the target of a dangerous manhunt after witnessing a murder while on a camping trip.",
    watchNow: false,
  },
  {
    id: 3,
    title: "Focus",
    date: "Sunday",
    img: "https://resizing.flixster.com/0XTf884E7bSSFQBqHaFt-9erpi0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10939169_v_h8_aa.jpg",
    type: "SERIES",
    subtext: "New episodes every Sunday",
    desc: "A seasoned con man takes a young woman under his wing. Things get complicated when she shows up years later.",
    watchNow: true,
  },
  {
    id: 4,
    title: "The Great Indian Kapil Show",
    date: "SAT",
    img: "https://images.indianexpress.com/2024/02/Kapil-Sharma-announces-his-new-show-with-Netflix-called-The-Great-Indian-Kapil-Show.jpg",
    type: "LIMITED SERIES",
    subtext: "New episodes every Saturday",
    desc: "India's biggest comedian is back with an all new show featuring top Bollywood celebrities and exciting entertainment.",
    watchNow: true,
  },
];

const CATEGORIES = [
  { name: "Action", color: "#0071EB" },
  { name: "Comedy", color: "#D81B60" },
  { name: "Drama", color: "#E65100" },
  { name: "Horror", color: "#388E3C" },
  { name: "Romance", color: "#6A1B9A" },
  { name: "Sci-Fi", color: "#00838F" },
  { name: "Thriller", color: "#37474F" },
  { name: "Animation", color: "#F57F17" },
  { name: "Documentary", color: "#1565C0" },
  { name: "Crime", color: "#4E342E" },
  { name: "Kids & Family", color: "#2E7D32" },
  { name: "Stand-Up Comedy", color: "#AD1457" },
];

type Screen = "profiles" | "main";
type Tab = "home" | "newhot" | "games" | "search" | "downloads";
interface Movie {
  img: string;
  title?: string;
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const css = `
@keyframes fadeScaleIn {
  from { opacity: 0; transform: scale(0.85); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes kenBurns {
  from { transform: scale(1); }
  to   { transform: scale(1.08); }
}
@keyframes slideUp {
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.profile-avatar {
  animation: fadeScaleIn 0.4s ease both;
}
.hero-img {
  animation: kenBurns 12s ease-in-out infinite alternate;
}
.slide-up {
  animation: slideUp 0.35s cubic-bezier(0.32,0.72,0,1) both;
}
.fade-in {
  animation: fadeIn 0.3s ease both;
}
.scroll-row {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
  gap: 8px;
  padding: 0 16px;
}
.scroll-row::-webkit-scrollbar { display: none; }
.scroll-row > * { scroll-snap-align: start; flex-shrink: 0; }
`;

// ─── Components ──────────────────────────────────────────────────────────────

function ProfileSelect({ onSelect }: { onSelect: () => void }) {
  return (
    <div
      style={{ background: "#141414", minHeight: "100vh" }}
      className="flex flex-col items-center justify-center px-6"
    >
      <h1 className="text-white text-3xl font-bold mb-10 tracking-wide">
        Who&apos;s Watching?
      </h1>
      <div className="grid grid-cols-2 gap-6 mb-10">
        {PROFILES.map((p, i) => (
          <button
            type="button"
            key={p.id}
            onClick={onSelect}
            data-ocid={`profile.item.${i + 1}`}
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className="profile-avatar overflow-hidden"
              style={{
                width: 100,
                height: 100,
                borderRadius: 8,
                animationDelay: `${i * 60}ms`,
              }}
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover group-hover:brightness-75 transition-all"
              />
            </div>
            <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
              {p.name}
            </span>
          </button>
        ))}
      </div>
      <button
        type="button"
        className="text-gray-400 text-sm border border-gray-600 px-6 py-2 hover:text-white hover:border-white transition-colors"
      >
        Manage Profiles
      </button>
    </div>
  );
}

function MovieDetailOverlay({
  movie,
  onClose,
}: { movie: Movie; onClose: () => void }) {
  const actionButtons = [
    { icon: <ThumbsUp size={22} />, label: "Rate" },
    { icon: <ThumbsDown size={22} />, label: "Not for me" },
    { icon: <Share2 size={22} />, label: "Share" },
  ];
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto slide-up"
      style={{ background: "#141414" }}
      data-ocid="movie.modal"
    >
      <div className="relative">
        <div className="relative" style={{ height: 300 }}>
          <img
            src={movie.img}
            alt="movie"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(transparent 40%, #141414 100%)",
            }}
          />
          <button
            type="button"
            onClick={onClose}
            data-ocid="movie.close_button"
            className="absolute top-4 right-4 rounded-full flex items-center justify-center"
            style={{ width: 36, height: 36, background: "rgba(0,0,0,0.7)" }}
          >
            <X size={20} color="white" />
          </button>
        </div>
        <div className="px-4 pb-20">
          <h2 className="text-white text-2xl font-bold mb-1">
            {movie.title ?? "OPPENHEIMER"}
          </h2>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-400 font-semibold text-sm">
              97% Match
            </span>
            <span className="text-gray-400 text-sm">2023</span>
            <span className="border border-gray-500 text-gray-400 text-xs px-1">
              R
            </span>
            <span className="text-gray-400 text-sm">3h 0m</span>
          </div>
          <div
            className="inline-flex items-center gap-1 mb-3 px-2 py-0.5 rounded text-xs font-bold text-white"
            style={{ background: "#E50914" }}
          >
            #1 in Movies Today
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <button
              type="button"
              data-ocid="movie.primary_button"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded font-bold text-black text-base"
              style={{ background: "#fff" }}
            >
              <Play size={18} fill="black" /> Play
            </button>
            <button
              type="button"
              data-ocid="movie.secondary_button"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded font-bold text-white text-base"
              style={{ background: "rgba(109,109,110,0.7)" }}
            >
              <Download size={18} /> Download
            </button>
          </div>
          <p className="text-white text-sm leading-relaxed mb-4">
            The story of J. Robert Oppenheimer and his role in the development
            of the atomic bomb during World War II.
          </p>
          <div className="flex gap-5 mb-4">
            {actionButtons.map((a) => (
              <button
                type="button"
                key={a.label}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-white">{a.icon}</span>
                <span className="text-gray-400 text-xs">{a.label}</span>
              </button>
            ))}
          </div>
          <div className="text-gray-400 text-sm mb-1">
            <span className="text-gray-300">Cast: </span>Cillian Murphy, Emily
            Blunt, Matt Damon, Robert Downey Jr.
          </div>
          <div className="text-gray-400 text-sm">
            <span className="text-gray-300">Director: </span>Christopher Nolan
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentRow({
  title,
  items,
  onSelect,
  ocidPrefix,
}: {
  title: string;
  items: { key: string; url: string }[];
  onSelect: (m: Movie) => void;
  ocidPrefix: string;
}) {
  return (
    <div className="mb-5">
      <h3 className="text-white font-bold text-base px-4 mb-2">{title}</h3>
      <div className="scroll-row">
        {items.map((item, i) => (
          <button
            type="button"
            key={item.key}
            data-ocid={`${ocidPrefix}.item.${i + 1}`}
            onClick={() => onSelect({ img: item.url, title })}
            className="overflow-hidden flex-shrink-0"
            style={{ width: 100, height: 150, borderRadius: 4 }}
          >
            <img
              src={item.url}
              alt={`poster ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function Top10Row({
  title,
  items,
  onSelect,
}: {
  title: string;
  items: { key: string; url: string; rank: number }[];
  onSelect: (m: Movie) => void;
}) {
  return (
    <div className="mb-5">
      <h3 className="text-white font-bold text-base px-4 mb-2">{title}</h3>
      <div className="scroll-row" style={{ paddingLeft: 8 }}>
        {items.map((item) => (
          <button
            type="button"
            key={item.key}
            data-ocid={`top10.item.${item.rank}`}
            onClick={() => onSelect({ img: item.url })}
            className="relative flex items-end flex-shrink-0"
            style={{ width: 120, height: 150 }}
          >
            <span
              className="absolute left-0 bottom-0 font-black select-none"
              style={{
                fontSize: 80,
                lineHeight: 1,
                WebkitTextStroke: "2px #555",
                color: "#141414",
                zIndex: 1,
              }}
            >
              {item.rank}
            </span>
            <img
              src={item.url}
              alt={`top ${item.rank}`}
              className="absolute right-0 bottom-0 object-cover"
              style={{ width: 80, height: 120, borderRadius: 4, zIndex: 2 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function GamesRow() {
  return (
    <div className="mb-5">
      <h3 className="text-white font-bold text-base px-4 mb-2">Mobile Games</h3>
      <div className="scroll-row">
        {GAME_ROW_IMAGES.map((item) => (
          <div
            key={item.key}
            className="overflow-hidden flex-shrink-0"
            style={{ width: 100, height: 100, borderRadius: 8 }}
          >
            <img
              src={item.url}
              alt="game"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function HomeTab({ onMovieSelect }: { onMovieSelect: (m: Movie) => void }) {
  const heroMovie: Movie = {
    img: "https://m.media-amazon.com/images/I/61y3DfBfGdL._AC_UF894,1000_QL80_.jpg",
    title: "OPPENHEIMER",
  };
  return (
    <div style={{ background: "#141414", paddingBottom: 80 }}>
      <div className="relative overflow-hidden" style={{ height: "65vh" }}>
        <img
          src={heroMovie.img}
          alt="Oppenheimer"
          className="hero-img w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(transparent 30%, #141414 100%)",
          }}
        />
        <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3 px-4">
          <h2 className="text-white text-3xl font-black tracking-widest">
            OPPENHEIMER
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              data-ocid="hero.primary_button"
              onClick={() => onMovieSelect(heroMovie)}
              className="flex items-center gap-1.5 px-6 py-2 rounded font-bold text-black text-sm"
              style={{ background: "#fff" }}
            >
              <Play size={16} fill="black" /> Play
            </button>
            <button
              type="button"
              data-ocid="hero.secondary_button"
              onClick={() => onMovieSelect(heroMovie)}
              className="flex items-center gap-1.5 px-5 py-2 rounded font-bold text-white text-sm"
              style={{ background: "rgba(109,109,110,0.7)" }}
            >
              <Info size={16} /> More Info
            </button>
          </div>
        </div>
      </div>
      <ContentRow
        title="Today's Top Picks for You"
        items={TOP_PICKS}
        onSelect={onMovieSelect}
        ocidPrefix="picks"
      />
      <Top10Row
        title="Top 10 Movies in the U.S. Today"
        items={TOP10}
        onSelect={onMovieSelect}
      />
      <ContentRow
        title="New on Netflix"
        items={NEW_ON_NETFLIX}
        onSelect={onMovieSelect}
        ocidPrefix="new"
      />
      <ContentRow
        title="Familiar TV Favorites"
        items={FAMILIAR_TV}
        onSelect={onMovieSelect}
        ocidPrefix="tv"
      />
      <GamesRow />
      <div className="text-center text-gray-600 text-xs px-4 py-6">
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          caffeine.ai
        </a>
      </div>
    </div>
  );
}

function NewHotTab() {
  const [filter, setFilter] = useState<"soon" | "watching">("soon");
  return (
    <div
      style={{ background: "#141414", minHeight: "100vh", paddingBottom: 80 }}
    >
      <div className="px-4 pt-14 pb-2">
        <h1 className="text-white text-2xl font-bold mb-4">New &amp; Hot</h1>
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            data-ocid="newhot.tab"
            onClick={() => setFilter("soon")}
            className="px-4 py-1.5 rounded-full text-sm font-semibold transition-colors"
            style={{
              background: filter === "soon" ? "#fff" : "rgba(255,255,255,0.1)",
              color: filter === "soon" ? "#000" : "#fff",
            }}
          >
            🍿 Coming Soon
          </button>
          <button
            type="button"
            data-ocid="newhot.tab"
            onClick={() => setFilter("watching")}
            className="px-4 py-1.5 rounded-full text-sm font-semibold transition-colors"
            style={{
              background:
                filter === "watching" ? "#fff" : "rgba(255,255,255,0.1)",
              color: filter === "watching" ? "#000" : "#fff",
            }}
          >
            🔥 Everyone&apos;s Watching
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-4">
        {NEW_HOT_ITEMS.map((item, i) => (
          <div key={item.id} data-ocid={`newhot.item.${i + 1}`}>
            <div className="flex items-center gap-3 mb-2">
              <div
                className="rounded-full flex items-center justify-center text-white font-bold text-xs"
                style={{
                  width: 44,
                  height: 44,
                  background: "#E50914",
                  flexShrink: 0,
                }}
              >
                {item.date}
              </div>
              <div className="flex-1" />
              {!item.watchNow && (
                <button type="button" className="flex flex-col items-center">
                  <Bell size={20} color="white" />
                  <span className="text-white text-xs mt-0.5">Remind Me</span>
                </button>
              )}
            </div>
            <img
              src={item.img}
              alt={item.title}
              className="w-full object-cover rounded mb-2"
              style={{ height: 200 }}
            />
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-xs font-bold px-1.5 py-0.5 rounded"
                style={{
                  border: `1px solid ${item.type === "LIVE" ? "#E50914" : "#fff"}`,
                  color: item.type === "LIVE" ? "#E50914" : "#fff",
                }}
              >
                {item.type}
              </span>
              <span className="text-gray-400 text-xs">{item.subtext}</span>
            </div>
            <h3 className="text-white font-bold text-base mb-1">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            {item.watchNow && (
              <button
                type="button"
                data-ocid={`newhot.primary_button.${i + 1}`}
                className="mt-2 flex items-center gap-1.5 px-5 py-2 rounded font-bold text-black text-sm"
                style={{ background: "#fff" }}
              >
                <Play size={14} fill="black" /> Watch Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function GamesTab() {
  return (
    <div
      style={{ background: "#141414", minHeight: "100vh", paddingBottom: 80 }}
    >
      <div className="px-4 pt-14">
        <h1 className="text-white text-2xl font-bold mb-4">Mobile Games</h1>
        <div className="grid grid-cols-2 gap-3">
          {GAMES.map((game, i) => (
            <div key={game.key} data-ocid={`games.item.${i + 1}`}>
              <div
                className="overflow-hidden"
                style={{ aspectRatio: "1", borderRadius: 12 }}
              >
                <img
                  src={game.img}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-sm font-semibold mt-1 leading-tight">
                {game.title}
              </p>
              <span className="text-gray-400 text-xs">{game.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SearchTab() {
  const [query, setQuery] = useState("");
  const allImages = [...TOP_PICKS, ...NEW_ON_NETFLIX, ...FAMILIAR_TV];
  const hasQuery = query.trim().length > 0;

  return (
    <div
      style={{ background: "#141414", minHeight: "100vh", paddingBottom: 80 }}
    >
      <div className="px-4 pt-14">
        <div
          className="flex items-center gap-2 px-3 py-2.5 rounded-md mb-5"
          style={{ background: "#333" }}
        >
          <Search size={18} color="#808080" />
          <input
            data-ocid="search.search_input"
            type="text"
            placeholder="Search for a show, movie, genre, etc."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-500"
          />
        </div>
        {hasQuery ? (
          <div>
            <h3 className="text-white font-bold mb-3">Results</h3>
            <div className="grid grid-cols-3 gap-1">
              {allImages.map((item) => (
                <div
                  key={item.key}
                  className="aspect-[2/3] rounded overflow-hidden"
                >
                  <img
                    src={item.url}
                    alt="result"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-white font-bold mb-3">Browse by Category</h3>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((cat, i) => (
                <button
                  type="button"
                  key={cat.name}
                  data-ocid={`search.item.${i + 1}`}
                  className="py-4 px-3 text-white font-bold text-sm text-left"
                  style={{ background: cat.color, borderRadius: 6 }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DownloadsTab() {
  return (
    <div
      style={{ background: "#141414", minHeight: "100vh" }}
      className="flex flex-col"
    >
      <div className="px-4 pt-14">
        <h1 className="text-white text-2xl font-bold mb-6">My Downloads</h1>
        <div
          className="flex items-center justify-between p-4 rounded-md mb-4"
          style={{ background: "#1a1a1a" }}
        >
          <div>
            <p className="text-white font-semibold text-sm">Smart Downloads</p>
            <p className="text-gray-400 text-xs mt-0.5">
              Automatically manage your downloads
            </p>
          </div>
          <div
            className="rounded-full"
            style={{
              width: 44,
              height: 24,
              background: "#E50914",
              position: "relative",
            }}
          >
            <div
              className="absolute rounded-full bg-white"
              style={{ width: 20, height: 20, top: 2, right: 2 }}
            />
          </div>
        </div>
      </div>
      <div
        data-ocid="downloads.empty_state"
        className="flex-1 flex flex-col items-center justify-center gap-4 px-8"
      >
        <div
          className="rounded-full flex items-center justify-center"
          style={{ width: 80, height: 80, border: "3px solid white" }}
        >
          <Download size={36} color="white" />
        </div>
        <h2 className="text-white text-xl font-bold text-center">
          Find Something to Download
        </h2>
        <p className="text-gray-400 text-sm text-center">
          Films and series you download appear here.
        </p>
        <button
          type="button"
          data-ocid="downloads.primary_button"
          className="border border-white text-white text-sm font-semibold px-6 py-2.5 rounded"
        >
          Find Something to Download
        </button>
      </div>
    </div>
  );
}

function BottomTabBar({
  active,
  onChange,
}: { active: Tab; onChange: (t: Tab) => void }) {
  const tabs: { id: Tab; icon: React.ReactNode; label: string }[] = [
    { id: "home", icon: <Home size={24} />, label: "Home" },
    { id: "newhot", icon: <Flame size={24} />, label: "New & Hot" },
    { id: "games", icon: <Gamepad2 size={24} />, label: "Games" },
    { id: "search", icon: <Search size={24} />, label: "Search" },
    { id: "downloads", icon: <Download size={24} />, label: "Downloads" },
  ];
  return (
    <nav
      className="fixed bottom-0 left-1/2 flex items-center justify-around"
      style={{
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: 430,
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(10px)",
        paddingBottom: "env(safe-area-inset-bottom, 8px)",
        paddingTop: 10,
        zIndex: 40,
      }}
    >
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          data-ocid={`nav.${tab.id}.link`}
          onClick={() => onChange(tab.id)}
          className="flex flex-col items-center gap-0.5 pb-1"
          style={{ color: active === tab.id ? "#fff" : "#808080" }}
          aria-label={tab.label}
        >
          {tab.icon}
        </button>
      ))}
    </nav>
  );
}

function AppHeader({ activeTab }: { activeTab: Tab }) {
  const pillLabels = ["TV Shows", "Movies", "Categories"];
  return (
    <header
      className="fixed top-0 left-1/2 flex items-center justify-between px-4 z-30"
      style={{
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: 430,
        height: 56,
        background:
          activeTab === "home"
            ? "linear-gradient(#141414cc 0%, transparent 100%)"
            : "#141414",
      }}
    >
      <span
        className="font-black text-xl tracking-widest"
        style={{ color: "#E50914" }}
      >
        NETFLIX
      </span>
      {activeTab === "home" && (
        <div
          className="absolute left-1/2"
          style={{ transform: "translateX(-50%)", display: "flex", gap: 8 }}
        >
          {pillLabels.map((pill) => (
            <button
              type="button"
              key={pill}
              className="text-white text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              {pill}
            </button>
          ))}
        </div>
      )}
      <img
        src={PROFILES[0].img}
        alt="profile"
        className="rounded object-cover"
        style={{ width: 30, height: 30, borderRadius: 4 }}
      />
    </header>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState<Screen>("profiles");
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="relative mx-auto"
      style={{
        maxWidth: 430,
        minHeight: "100vh",
        background: "#141414",
        overflow: "hidden",
      }}
    >
      {screen === "profiles" ? (
        <ProfileSelect onSelect={() => setScreen("main")} />
      ) : (
        <div className="fade-in">
          <AppHeader activeTab={activeTab} />
          <main>
            {activeTab === "home" && (
              <HomeTab onMovieSelect={setSelectedMovie} />
            )}
            {activeTab === "newhot" && <NewHotTab />}
            {activeTab === "games" && <GamesTab />}
            {activeTab === "search" && <SearchTab />}
            {activeTab === "downloads" && <DownloadsTab />}
          </main>
          <BottomTabBar active={activeTab} onChange={setActiveTab} />
          {selectedMovie && (
            <MovieDetailOverlay
              movie={selectedMovie}
              onClose={() => setSelectedMovie(null)}
            />
          )}
        </div>
      )}
    </div>
  );
}
