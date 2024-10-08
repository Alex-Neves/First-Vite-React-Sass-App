import React from 'react'
import ContextProvider from './components/Context'
import StaticUniversals from './components/StaticUniversals'
import { Link } from 'react-router-dom'

function FAQs() {
  return (
    <ContextProvider>
      <StaticUniversals pathName = {window.location.pathname} pageName = "FAQ's">
    <div className='contentDivider'>
      <h1>Frequently Asked Questions</h1>
        <h2>What is CBD?</h2>
        <p>CBD (or <a target="_blank" rel="noopener" href="https://www.health.harvard.edu/blog/cannabidiol-cbd-what-we-know-and-what-we-dont-2018082414476https://www.health.harvard.edu/blog/cannabidiol-cbd-what-we-know-and-what-we-dont-2018082414476">Cannabidiol</a>) is one of over 85 cannabinoids found in cannabis. CBD is present in more significant quantities in hemp than it is in marijuana. CBD is widely regarded to possess incredible health potential.</p>
        <h2>Will Big Dan’s Hemporium CBD products make me feel high?</h2>
        <p>NO! They will not get you high. CBD is non-psychoactive although meeting the definition of psychoactive, meaning that none of the CBD products will get you high, we guarantee it!</p>
        <h2>Will I fail a drug test from using CBD?</h2>
        <p>We guarantee you will not fail a drug test if you use our ISOLATE or BROAD-SPECTRUM products as they contain ZERO THC. Our Full-Spectrum products do contain trace amounts of THC within the legal parameters of the <a target="_blank" rel="noopener" href="https://www.fda.gov/news-events/congressional-testimony/hemp-production-and-2018-farm-bill-07252019">2018 Federal Farm Bill</a> (.03 or less THC.)</p>
        <h2>What’s the difference between hemp oil and CBD oil?</h2>
        <p>The main difference between CBD oil and Hemp oil is that Hemp Oil does not contain CBD. CBD and hemp oils are made from different parts of the plant and have different purposes.</p>
        <p>CBD is a compound found in industrial hemp, and we utilize a whole plant CO2 extraction that allows us to draw the CBD from the plant material and filter out unnatural substances, maximizing pure CBD concentration. While CBD is extracted from the entire plant, minus the seeds, hemp is extracted only from the seeds. Hemp oil is made from pressing hemp seeds and is used in a variety of products. </p>
        <p>Hemp-seed oil is used as a protein supplement for food, as varnish for wood and, because of its remedial properties for hair and skin, as an ingredient in lotion and soap products. You can buy hemp-seed oil online or at certain food stores, where you can learn about more ways to incorporate it into your diet and hygiene.</p>
        <h2>What’s the difference between Full Spectrum CBD and CBD isolate?</h2>
        <p>Our full spectrum products are made by a whole plant extraction with food grade alcohol. We carefully control our process to maintain and preserve the full suite of naturally occurring Phytocannabinoids, flavonoids and terpenes in the hemp plant. This suite of compounds has potential synergistic benefits which are currently being researched.</p>
        <p>Products made with Broad Spectrum and Isolated CBD do not retain all these natural compounds and therefore may not have the same effects or benefits.</p>
        <p>Our full spectrum products are standardized to specific CBD potencies, and due to the natural variation of plant extracts, the levels of peripheral cannabinoids, terpenes and flavonoids may fluctuate from batch to batch.</p>
        <h2>What is Delta 9 THC?</h2>
        <p>Delta-9 THC is a <a target="_blank" rel="noopener" href="https://www.ncbi.nlm.nih.gov/books/NBK563174/">psychoactive, intoxicating, and naturally occuring cannabinoid, that also happens to be the main compound present in cannabis</a>. Our Delta-9 THC products are all compliant with the <a target="_blank" rel="noopener" href="https://www.fda.gov/news-events/congressional-testimony/hemp-production-and-2018-farm-bill-07252019">2018 Federal Farm Bill</a>.</p>
        <h2>What is Delta 8 THC?</h2>
        <p>Delta-8 THC is a <a target="_blank" rel="noopener" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9312454/">psychoactive, intoxicating, and naturally occuring cannabinoid found in cannabis</a> plants. This form of THC is less potent than Delta-9 THC, leading to a milder high in comparison to Delta-9 THC when taken at the same dosage as Delta-9 THC products.</p>
        <h2>What is the endocannabinoid system?</h2>
        <p>The endocannabinoid system (<a target="_blank" rel="noopener" href="https://www.health.harvard.edu/blog/the-endocannabinoid-system-essential-and-mysterious-202108112569">ECS</a>) is a biological system composed of endocannabinoids (cannabinoids produced by the body) and the receptors they bind to, cannabinoid receptor type 1 (CB1) and cannabinoid receptor type 2 (CB2). The endocannabinoid system has been shown to be involved in the regulation of several physiological and cognitive processes throughout the human body.</p>
        <h2>What is a cannabinoid?</h2>
        <p>Cannabinoids are a group of chemical compounds that are most commonly found in cannabis, but are not exclusive to it. In addition to being produced endogenously by the human endocannabinoid system, cannabinoids have also been found in other botanical sources, including hops and varieties of Echinacea. At least 113 cannabinoids have been isolated from cannabis and characterized, with two of the most notable ones being cannabidiol (CBD) tetrahydrocannabinol (THC).</p>
        <h2>What tests do you run on your products?</h2>
        <p>Each batch of our CBD is <Link to= '/labtests'>third-party lab tested</Link> and guaranteed to be free of contaminants like heavy metals, bacteria, microbial life, mycotoxins and pesticides. We also run tests that identify all components and molecules in our product which also yield the full potency of our cannabinoids.</p>
        <h2>How fast will I receive my products once they are ordered and paid for?</h2>
        <p>You will receive your products within 2-9 business days if located in the US. Shipping time varies from state to state and method of shipping.</p>
    </div>
    </StaticUniversals>
    </ContextProvider>
  )
}

export default FAQs