import Image from "next/image"
import Link from "next/link"

const BUY_URL = "https://ptuladhar.gumroad.com/l/cka-handbook"
const CKS_URL = "https://cks.purutuladhar.com"
const SAMPLE_URL =
  "https://github.com/tuladhar/certified-kubernetes-administrator-exam-guide/blob/main/Certified%20Kubernetes%20Administrator%20Exam%20Guide%20-%20Puru%20Tuladhar%20-%20Sample.pdf"

const domains = [
  {
    name: "Cluster Architecture, Installation and Configuration",
    short: "Architecture",
    weight: 25,
    color: "bg-[#326CE5]",
    desc: "Node prep, kubeadm, cluster upgrades, HA control plane, Helm and Kustomize, RBAC, CNI/CSI/CRI, CRDs and operators.",
  },
  {
    name: "Workloads and Scheduling",
    short: "Workloads",
    weight: 15,
    color: "bg-[#6C97F0]",
    desc: "Deployments, rolling updates and rollbacks, ConfigMaps and Secrets, autoscaling, scheduling constraints.",
  },
  {
    name: "Services and Networking",
    short: "Networking",
    weight: 20,
    color: "bg-[#2350B8]",
    desc: "Services, Ingress and Gateway API, network policies, CoreDNS.",
  },
  {
    name: "Storage",
    short: "Storage",
    weight: 10,
    color: "bg-[#A9C1F5]",
    desc: "Volumes, PersistentVolumes and claims, StorageClasses, access modes and reclaim policies.",
  },
  {
    name: "Troubleshooting",
    short: "Troubleshooting",
    weight: 30,
    color: "bg-[#1B3F99]",
    desc: "Broken nodes, control plane components, workloads and networking. Find the fault and fix it under time pressure.",
  },
]

const faqs = [
  {
    q: "Which version of the CKA exam does it cover?",
    a: "The current curriculum, including the program changes introduced in February 2025.",
  },
  {
    q: "Is the book finished?",
    a: "It is an early access edition. Several chapters are complete and new ones are added regularly. Buying now includes every future update at no extra cost.",
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

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero */}
        <section className="grid items-center gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div className="min-w-0">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Certified Kubernetes Administrator (CKA) Exam Guide
            </h1>
            <p className="mt-4 text-xl text-deep">The missing book by a Kubestronaut</p>
            <p className="mt-6 max-w-xl text-lg text-slate">
              A practical guide to the CKA exam. It follows the curriculum domain by domain and focuses on what you
              need to be able to do on a live cluster in 120 minutes.
            </p>

            <ul className="mt-8 max-w-xl space-y-3 border-l-2 border-k8s pl-5">
              <li>Written by Nepal&apos;s first Kubestronaut, who has passed all five Kubernetes certifications.</li>
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href={BUY_URL}
                className="rounded-md bg-k8s px-6 py-3 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-deep"
              >
                Buy the book for $15
              </Link>
              <Link href="#sample" className="font-medium text-deep underline underline-offset-4 hover:text-k8s">
                Read the free sample
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/book-cover.png"
              width={380}
              height={537}
              alt="Certified Kubernetes Administrator (CKA) Exam Guide cover"
              className="w-[280px] rounded-[4px] shadow-[0_30px_60px_-20px_rgba(27,63,153,0.45)] sm:w-[340px] md:w-[380px]"
              priority
            />
          </div>
        </section>

        {/* Exam domains */}
        <section className="border-t border-rule py-16 md:py-20" aria-labelledby="domains-heading">
          <div className="max-w-2xl">
            <h2 id="domains-heading" className="text-3xl font-semibold tracking-tight">
              Built around the exam weights
            </h2>
            <p className="mt-4 text-lg text-slate">
              15 to 20 hands-on tasks, 120 minutes, 66% to pass. Each chapter maps to one exam domain, so you can
              spend your time where the points are.
            </p>
          </div>

          <div
            className="mt-10 flex h-14 w-full overflow-hidden rounded-md"
            role="img"
            aria-label="Exam weights: Cluster Architecture 25%, Workloads 15%, Networking 20%, Storage 10%, Troubleshooting 30%"
          >
            {domains.map((d) => (
              <div
                key={d.name}
                className={`${d.color} flex items-center justify-center border-r-2 border-paper text-sm font-semibold last:border-r-0 ${
                  d.weight <= 10 ? "text-ink" : "text-white"
                }`}
                style={{ width: `${d.weight}%` }}
              >
                {d.weight}%
              </div>
            ))}
          </div>

          <ol className="mt-10 grid gap-x-12 md:grid-cols-2">
            {domains.map((d) => (
              <li key={d.name} className="flex gap-4 border-b border-rule py-5">
                <span className={`${d.color} mt-1.5 h-3 w-3 flex-shrink-0 rounded-sm`} aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">
                    {d.name} <span className="font-normal text-slate">({d.weight}%)</span>
                  </h3>
                  <p className="mt-1 text-slate">{d.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Sample */}
        <section id="sample" className="border-t border-rule py-16 md:py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 flex justify-center md:order-1">
              <Image
                src="/images/cka-exam-guide-sample.png"
                width={420}
                height={594}
                alt="Sample page from Chapter 1: exam domains and weighting"
                className="w-full max-w-[420px] rounded-[4px] border border-rule bg-white shadow-[0_20px_40px_-24px_rgba(14,26,46,0.35)]"
              />
            </div>
            <div className="order-1 min-w-0 md:order-2">
              <h2 className="text-3xl font-semibold tracking-tight">Try it before you buy</h2>
              <p className="mt-4 text-lg text-slate">
                The free sample includes the preface, the exam domains and the start of Chapter 2, where you build a
                two-node lab cluster from scratch. No email address needed.
              </p>
              <pre className="mt-6 overflow-x-auto rounded-md bg-ink p-4 font-mono text-sm leading-relaxed text-[#D6E2FF]">
                <code>
                  {`multipass launch -n control-plane -c 2 -m 2G 24.04
multipass launch -n worker -c 1 -m 2G 24.04`}
                </code>
              </pre>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href={SAMPLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border-2 border-k8s px-5 py-2.5 font-semibold text-deep transition-colors hover:bg-k8s hover:text-white"
                >
                  Download the sample (PDF)
                </Link>
                <Link href={BUY_URL} className="font-medium text-deep underline underline-offset-4 hover:text-k8s">
                  Buy the full book for $15
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
          <div className="grid items-start gap-10 md:grid-cols-[220px_1fr]">
            <Image
              src="/images/author-profile.png"
              width={220}
              height={220}
              alt="Puru Tuladhar"
              className="h-40 w-40 rounded-full object-cover md:h-[220px] md:w-[220px]"
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
          <div className="grid items-center gap-10 md:grid-cols-[180px_1fr]">
            <Link href={CKS_URL} className="mx-auto block w-36 md:w-[180px]">
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
      </main>

      {/* Final CTA */}
      <section className="bg-deep px-4 py-16 text-center text-white md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Walk into the exam knowing what to expect
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          $15, with every future chapter and update included.
        </p>
        <Link
          href={BUY_URL}
          className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-lg font-semibold text-deep transition-colors hover:bg-[#DCE7FF]"
        >
          Buy the book for $15
        </Link>
      </section>

      <footer className="bg-ink px-4 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Puru Tuladhar
      </footer>
    </div>
  )
}
