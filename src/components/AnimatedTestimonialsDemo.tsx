import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Jaga kesehatan dan semangatmu ya, semoga setiap hari harimu diisi dengan kebahagiaan kecil yang membuatmulmerasa bersyukur dan tersenyum. Aku mungkin ga selalu bisa menemanimu, tapi dukunganku untukmu ngga pernah hilang.teruslah berjalan dengan percaya diri, percayalah ada banyak hal baik yang menunggumu di depan dan aku selalu yakin kamu bisa melewati setiap tantangan dengan kuat",
      name: "Amel",
      designation: "ucapan dari teman satu kamarmu",
      src: "/human.png",
    },
    {
      quote:
        "Cie cieeee yang ulang tahunn. aku mau ngucapin banyak banyak makasih buat kamu. karna kamu sampai sejauh ini masih mau nemenin aku buat jadi bendahara. kamu ngertiin aku banget kalo aku lagi ada urusan. tapiiii aku mau bilang lain kali kalo susah atau repot jangan sendirian ajak aku jugaa. utamain diri kamu sep jangan begadang buar RAB sampe subuh. kamu yang utama rab mah bisa nunggu. sehatt terus okeyy kalo sakit bilabg nanti aku gantiin kamu.makin gede harus bisa utamain diri sendiri sep. makasih juga mau slalu aku repotin karna tidur di kos kamu mulu. makasih mau nemenin aku karna aku ga bisa sendiri. Oh iyaa aku suka kerumah kamu. seruuu polll bapa sama ibu kamu baik banget. keluarga kamu cemara abiezzz. orang lain liat pasti iri sihhh. kamu harus bersyukur sepp. doa nya aku ikutin kamu yang katane mau pulang 2027 kan yananti kalo dah lulus aku mau main ke kamuuu",
      name: "Meli",
      designation: "Ucapan dari melia teman bendaharamu",
      src: "/human.png",
    },

    {
      quote:
        "Sebenernya masih banyak yang aku minta dari teman teman mu tapi tidak di kasi hehehe",
      name: "Teman Teman mu",
      designation: "Ucapan",
      src: "/human.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
