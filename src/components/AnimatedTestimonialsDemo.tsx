import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Jaga kesehatan dan semangatmu ya. Semoga setiap harimu diisi dengan kebahagiaan kecil yang membuatmu merasa bersyukur dan tersenyum.\n\nAku mungkin nggak selalu bisa menemanimu, tapi dukunganku untukmu nggak pernah hilang.\n\nTeruslah berjalan dengan percaya diri. Percayalah, ada banyak hal baik yang menunggumu di depan. Dan aku selalu yakin kamu bisa melewati setiap tantangan dengan kuat.",
      name: "Amel",
      designation: "Ucapan dari teman satu kamarmu",
      src: "/human.png",
    },
    {
      quote:
        "Cie cieeee yang ulang tahun. Aku mau ngucapin banyak banyak makasih buat kamu. Karena kamu sampai sejauh ini masih mau nemenin aku buat jadi bendahara. Kamu ngertiin aku banget kalo aku lagi ada urusan.\n\nTapi aku mau bilang, lain kali kalo susah atau repot jangan sendirian, ajak aku juga. Utamain diri kamu, Sep. Jangan begadang buat RAB sampai subuh. Kamu yang utama, RAB mah bisa nunggu.\n\nSehat terus okeyy, kalo sakit bilang, nanti aku gantiin kamu. Makin gede harus bisa utamain diri sendiri, Sep. Makasih juga udah selalu aku repotin karena tidur di kos kamu mulu. Makasih nemenin aku karena aku nggak bisa sendiri.\n\nOh iya, aku suka ke rumah kamu. Seruuu polll, Bapak sama Ibu kamu baik banget. Keluarga kamu cemara abiezzz. Orang lain lihat pasti iri sih. Kamu harus bersyukur, Sep. Doanya aku ikutin: kamu kan katanya mau pulang 2027 kan ya? Nanti kalo udah lulus, aku mau main ke kamu.",
      name: "Meli",
      designation: "Ucapan dari Melia, teman bendaharamu",
      src: "/human.png",
    },
    {
      quote:
        "hii sep!!selamat ulangtahun, semoga panjang umur, sehat selalu, lancar rezekinya, dipermudah segala urusan, semoga semua impianmu terwujud dan semoga sekecil apapun harapanmu bisa terwujud. sekali lagi selamat bertambah usia seppp semoga semuaa hal baik selalu menyertaimu lov uuu💗💗🤩🤩🫰🏻🫰🏻🫰🏻🫰🏻🫰🏻🫰🏻🫰🏻🫰🏻🫰🏻🫰🏻.",
      name: "elvin",
      designation: "ucapan dari temanmu",
      src: "/human.png",
    },
    {
      quote:
        "Sebenernya masih banyak yang aku minta dari teman-temanmu tapi tidak dikasih. Hehehe.",
      name: "Teman-temanmu",
      designation: "Ucapan",
      src: "/human.png",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
