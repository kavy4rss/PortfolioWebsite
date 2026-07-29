# 🚀 Post-Deployment SEO Infrastructure & Local Dominance Playbook

**Target Keywords**:
- `best website developers in Kanpur`
- `application developer in Kanpur`
- `Top B2B SaaS developer Kanpur`
- `Kavya Agrawal`

---

## Phase 1: Google Business Profile (GBP) Setup & NAP Alignment

### Step 1.1: Create Business Listing
1. Go to [Google Business Profile Manager](https://business.google.com/).
2. Set Business Name **EXACTLY** matching the JSON-LD `LocalBusiness` schema:
   `Kavya Agrawal - Website & App Development`
3. Primary Category: **Software Company**
   Secondary Categories: **Web Designer**, **Computer Consultant**, **Internet Marketing Service**.

### Step 1.2: Set Physical Location & NAP (Name, Address, Phone)
1. Select **"Yes, I want to add a physical location clients can visit"**.
2. Input Address:
   - **Street**: Civil Lines
   - **City**: Kanpur
   - **State**: Uttar Pradesh
   - **PIN Code**: 208001
   - **Country**: India
3. Set Geo-Coordinates in Google Maps pin dropper to match JSON-LD (`26.4499, 80.3319`).
4. Phone Number: Match the telephone string specified in your `LocalBusiness` schema (`+91-XXXXXXXXXX`).
5. Website URL: `https://kavyagrawal.dev`

### Step 1.3: Instant Verification & Profile Optimization
1. Complete Video Verification or SMS/Postcard Verification as prompted.
2. Add Business Hours: Set to 24/7 or Monday–Saturday 09:00 - 20:00.
3. Populate Services matching `OfferCatalog` in JSON-LD:
   - *Custom Web Application Development in Kanpur*
   - *Cross-Platform Mobile App Development (Flutter)*
   - *B2B SaaS Architecture & Cloud Infrastructure*
4. Upload High-Resolution Photos:
   - Profile Photo (`profile.jpg`)
   - Cover Photo with branded text "Kavya Agrawal — Top Website & App Developer in Kanpur"
   - Workspace / Office photos in Civil Lines.

---

## Phase 2: Google Search Console (GSC) Domain Claim & Force Indexing

### Step 2.1: Domain Property Claim via DNS
1. Open [Google Search Console](https://search.google.com/search-console).
2. Choose **Domain** property type and enter `kavyagrawal.dev`.
3. Copy the `google-site-verification=...` TXT record provided by GSC.
4. Log into your Netlify / DNS Provider dashboard:
   - Type: `TXT`
   - Name / Host: `@`
   - Value: `google-site-verification=...`
5. Click **Verify** in Search Console.

### Step 2.2: Sitemap & Robots Directive Submission
1. In GSC sidebar, click **Sitemaps**.
2. Enter `sitemap.xml` under *Add a new sitemap* and click **Submit**.
3. Confirm that status changes to **Success** and all core URLs are discovered.

### Step 2.3: Force Indexing via URL Inspection Tool (< 24 Hours)
1. In the top search bar of GSC, paste `https://kavyagrawal.dev/`.
2. Click **TEST LIVE URL** to verify there are no rendering or blocking issues.
3. Click **REQUEST INDEXING** to place your home page in the priority crawling queue.
4. Repeat URL Inspection for key secondary routes:
   - `https://kavyagrawal.dev/about`
   - `https://kavyagrawal.dev/projects`
   - `https://kavyagrawal.dev/contact`

---

## Phase 3: Schema Validation & AI Search (GEO) Audit

### Step 3.1: Validate JSON-LD Schemas
1. Run `https://kavyagrawal.dev` through [Google Rich Results Test](https://search.google.com/test/rich-results).
2. Verify that **Person**, **ProfessionalService**, and **FAQPage** pass with **0 Errors and 0 Warnings**.
3. Verify that FAQ rich snippets are rendered in the preview tool.

### Step 3.2: Verify AI Crawlers & `llms.txt` Availability
1. Test direct browser access to `https://kavyagrawal.dev/llms.txt`. Ensure raw Markdown text is returned with `Content-Type: text/plain`.
2. Test `https://kavyagrawal.dev/robots.txt` and ensure `GPTBot`, `PerplexityBot`, `Claude-Web`, and `OAI-SearchBot` rules are active.
3. Perform prompt queries on Perplexity.ai and SearchGPT:
   - *"Who is the top B2B SaaS developer in Kanpur?"*
   - *"Who is Kavya Agrawal?"*
   - *"Best application developer in Kanpur Uttar Pradesh"*
