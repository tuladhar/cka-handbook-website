import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Download } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-blue to-darker-blue text-white overflow-hidden">
      {/* Top banner */}
      <div className="relative z-20 bg-[#5521d9] px-4 py-3 text-center text-sm text-white">
        <span>Also by Puru: CKS Handbook - 2nd Edition</span>
        <span className="mx-3 opacity-80">•</span>
        <span>Master Kubernetes security</span>
        <span className="mx-3 opacity-80">•</span>
        <span>Only $15</span>
        <span className="mx-3 opacity-80">•</span>
        <Link href="https://cks.purutuladhar.com" className="font-bold uppercase underline underline-offset-4">
          Get the CKS book
        </Link>
      </div>

      {/* Animated background */}
      <div className="fixed inset-0 bg-cube-pattern opacity-20 z-0"></div>

      <div className="max-w-5xl mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple to-blue rounded-lg blur-md opacity-70"></div>
<Image
                src="/images/book-cover.png"
                width={400}
                height={566}
                alt="Certified Kubernetes Administrator (CKA) Exam Guide cover"
                className="relative rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Book Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Certified Kubernetes Administrator (CKA) Exam Guide
            </h1>
            <p className="text-xl mb-2 text-purple-light">The missing book by a Kubestronaut</p>
            <p className="text-lg mb-8 text-gray-300">
              A practical, opinionated guide to passing the CKA exam: strictly aligned with the curriculum, built around hands-on, exam-style practice.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 bg-dark-blue/50">
                <CheckCircle className="h-6 w-6 text-purple mt-0.5 flex-shrink-0" />
                <p>Written by Nepal&apos;s first Kubestronaut who&apos;s passed all five Kubernetes certifications.</p>
              </div>
              <div className="flex items-start gap-3 bg-dark-blue/50">
                <CheckCircle className="h-6 w-6 text-purple mt-0.5 flex-shrink-0" />
                <p>Chapters follow the exam domains one by one, hands-on and no fluff.</p>
              </div>
              <div className="flex items-start gap-3 bg-dark-blue/50">
                <CheckCircle className="h-6 w-6 text-purple mt-0.5 flex-shrink-0" />
                <p>New chapters added regularly. Lifetime updates included.</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link
                href="https://ptuladhar.gumroad.com/l/cka-handbook"
                className="bg-purple-dark hover:bg-purple text-white px-4 py-2 rounded-lg font-medium text-2xl transition-colors shadow-glow"
              >
                → Get the book
              </Link>
              <div className="bg-gradient-to-r from-purple to-blue text-white rounded-full w-20 h-20 flex items-center justify-center shadow-glow rotate-12">
                <div className="text-center">
                  <div className="text-sm">only</div>
                  <div className="text-xl font-bold">$15</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Exam Domains</h2>
          <p className="text-center text-gray-400 mb-8">Passing score: 66%. 15 to 20 performance-based tasks in 120 minutes.</p>

          <div className="grid md:grid-cols-2 gap-4 rounded-lg">
            {[
              {
                num: "1",
                title: "Domains and Competencies",
                desc: "Exam domains, weighting and what the 120 minutes really test.",
              },
              {
                num: "2",
                title: "Cluster Architecture, Installation and Configuration — 25%",
                desc: "Infrastructure, kubeadm, cluster lifecycle, HA control plane, Helm, Kustomize, RBAC, CNI/CSI/CRI, CRDs and operators.",
              },
              {
                num: "3",
                title: "Workloads and Scheduling — 15%",
                desc: "Deployments, rolling updates, config, autoscaling and scheduling.",
              },
              {
                num: "4",
                title: "Services and Networking — 20%",
                desc: "Services, Ingress and Gateway API, network policy, DNS.",
              },
              { num: "5", title: "Storage — 10%", desc: "Volumes, PVs and PVCs, storage classes." },
              {
                num: "6",
                title: "Troubleshooting — 30%",
                desc: "Nodes, control plane, workloads, networking: find it and fix it fast.",
              },
                        ].map((chapter, index) => (
              <div
                key={index}
                className="bg-dark-blue/50 rounded-lg p-4 border-purple/20 hover:border-purple transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-purple/20 rounded-full w-8 h-8 flex items-center justify-center text-purple-light flex-shrink-0">
                    {chapter.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{chapter.title}</h3>
                    <p className="text-gray-400 text-sm">{chapter.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* One-page preview */}
        <section className="mb-20">
          <h2 className="text-center text-3xl font-bold mb-8 text-gradient">Book sample. No email address needed.</h2>

          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple to-blue rounded-lg blur-md opacity-50"></div>
              <Image
                src="/images/cka-exam-guide-sample.png"
                width={320}
                height={450}
                alt="CKA Exam Guide sample page"
                className="relative rounded-lg border border-purple/30"
              />
            </div>

            <div className="mt-6">
              <Link
                href="https://github.com/tuladhar/certified-kubernetes-administrator-exam-guide/blob/main/Certified%20Kubernetes%20Administrator%20Exam%20Guide%20-%20Puru%20Tuladhar%20-%20Sample.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple/20 hover:bg-purple/30 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Download sample</span>
              </Link>
            </div>

            <div className="flex justify-center mt-8">
              <Link
                href="https://ptuladhar.gumroad.com/l/cka-handbook"
                className="bg-purple-dark hover:bg-purple text-white px-4 py-2 rounded-lg font-medium text-2xl transition-colors shadow-glow"
              >
                Buy a copy
              </Link>
            </div>

            <p className="text-center text-gray-400 mt-4">Just at $15</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gradient">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-dark-blue/50 rounded-lg p-6 border border-purple/20 hover:border-purple transition-colors">
              <h3 className="font-semibold text-xl mb-2 text-white">Which version of the CKA exam is covered?</h3>
              <p className="text-gray-300">Updated to align with the latest CKA exam changes introduced in <span className="text-blue">February 2025</span>.</p>
            </div>

            <div className="bg-dark-blue/50 rounded-lg p-6 border border-purple/20 hover:border-purple transition-colors">
              <h3 className="font-semibold text-xl mb-2 text-white">Is the book complete?</h3>
              <p className="text-gray-300">It is an early access edition with multiple completed chapters. New chapters are added regularly, and buying now includes lifetime updates.</p>
            </div>

            <div className="bg-dark-blue/50 rounded-lg p-6 border border-purple/20 hover:border-purple transition-colors">
              <h3 className="font-semibold text-xl mb-2 text-white">Is this book good for someone just starting CKA prep?</h3>
              <p className="text-gray-300">Yes. It suits beginners as well as candidates wanting a final review. Basic familiarity with Linux and containers helps.</p>
            </div>

            <div className="bg-dark-blue/50 rounded-lg p-6 border border-purple/20 hover:border-purple transition-colors">
              <h3 className="font-semibold text-xl mb-2 text-white">Is this book enough to pass the exam?</h3>
              <p className="text-gray-300">It covers the essentials of the curriculum, but real success comes from practice. Pair it with labs and simulators to build confidence under exam conditions.</p>
            </div>
          </div>
        </section>

        {/* Author Bio - Updated with new profile picture */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Author</h2>

          <div className="bg-dark-blue/50 rounded-lg overflow-hidden border border-purple/20">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1 p-6 flex justify-center items-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple to-blue rounded-full blur-md opacity-50"></div>
                  <Image
                    src="/images/author-profile.png"
                    width={250}
                    height={250}
                    alt="Puru Tuladhar"
                    className="relative rounded-full border-2 border-purple/30"
                  />
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Puru Tuladhar</h3>
                <p className="text-purple-light font-medium mb-4">CNCF Kubestronaut</p>

                <div className="space-y-4 text-gray-300">
                  <p>
                    Hi, I’m Puru Tuladhar, author of the CKA Exam Guide. With nearly a decade as a DevOps engineer, I’ve worked deeply with Linux, Kubernetes, and AWS. I’m proud to hold all five Kubernetes certifications as a CNCF Certified Kubestronaut, and I’m an AWS Certified Solutions Architect at both Associate and Professional levels.
                  </p>

                  <p>
                    I have been where you are: studying for the CKA and trying to work out what really matters. My goal was to build a clear, practical guide that not only helps you pass the exam but also makes you a stronger Kubernetes professional.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="bg-purple/20 text-purple-light text-xs font-semibold px-3 py-1 rounded-full">
                      KCNA
                    </span>
                    <span className="bg-purple/20 text-purple-light text-xs font-semibold px-3 py-1 rounded-full">
                      KCSA
                    </span>
                    <span className="bg-purple/20 text-purple-light text-xs font-semibold px-3 py-1 rounded-full">
                      CKAD
                    </span>
                    <span className="bg-purple/20 text-purple-light text-xs font-semibold px-3 py-1 rounded-full">
                      CKA
                    </span>
                    <span className="bg-purple/20 text-purple-light text-xs font-semibold px-3 py-1 rounded-full">
                      CKS
                    </span>
                    <span className="bg-purple/20 text-purple-light text-xs font-semibold px-3 py-1 rounded-full">
                      AWS Certified
                    </span>
                    <span className="bg-purple/20 text-purple-light text-xs font-semibold px-3 py-1 rounded-full">
                      CNCF Kubestronaut
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <Link
                      href="https://linkedin.com/in/ptuladhar3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-light transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://twitter.com/ptuladhar3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-light transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://github.com/tuladhar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-light transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CKS promo */}
        <section className="mb-20">
          <div className="grid items-center gap-8 rounded-lg border border-purple/30 bg-gradient-to-r from-purple/20 to-blue/20 p-8 md:grid-cols-3">
            <div className="flex justify-center">
              <Image
                src="/images/cks-cover.png"
                width={220}
                height={300}
                alt="CKS Handbook cover"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:col-span-2">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-purple-light">Also available</p>
              <h2 className="mb-2 text-3xl font-bold text-gradient">CKS Handbook - 2nd Edition</h2>
              <p className="mb-6 text-lg text-gray-300">
                The essential guide for mastering Kubernetes security and passing the Certified Kubernetes Security
                Specialist exam with confidence.
              </p>
              <Link
                href="https://cks.purutuladhar.com"
                className="inline-block rounded-lg bg-purple-dark px-4 py-2 text-xl font-medium text-white shadow-glow transition-colors hover:bg-purple"
              >
                Get the CKS Handbook →
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-purple/20 to-blue/20 rounded-lg p-8 border border-purple/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to become a Certified Kubernetes Administrator?</h3>
            <p className="text-lg mb-6 text-gray-300">
              Get your copy today and start practicing like the exam.
            </p>
            <Link
              href="https://ptuladhar.gumroad.com/l/cka-handbook"
              className="bg-purple-dark hover:bg-purple text-white px-4 py-2 rounded-lg font-medium text-2xl transition-colors shadow-glow inline-block"
            >
              Buy a copy
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
