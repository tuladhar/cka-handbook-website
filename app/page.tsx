import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

const BUY_URL = "https://ptuladhar.gumroad.com/l/cka-handbook"
const CKS_URL = "https://cks.purutuladhar.com"
const SAMPLE_URL =
  "https://github.com/tuladhar/certified-kubernetes-administrator-exam-guide/blob/main/Certified%20Kubernetes%20Administrator%20Exam%20Guide%20-%20Puru%20Tuladhar%20-%20Sample.pdf"

const faqs = [
  {
    q: "Which version of the CKA exam does it cover?",
    a: "The current curriculum, including the program changes introduced in February 2025.",
  },
  {
    q: "Is the book finished?",
    a: "Yes. It covers all five exam domains, and you get lifetime updates as the exam curriculum changes.",
  },
  {
    q: "I'm just starting to prepare. Is this for me?",
    a: "Yes. It works for a first pass through the curriculum and as a final review before exam day. Basic comfort with Linux and containers helps.",
  },
  {
    q: "Is the book enough to pass?",
    a: "It covers what the exam tests, but passing comes from practice. Work through the labs in each chapter and pair them with an exam simulator.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* CKS promo banner */}
      <div className="bg-ink px-4 py-2.5 text-center text-sm text-white/85">
        Passed the CKA? Get the CKS under your belt next with the{" "}
        <Link href={CKS_URL} className="font-semibold text-white underline underline-offset-4 hover:text-[#A9C1F5]">
          CKS Handbook, 2nd edition
        </Link>
        .
      </div>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 md:grid md:grid-cols-[280px_minmax(0,1fr)] md:gap-14 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-20">
        {/* Cover stays in view while the content scrolls (desktop) */}
        <aside className="pt-10 md:sticky md:top-10 md:self-start md:pt-24">
          <div className="flex flex-col items-center md:items-stretch">
            <Image
              src="/images/book-cover.png"
              width={340}
              height={481}
              alt="Certified Kubernetes Administrator (CKA) Exam Guide cover"
              className="w-[240px] rounded-[4px] shadow-[0_30px_60px_-20px_rgba(27,63,153,0.45)] sm:w-[280px] md:w-full"
              priority
            />
            <Link
              href={BUY_URL}
              className="mt-8 w-[240px] rounded-md bg-k8s px-6 py-3 text-center text-lg font-semibold text-white shadow-sm transition-colors hover:bg-deep sm:w-[280px] md:w-full"
            >
              Buy the book for $15
            </Link>
          </div>
        </aside>

        <div className="min-w-0">
        {/* Hero */}
        <section className="pb-16 pt-10 md:py-24">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Certified Kubernetes Administrator (CKA) Exam Guide
          </h1>
          <p className="mt-4 text-xl text-deep">The missing book by a Kubestronaut</p>

          <ul className="mt-8 max-w-xl space-y-5 text-lg">
            {[
              "Written by Nepal's first Kubestronaut, who has passed all five Kubernetes certifications.",
              "Practical and hands-on, focused on the real exam. No fluff.",
              "Prepare smartly and pass the CKA with confidence.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-k8s" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sample */}
        <section id="sample" className="border-t border-rule py-16 md:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
            <div className="order-2 flex justify-center lg:justify-end">
              <Image
                src="/images/cka-exam-guide-sample.png"
                width={420}
                height={594}
                alt="Sample page from Chapter 2: preparing the underlying infrastructure for a Kubernetes cluster"
                className="w-full max-w-[320px] rounded-[4px] border border-rule bg-white shadow-[0_20px_40px_-24px_rgba(14,26,46,0.35)]"
              />
            </div>
            <div className="order-1 min-w-0">
              <h2 className="text-3xl font-semibold tracking-tight">Try it before you buy</h2>
              <p className="mt-4 text-lg text-slate">
                The free sample includes the preface, the exam domains and the start of Chapter 2, where you build a
                two-node lab cluster from scratch. No email address needed.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href={SAMPLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border-2 border-k8s px-5 py-2.5 font-semibold text-deep transition-colors hover:bg-k8s hover:text-white"
                >
                  Download the sample (PDF)
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-rule py-16 md:py-20" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-3xl font-semibold tracking-tight">
            Questions
          </h2>
          <div className="mt-8 max-w-3xl divide-y divide-rule border-y border-rule">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex items-center justify-between gap-6 py-5 text-lg font-medium">
                  {f.q}
                  <span className="faq-sign text-2xl font-light text-k8s" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="pb-6 pr-10 text-slate">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Author */}
        <section className="border-t border-rule py-16 md:py-20" aria-labelledby="author-heading">
          <div className="grid items-start gap-10 lg:grid-cols-[160px_1fr]">
            <Image
              src="/images/author-profile.png"
              width={220}
              height={220}
              alt="Puru Tuladhar"
              className="h-36 w-36 rounded-full object-cover lg:h-40 lg:w-40"
            />
            <div className="max-w-2xl">
              <h2 id="author-heading" className="text-3xl font-semibold tracking-tight">
                About the author
              </h2>
              <p className="mt-2 text-lg text-deep">Puru Tuladhar, CNCF Kubestronaut</p>
              <p className="mt-5 text-slate">
                I&apos;ve spent close to a decade as a DevOps engineer working with Linux, Kubernetes and AWS. I hold
                all five Kubernetes certifications (KCNA, KCSA, CKAD, CKA and CKS) and I&apos;m an AWS Certified
                Solutions Architect at Associate and Professional level.
              </p>
              <p className="mt-4 text-slate">
                I&apos;ve been where you are: studying for the CKA and trying to work out what really matters. This
                book is the guide I wanted then. It helps you pass the exam and makes you a better cluster
                administrator along the way.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-medium">
                <li>
                  <Link
                    href="https://linkedin.com/in/ptuladhar3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-deep underline underline-offset-4 hover:text-k8s"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/ptuladhar3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-deep underline underline-offset-4 hover:text-k8s"
                  >
                    X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/tuladhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-deep underline underline-offset-4 hover:text-k8s"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* After the CKA */}
        <section className="border-t border-rule py-16 md:py-20" aria-labelledby="cks-heading">
          <div className="grid items-center gap-10 lg:grid-cols-[140px_1fr]">
            <Link href={CKS_URL} className="block w-32 lg:w-[140px]">
              <Image
                src="/images/cks-cover.png"
                width={180}
                height={246}
                alt="CKS Handbook, 2nd edition cover"
                className="rounded-[4px] shadow-[0_20px_40px_-20px_rgba(14,26,46,0.5)]"
              />
            </Link>
            <div className="max-w-2xl">
              <h2 id="cks-heading" className="text-3xl font-semibold tracking-tight">
                Going for the CKS next?
              </h2>
              <p className="mt-4 text-lg text-slate">
                A CKA pass is the prerequisite for the Certified Kubernetes Security Specialist exam. The CKS
                Handbook, 2nd edition covers the current CKS curriculum with the same hands-on approach.
              </p>
              <Link
                href={CKS_URL}
                className="mt-6 inline-block font-semibold text-deep underline underline-offset-4 hover:text-k8s"
              >
                See the CKS Handbook
              </Link>
            </div>
          </div>
        </section>
        </div>
      </main>
    </div>
  )
}
