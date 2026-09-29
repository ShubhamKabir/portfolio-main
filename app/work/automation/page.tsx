export default function AutomationProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Automation Projects
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
            Business automation systems built around real workflows.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Practical systems connecting websites, data, AI, CRM, communication,
            and operational workflows to reduce repetitive work and keep
            business processes connected.
          </p>
        </div>

        <div className="mt-24 space-y-32">
          <section className="border-t border-border pt-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  01
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  FORM — AI Lead Follow-Up Automation
                </h2>

                <p className="mt-4 text-muted-foreground">
                  An automated lead-management workflow built around the FORM
                  creative agency website.
                </p>
              </div>

              <div>
                <p className="text-lg leading-8 text-muted-foreground">
                  Built and tested an AI-powered lead follow-up workflow
                  connecting a website contact form with Make, Airtable, Gemini,
                  HubSpot, and Gmail.
                </p>

                <div className="mt-10">
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Workflow
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm leading-6">
                    <span>Contact Form</span>
                    <span>→</span>
                    <span>Next.js API</span>
                    <span>→</span>
                    <span>Make</span>
                    <span>→</span>
                    <span>Airtable</span>
                    <span>→</span>
                    <span>Gemini</span>
                    <span>→</span>
                    <span>HubSpot</span>
                    <span>→</span>
                    <span>Gmail</span>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    What it handles
                  </p>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    Lead capture, AI-assisted lead assessment, CRM updates, and
                    personalized follow-up communication.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Make",
                    "Airtable",
                    "Google Gemini",
                    "HubSpot",
                    "Gmail",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border px-3 py-1.5 text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-10">
                  <a
                    href="https://github.com/ShubhamKabir/web-projects/tree/master/form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium underline underline-offset-4"
                  >
                    View project on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-border pt-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  02
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  PULSE — Client Onboarding Automation
                </h2>

                <p className="mt-4 text-muted-foreground">
                  An automated client onboarding system connected to the PULSE
                  client-management interface.
                </p>
              </div>

              <div>
                <p className="text-lg leading-8 text-muted-foreground">
                  Built and tested an end-to-end onboarding workflow that turns
                  a new client submission into structured onboarding tasks, a
                  Notion workspace, and a welcome email.
                </p>

                <div className="mt-10">
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Workflow
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm leading-6">
                    <span>Client Intake</span>
                    <span>→</span>
                    <span>Next.js API</span>
                    <span>→</span>
                    <span>Make</span>
                    <span>→</span>
                    <span>Airtable</span>
                    <span>→</span>
                    <span>6 Onboarding Tasks</span>
                    <span>→</span>
                    <span>Notion</span>
                    <span>+</span>
                    <span>Gmail</span>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    What it handles
                  </p>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    Client intake, onboarding task creation, workspace creation,
                    welcome communication, and onboarding status tracking.
                  </p>
                </div>

                <div className="mt-10">
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Onboarding tasks
                  </p>

                  <ol className="mt-4 space-y-2 text-muted-foreground">
                    <li>01 — Send Welcome Email</li>
                    <li>02 — Collect Project Requirements</li>
                    <li>03 — Collect Brand / Project Assets</li>
                    <li>04 — Create Project Workspace</li>
                    <li>05 — Schedule Kickoff</li>
                    <li>06 — Confirm Project Timeline</li>
                  </ol>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Make",
                    "Airtable",
                    "Notion",
                    "Gmail",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border px-3 py-1.5 text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-6">
                  <a
                    href="https://pulse-tau-five-51.vercel.app/clients"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium underline underline-offset-4"
                  >
                    View live project →
                  </a>

                  <a
                    href="https://github.com/ShubhamKabir/web-projects/tree/master/pulse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium underline underline-offset-4"
                  >
                    View project on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-border pt-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  03
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  PULSE — Automated Weekly Reporting
                </h2>

                <p className="mt-4 text-muted-foreground">
                  An automated reporting workflow for tracking client onboarding
                  operations and delivering weekly summaries.
                </p>
              </div>

              <div>
                <p className="text-lg leading-8 text-muted-foreground">
                  Built and tested a scheduled reporting workflow that
                  aggregates client and onboarding task data into a weekly
                  operations report, delivers it through Gmail, and archives it
                  in Notion.
                </p>

                <div className="mt-10">
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Workflow
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm leading-6">
                    <span>Airtable — Clients</span>
                    <span>→</span>
                    <span>Airtable — Onboarding Tasks</span>
                    <span>→</span>
                    <span>Make</span>
                    <span>→</span>
                    <span>Metric Aggregation</span>
                    <span>→</span>
                    <span>Weekly Operations Report</span>
                    <span>→</span>
                    <span>Gmail</span>
                    <span>+</span>
                    <span>Notion</span>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Report metrics
                  </p>

                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li>Total clients</li>
                    <li>Total onboarding tasks</li>
                    <li>Completed tasks</li>
                    <li>Pending tasks</li>
                    <li>Overdue tasks</li>
                  </ul>
                </div>

                <div className="mt-10">
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Schedule
                  </p>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    Weekly reporting scheduled for Monday at 9:00 AM
                    Asia/Kolkata.
                  </p>
                </div>

                <div className="mt-10">
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Result
                  </p>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    Automated report generation and delivery through Gmail, with
                    reports archived in Notion for ongoing reference.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  {["Airtable", "Make", "Gmail", "Notion"].map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border px-3 py-1.5 text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-10">
                  <a
                    href="https://github.com/ShubhamKabir/web-projects/tree/master/pulse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium underline underline-offset-4"
                  >
                    View project on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
