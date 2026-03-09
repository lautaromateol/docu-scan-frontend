import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cloneElement, JSX } from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  FileSearch,
  Scale,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <header className="w-full border-b border-border sticky top-0 z-50 p-4 flex items-center justify-between bg-background/80 backdrop-blur-md">
        <Logo variant="landing" />
        <nav className="flex items-center justify-center gap-x-3">
          <Button asChild variant="secondary">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </nav>
      </header>

      <section className="container mx-auto">
        <div className="max-w-5xl mx-auto py-20 md:py-32 space-y-6 text-center">
          <div className="rounded-full bg-primary/10 text-primary border border-primary/30 px-4 py-2 inline-flex items-center gap-x-1 animate-fade-up">
            <Sparkles className="size-5" />
            <p className="text-sm font-medium">Powered by Advanced AI</p>
          </div>
          <div className="space-y-2 animate-fade-up animation-delay-100">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                Extract
              </span>{" "}
              critical information from contracts instantly
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Automatically identify clauses, obligations, deadlines,
              termination terms, and involved parties. Transform complex
              contracts into structured, actionable data in seconds.
            </p>
          </div>
          <div className="animate-fade-up animation-delay-300">
            <Button size="lg" className="shadow-glow animate-glow-pulse">
              Start scanning free
              <ArrowRight className="size-6" />
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="max-w-5xl mx-auto py-20 md:py-32 px-5 mx:px-0 space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                Intelligent
              </span>{" "}
              contract data extraction made simple
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Our AI-Powered platform extracts and organizes key contract
              information automatically, helping you understand obligations,
              deadlines, and risks at a glance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature
              icon={<FileSearch />}
              title="Clause Identification"
              description="Automatically detect and categorize all contract clauses including payment terms, confidentiality, liability, and termination conditions."
              features={[
                "Payment & pricing clauses",
                "Termination conditions",
                "Liability & indemnification",
              ]}
            />
            <Feature
              icon={<Calendar />}
              title="Deadlines & Obligations"
              description="Extract all critical dates, deadlines, and obligations. Never miss a renewal date, payment deadline, or contractual commitment again."
              features={[
                "Renewal & expiration dates",
                "Payment schedules",
                "Deliverable timelines",
              ]}
            />
            <Feature
              icon={<Scale />}
              title="Parties & Entities"
              description="Identify all involved parties, their roles, and relationships. Build a complete map of who's responsible for what in every contract."
              features={[
                "Party identification",
                "Role & responsibility mapping",
                "Entity relationship tracking",
              ]}
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-5 md:px-0">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/20 via-card to-card py-20 md:py-32 space-y-6 text-center rounded-2xl border border-primary/30 shadow-glow">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Ready to <span className="underline decoration-primary">transform</span> your
              contract workflow?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join thousands of legal teams who trust Docuscan to streamline
              their contract review process. Start your free trial today--no
              credit card required.
            </p>
          </div>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/sign-up">
              Start Trial
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      <footer className="border-t border-border bg-card/50 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <Logo variant="landing" />
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              ©{new Date(Date.now()).getFullYear()} Docuscan. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/lautaro-mateo-leguizamon-35b902279/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/lautaromateol"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Feature({
  icon,
  title,
  description,
  features,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="w-full rounded-xl p-8 space-y-6 border border-border bg-card shadow-card transition-all duration-200 hover:border-primary/40 hover:shadow-modal hover:-translate-y-0.5 animate-fade-up">
      <div className="rounded-lg bg-primary/10 border border-primary/20 p-3 inline-block">
        {cloneElement(icon, { className: "size-6 text-primary" })}
      </div>
      <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      <p className="text-muted-foreground text-base">{description}</p>
      <ul className="flex flex-col gap-y-2 list-none">
        {features.map((feature, _i) => (
          <li key={_i} className="flex items-center gap-x-2">
            <CheckCircle className="size-5 text-success flex-shrink-0" />
            <p className="text-sm text-muted-foreground">{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
