export const PROJECTS: any[] = [
  {
    _id: {
      $oid: '64ca432c718d788969a5ae19'
    },
    id: 'b7e15891-7d4b-4218-869b-e0da32191a6e',
    user_github_id: null,
    file_name: 'admeta.md',
    start_date: {
      $date: '2021-12-15T10:19:48.000Z'
    },
    html_url:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/AdMeta.md',
    payment_details: '0x1d346c4f0732674a1fc69b4bafba854f53353c35 (erc20 usdt)',
    md_content:
      "# AdMeta\n\n- **Team Name:** AdMeta\n- **Payment Address:** 0x1D346c4F0732674a1fc69b4bAFBa854F53353C35 (ERC20 USDT)\n- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2\n\n## Project Overview :page_facing_up:\n\n### Overview\n\nAdvertising in Metaverse\n\nAdMeta is a Metaverse advertisement platform that focuses on privacy-preserving. AdMeta uses a TEE-based DID service to identify target groups for advertisers, and with the usage of TEE, AdMeta guarantees not to collect any user data. AdMeta builds multiple forms of ad assets (e.g. billboards, wall paintings) in Metaverse platforms like Decentraland, Bit.Country, to allow land holders to integrate our products easily. Qualified conversions let both users and publishers get rewards from advertisers.\n\nIn Polkadot and Kusama ecosystem, DID projects like Litentry are growing fast along with its related products. We have already discussed and agreed on our initial cooperation with Litentry. Also, we have contacted with Metaverse projects like Bit.Country, who shows great interests in cooperation as well.\n\nUnlike traditional ad platforms, who collect users sensitive data(e.g. location, browsing history) for advertising, AdMeta does not collect or store any user data per se. Instead, users voluntarily decide and control what data can be stored in TEE, and the stored data in TEE cannot be accessed by anyone except users themselves.\n\n### Project Details\n\n![AdMeta Demo - the floating billboard](https://user-images.githubusercontent.com/4738254/144754078-1877d8a5-8ef9-49ec-8ef5-f79496a689f0.png)\n\nIn the above image, the floating billboard is our prototype ad component built with decentraland SDK. Users who registered on our blockchain, and switched \"Ad Display\" option on (by default it's off) are able to see a customized ad content on this billboard while gaming in decentraland.\n\nThe content of this ad component is selected according to user's personal data and preference. Unlike centralized ad platforms, we don't store user's data on or database. Instead, it's stored on the TEE layer of blockchain, and the target group matching and selecting happen also in the TEE layer, which ensures that no private data are exposed during the whole process. Eventually, both user and publisher receive some amount of token as rewards from advertiser.\n\nOur blockchain is built with Substrate, and the pallet-ad provides the functionality of advertisement proposal, storage and governance. The user pallet will connect to TEE-based external identity aggregation and DID service provided by Litentry (we have already the initial cooperation plan) to match ads with users data and preference.\n\n#### Architecture\n\n![AdMeta Architecture](https://raw.githubusercontent.com/h4n0/gists/master/admeta/admeta_architecture.svg)\n\n**Advertisers** can propose an ad with certain acceptance rule, e.g. link clicking, and also advertiser provides how many times the ads are displayed and converted, and how much they pay for each conversion. They need to pay the total price (the number of conversions \\* price per conversion) while proposing the ad. Each ad display has a unique ID, which is generated while creating the proposal. A Merkle tree are built with all these unique IDs, and the root of Merkle tree will be stored in on-chain storage. A qualified conversion gives the participated user this UID, with which the user can claim for rewards.\n\n**Councils** shall approve or reject ad proposals according to the content of ads. Also, advertisers are evaluated on their behavior democratically.\n\n**Users** can switch on the \"Ad Display\" option on AdMeta, so that users can get rewards by viewing and interacting with ads. By default, this option is off, which means users who haven't set up their AdMeta won't see any ads. Users can also provide their data for a better ad matching, by means of this they will get more rewards.\n\n**Publishers** can simply utilize our Ad Assets on any Metaverse platform and place it on their lands. Users also get rewards by a qualified display conversion.\n\n#### Technology Stack\n\n- Substrate\n- Node.js\n- 3D Model Design\n\n### Ecosystem Fit\n\nThere are an increasing number of Metaverse related projects in Polkadot/Kusama ecosystem, however, the current Metaverse platforms still lack of infrastructures and applications, comparing to our current real life. We therefore build this for various Metaverse platforms.\n\nOur target audiences can be Web3 projects, who are potential advertisers, Metaverse land holders, who are potential publishers, and Metaverse players, who are potential users.\n\nAdvertising is our natural needs in almost all social scenarios, and we meet this needs in Metaverse.\n\n[Parami](https://parami.io/) builds Web3 ad platforms as well, and their scope is to build the DID and privacy layer by themselves. While we are focusing on the advertising functionality, and the DID service will be provided by Litentry, who is more professional on this field and has already their products. Also, our ad platform is targeting on Metaverse, not Web3.\n\n## Team :busts_in_silhouette:\n\n### Team members (In order of joining time)\n\nHan Zhao - Core Dev and PM of Litentry Parachain Team. University of Stuttgart\n\nYvonne Xie - Digital Marketing Lead. King's College London\n\nShihao Zhao - Full Stack Dev of Litentry. University of Toronto\n\nHao Ding - VP of Litentry, Founder of Web3Go. University of Stuttgart\n\nDr. John Wu - Core Dev of Litentry Parachain Team. The University of Tokyo\n\n### Contact\n\n- **Contact Name:** Han Zhao\n- **Contact Email:** windzhaohan@gmail.com\n- **Website:** <https://admeta.network/>\n\n### Legal Structure\n\n- **Registered Address:** No legal structure yet.\n- **Registered Legal Entity:** No legal structure yet.\n\n### Team's experience\n\nHan and John are core developers as well as project managers at Litentry, and both of them are main developers who implemented the Litentry parachain from scratch. Litentry is an identity aggregation focused company in Polkadot ecosystem, and has got the Web3 Foundation grant since 2019.\n\nYvonne has more than 8 years experience of digital marketing, and she has a deep understanding and practice of various online marketing and advertising methods. She also initialized this idea of combining advertisement and privacy preserving, to archive the goal of data protection.\n\nShihao is a full stack developer at Litentry, who contributes a lot in Litentry and Web3Go web apps and backend apps.\n\nHao is the founder of Web3Go, VP of Litentry, who has a very solid practical experience on both blockchain and data science.\n\nNote: Both [Litentry](https://www.litentry.com/) and [Web3Go](https://github.com/w3f/Grants-Program/blob/master/applications/Web3Go.md) are Web3 granted projects.\n\n### Team Code Repos\n\n- <https://github.com/litentry/litentry-parachain>\n- <https://github.com/litentry/litentry-pallets>\n- <https://github.com/web3go-xyz/web3go>\n\nPlease also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.\n\n- <https://github.com/h4n0> Han Zhao\n- <https://github.com/Shihao66> Shihao Zhao\n- <https://github.com/Moehringen> Hao Ding\n\n### Team LinkedIn Profiles (if available)\n\n- <https://www.linkedin.com/in/zhaohan6>\n- <https://www.linkedin.com/in/shihao-zhao-55752685/>\n- <https://www.linkedin.com/in/hao-ding-msc-pmp-64411193/>\n\n## Development Status :open_book:\n\n- <https://github.com/AdMetaNetwork/admeta> This is the AdMeta Substrate chain implementation. We already started to build the pallets mentioned in Milestone 1 below.\n- <https://github.com/AdMetaNetwork/admeta-webapp> This is our web app repo according to Milestone 1. We already had a single page app with polkadot js API integrated now.\n- <https://github.com/AdMetaNetwork/admeta-decentraland> This is a simple asset built with Decentraland SDK, and currently it's just for a demo purpose.\n- <https://admeta.network/> We also have the first version of our website.\n\n## Development Roadmap :nut_and_bolt:\n\n### Overview\n\n- **Total Estimated Duration:** 1 months\n- **Full-Time Equivalent (FTE):** 2 FTE\n- **Total Costs:** 12,000 USD\n\n### Milestone 1 — Substrate Chain with Impression Ad, Web App\n\n- **Estimated duration:** 6 month\n- **FTE:** 2\n- **Costs:** 12,000 USD\n\n| Number | Deliverable                 | Specification                                                                                                                                                                                                                                                                                                  |\n| -----: | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n|    0a. | License                     | GPLv3                                                                                                                                                                                                                                                                                                          |\n|    0b. | Documentation               | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                  |\n|    0c. | Testing Guide               | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                              |\n|    0d. | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                  |\n|    0e. | Article                     | We will publish an **article**/workshop that explains our advertising workflow as well as technical details.                                                                                                                                                                                                   |\n|     1. | Substrate module: ad        | We will create a Substrate module that will allow advertiser to create impression ads, and with council's approval, this ad will be ready to be displayed. If ads are rejected by the council(e.g. illegal or pornographic content), the advertiser's proposal bond will be slashed and collected in treasury. |\n|     2. | Substrate module: user mock | We will create a Substrate module that will first store users data on chain, to test and verify our logic. Also, user can update their data, control what data should be used, and these data are used to find the best matching ad for user.                                                                  |\n|     3. | Substrate chain             | Module ad and user can be integrated into a substrate node, to enable users access of all approved ads, receive rewards, etc. This chain will integrate treasury, council, democracy and also other essential pallets, to build a full-featured blockchain.                                                    |\n|     4. | Web App                     | We will create a web app, to let users easily interact with our substrate node. Users can claim rewards from viewing and clicking ads, and they can also configure their ad preferences and decide if they are willing to view ads or not.                                                                     |\n\n## Future Plans\n\nThe next step is to have sensitive data stored in TEE. Also, we will build more ad types, like click ads and acquisition/action ads. Meanwhile, we will implement a Chrome extension to simplify the claim process, and an Ad asset on Decentraland(or other Metaverse platform) to enable land holders to use our ad assets conveniently.\n\nIn a long run, we will cooperate and adapt our products with more Metaverse platforms, and also we will develop more creative and interactive ad types.\n\n## Additional Information :heavy_plus_sign:\n\n**How did you hear about the Grants Program?** Personal recommendation\n",
    md_link:
      'https://raw.githubusercontent.com/shaurya-ATR940/Grants-Program_dummy/master/applications/AdMeta.md',
    project_name: 'admeta',
    status: 'complete',
    total_cost: {
      amount: '12000',
      currency: 'usd'
    },
    total_duration: '1 months',
    team_id: '945eae99-7d37-4492-b942-9bc3afd58bd0',
    level: '2',
    legal_structure: {
      registered_address: 'no legal structure yet.',
      registered_legal_entity: 'no legal structure yet.'
    },
    milestones: ['8f276a33-a8e3-4cb2-9d4a-24da91724407'],
    totalMilestones: 1,
    __v: 0
  },
  {
    _id: {
      $oid: '64ca432c718d788969a5ae1a'
    },
    id: '07c49e56-9a1e-444c-9a5b-a65d723ba757',
    user_github_id: null,
    file_name: 'afloat.md',
    start_date: {
      $date: '2022-05-12T09:10:03.000Z'
    },
    html_url:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/Afloat.md',
    payment_details: 'bc1q0aghk8qufzwpmrp5nfyu9r7dh3yynmphk7rhjj',
    md_content:
      "# Afloat Tax Infrastructure Polkadot Integration\n\n- **Team Name:** Afloat Inc.\n- **Payment Address:** bc1q0aghk8qufzwpmrp5nfyu9r7dh3yynmphk7rhjj\n- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2\n\n## Overview\n\n[Afloat](https://stayafloat.io/#/) is one of the first real-use cases of blockchain technology in the accounting industry. It enables the fractional buying and selling of tax credits that historically have been inefficient, opaque, and centralized. It has already processed tax credits ranging in orders from $2K -$70k USD.\n\nAfloat was built on a private Ethereum clone but wants to migrate to Polkadot due to its technology, identity management, and community. Parachains like Kilt and their identity services would be crucial at validating government roles and professional certifications like accountants and institutional sellers.\n\n## Project Details\n\n### Background\n\nA common tax credit is for land preservation. The inhabitants of a geographic area recognize that their shared quality of life may be positively impacted if more land was preserved rather than developed. If the owner of land property in that area agrees to preserve land, they may be eligible to receive a tax credit in an amount associated with the value of the land property. However, some owners of tax credits do not have enough tax liability to take full advantage of the reward. Because of this, a number of states allow credits to be transferred. State transferable tax credits are typically bought and sold at a discount.\n\nHistorically, the tax credit industry’s transfer process has been deeply inefficient. Due to a lack of trust between buyers and sellers, accountants and lawyers act as middlemen. This added financial and procedural cost creates an entry barrier for the majority of taxpayers into the tax credit market. What remains is a tight-knit group of wealthy buyers, sellers, and policymakers.\n\n### Product\n\n[Afloat](https://stayafloat.io/#/) uses blockchain technology to add trust and liquidity to the market, allowing smaller fractional shares of tax credits to be transferred. So far, Afloat has facilitated the transfer of over $500,000 worth of tax credits between multiple buyers and sellers, 90% with whom Afloat anticipates an ongoing relationship. One of the platform’s sellers is an international company with over 10,000 employees, and the value of tax credits purchased per buyer has so far ranged between less than $2,000 and over $70,000.\n\nWith the ability to tap into a market sector that knows nothing about blockchain or cryptocurrency, Afloat has the potential to lay the foundation to onboard traditional companies into the Polkadot ecosystem beyond using only Afloat. We have 120 active users, many of which are CPAs (public accountants) and represent a network of taxpayers (credit buyers and sellers). We purposefully haven't had any marketing campaigns and have been cautious with growth so far. As of April 15, 2022, we have successfully processed more than twice the total number of tax credits processed in 2021. We had a large batch of users enroll in December 2021 (end of tax year) and material increase (4x) year over year.\n\nHaving started in the US, Afloat, Inc., a Wyoming company, is compliant with existing federal, state, and local regulations and takes care of the entire transfer process with the following functions:\n\n- Uploading proof of tax credit ownership\n![Image](https://user-images.githubusercontent.com/7217054/159963378-b850c316-aa28-46ea-9a87-2e184de57a0d.png)\n\n- Linking a US bank account\n![Image](https://user-images.githubusercontent.com/7217054/159963375-a06565dc-9f19-4aa9-8e31-a6223aa2cef8.png\")\n\n- Fiat integration using Dwolla, a third party company\n- Placing buy and sell limit orders on blockchain\n\n![Image](https://user-images.githubusercontent.com/7217054/159963749-d7e2ef89-fac0-4f4c-a823-9dd3a4e9d263.png)\n\n- Algorithmic matching overlapping full or partial orders in a ”pending” status while waiting for government approval\n\n![Image](https://user-images.githubusercontent.com/7217054/159963752-dc5f9323-1d07-4bc5-b309-ab2147ff71b8.png)\n\n- Autopopulate tax forms with blockchain data (Afloat supports five of thirty-six US tax forms)\n- Completion of government paperwork and money transfer after government approval\n\nTax credits, as a socioeconomic tool, are very similar to concepts found in the Substrate, Polkadot, Kusama (dotsama) ecosystem, where the tokenomics are decided by participants through a governance process designed to maximize the benefit for the network. For example, the network will:\n\n1. \"mint or burn DOTs in order to reward the nodes that run the consensus protocol, to fund the treasury, to control the inflation rate, etc.\"\n2. \"[ensure] DOTs also play a role in slashing protocols designed to disincentivize attacks or adversarial behaviors,\"\n3. \"let DOT holders express their opinion in governance decisions\",  and\n4. \"decide which projects are allocated a parachain slot\".\n\n### Migration\n\nInitially we will run on a standalone chain as a pallet. This provides the most latitude and flexibility. The initial phase is primarily focused on function, usability, and ensuring the core asset type design is secure and composable. It also includes existing user and asset migration. We will have a one-time process per user to teleport their account and assets. Most likely, we will not teleport any orders or redemptions currently in process. They would close out on the old platform, and users would create new ones after they migrate.\n\nWe did not include any scope or fund request in the proposal related to the migration work. The scope of the w3f proposal is focused on building the open source components. These will be available for the community, and Afloat will be an implementation of them. Making the pallets and tooling as general purpose as possible should help with reusability, for us and other projects.\n\nTo handle fractional tax credits in Substrate we are using \"fruniques\". That is our name for *FRactional UNIQUES*. It'll be compatible with the Uniques pallet and eventually with RMRK as well. It allows the user to spawn a new NFT from an existing NFT, repeatedly, while specifying an associated amount. The integrity of the total quantity must remain intact, along with metadata, but each of these NFTs can be priced, transferred, and redeemed individually.\n\nAn earlier implementation of this used a fungible token to represent the parts of the tax credit, but we've found that fractional NFTs fit the mental model a bit better and more ergonomically in existing tools. A user is buying a \"thing\", see that thing in their wallet, where they may hold 7 of them. Holding various quantities of 7 different fungible tokens seemed to increase the complexity more than necessary. This is a design element we frequently brainstorm on though. In a future release, it may be useful to have fruniques support both use cases.\n\nThis proposal covers the migration or creation of the following:\n\n1. User onboarding (set and verify identity with gatekeeper parameters) and slides.\n2. Sign and Login with email.\n3. Originate and configure a tax credit and create sales orders for tax credits.\n4. Support for encrypted files attached to tax credits.\n5. Sell the entire or a fraction of the tax credit to interested buyers using fruniques pallets.\n6. Ability for buyers to place buy orders.\n7. Asset redemption workflow (tax credits require a 'redemption specialist').\n8. Launch materials, videos and speaking arrangements.\n\n### Workflow\n\n![Image](https://user-images.githubusercontent.com/7217054/160020369-b64ae31d-8cc5-49ce-8c4d-82dea85546cf.png)\n\n## Ecosystem Fit\n\nAfloat serves tax payers that want to buy and/or sell tax credits. These users will benefit by Polkadot's improved security and by gaining compatibility for liquidity. Polkadot will benefit from the influx of non-technical users into the ecosystem. Tax Credits trade with a heavy discount to face value, and Polkadot participants will likely want to hold them during that lifespan even if they aren't the final redeemer. If a 5-year expiration credit is priced at $0.60-to-the-dollar by its impatient originator, it could be purchased via a more patient market maker to perhaps be sold at $0.90 in year 3 or 4, just as an example.\n\nThe secondary target audience are the community of developers that will benefit by leveraging the open source components and integrations with tax credit fruniques.\n\n### Community\n\nAs the perfect technology for record-keeping, blockchain makes a lot of sense for accountants. Afloat not only wants to bring its infrastructure to Polkadot but also bring Polkadot into the accounting community with the following:\n\n#### Continuing Education for CPAs\n\nAfloat’s founder and current CEO [Louise Reed](https://www.linkedin.com/in/louisewreed/) has given talks at a number of CPE conferences, where CPAs receive continuing education credits to maintain their licenses each year. Introducing her to Web 3 infrastructure would allow her to speak about it at CPA conferences, especially to other CPAs looking for classes covering new and interesting topics and ideas.\n\n#### Crypto Clients\n\nWorking in a historically conservative industry, CPAs are starting to feel the push from blockchain/crypto clients to accept the new technology and are now being forced to help with risk mitigation (alongside lawyers).\n\n#### Sellers\n\nTypically, sellers of tax credits are large international businesses, which are usually slow with internal changes. However, familiarity with the tax credit market paves the way for an easier introduction to a new technology.\n\n#### Buyers\n\nIntroducing programming/blockchain/crypto taxpayers to tax savings by way tax credits would bring new customers to a marketplace that has a strong history of centralization, opacity, and insularity.\n\n#### Bridging Communities\n\nAfloat would naturally bridge two opposing communities: accounting, the most trusted and conservative industries, and blockchain, one of the most innovative industries. By association with such a trusted industry, blockchain would receive credibility in the eyes of the general public while also modernizing accounting with new and better processes.\n\n#### Natural Use Case\n\nThere is a huge educational and technological divide in the learning curve for accountants when it comes to blockchain, but Afloat adds an easy and natural way to learn.  Most people, including CPAs and businesses, tend to understand only what they can see and experience, and Afloat brings tangibility to an otherwise intangible industry.\n\n#### Speaking arrangements\n\nLouise Reed is scheduled to speak at the following Certified Public Accountant Societies.\n\n| Date of Talk | CPA Society | Location |\n| -----------: | ----------- | -------- |\n| 5/26/2022    | NC          | Greensboro |\n| 8/24/2022    | GA          | Atlanta |\n| 9/26/2022    | VA (+ VA Tech) | Roanoke |\n| 11/17/2022   | VA (+ VA Tech) | Virginia Beach |\n\n## Team :busts_in_silhouette:\n\n### Team members\n\n- Louise Reed - CEO and founder\n- Max Gravitt - Architect\n- Jose Maria Gayosso - UI Developer\n- Erick Casanova - Blockchain Engineer\n- Abel Yanez - Substrate Developer\n\n### Contact\n\n- **Contact Name:** Louise Reed\n- **Contact Email:** louise@stayafloat.io\n- **Website:** <https://stayafloat.io/#/>\n\n### Legal Structure\n\n- **Registered Address:** 6118 Saint Andrews Lane, Richmond, VA 23226\n- **Registered Legal Entity:** Afloat, Inc.\n\n### Team's experience\n\nWith a master's degree in physics from Duke University and a Master of Accounting from the University of North Carolina at Chapel Hill, Louise W. Reed has been a CPA for fifteen years and has grown a successful private practice that specializes in working with small businesses. In the spring of 2018, Louise conceptualized and founded Afloat to allow her clients to have the same tax opportunities traditionally found in only the largest of CPA firms. Under her leadership, Afloat built the current application (private ethereum clone) with an in-house team and successfully launched in 2021. [Awards](https://stayafloat.io/#/media)\n\nAfloat is partnering with Hashed Systems DAO LLC, a substrate development team with years of experience building blockchain applications. They have worked on substrate and Polkadot since spring 2021. Their developers completed Brian Chen's course and have experience running substrate chains and have significant experience working with the Uniques, Identity and Node-authorization pallets. Additional relevant experience below:\n\n[Hypha DAO](https://dho.hypha.earth/#/): Smart contracts and front end development that enables the creation of flexible roles, assignments and contributions with recurring payments. Design and implement a graph data layer to improve web application performance. Design and build a [Double Entry accounting](https://us02web.zoom.us/rec/share/eRqiBvq-dsV0L_hEjW5e8DWNYQlUn2bLhI8-86jkRVwdXiN3TiD5edym17ubCd9R.QhKQw_Byy0t5_8SW?startTime=1647371674000) (Passcode: .V$C#Br2) plattform that streams wallet activity, supports token price history, reporting and currency conversion.\n\n[SEED](https://joinseeds.earth/): Smart contract and mobile development that capture the project's constitution, enable voting on proposals and basic identity management like reputation, vote history etc. Design and build a PWA token swaps app. Design and build a basic [Economic Simulator](https://seeds-sim.hypha.earth/dashboard) that enables voters to understand the economic impact of policy changes.\n\n### Relevant profile links\n\n- Louise Reed CPA website: <https://louisereedcpa.com/>\n- Louise Reed LinkedIn: <https://www.linkedin.com/in/louisewreed/>\n- Abel on Github: <https://github.com/amatsonkali>\n- Jose Maria on Github: <https://github.com/jmgayosso> and Gitlab: <https://gitlab.com/jmgayosso>\n- Hashed website: <https://hashed.io/>\n- Erick on GitHub: <https://github.com/tlacloc>\n\n## Development Roadmap :nut_and_bolt:\n\n### Overview\n\n- **Total Estimated Duration:** 13 weeks\n- **Full-Time Equivalent (FTE):**  2 FTE (across 5 contributors)\n- **Total Costs:** 46,200 USD\n\n#### Languages\n\n- All pallets will be developed in Rust.\n- The custodial/persistence partner backend will be developed in Nodejs, with a slight possibility of porting it to Rust.\n- The front end will be Angular, with a possibility that it will be migrated to Vuejs.\n\n### Milestone 1 — User onboarding (set and verify identity with gatekeeper parameters) and slides\n\n- **Estimated duration:** 5 weeks\n- **FTE:**  2\n- **Costs:** 17,675 USD\n(5 contributors)\n\n| Number | Deliverable | Specification |\n| -----: | ----------- | ------------- |\n| 0a. | License | MIT |\n| 0b. | Documentation | We will provide **inline documentation** of the code and a basic **tutorial** of the modules delivered in this Milestone.|\n| 0c. | Testing | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided |\n| 0d. | Video | We will provide a video demonstration that will illustrate all of the functionality delivered with this milestone. |\n| 0e. | Article | We will publish an **article** in English and Spanish that explains what was built and how it can benefit other projects |\n| 1. | Set Profile and Upload KYC Materials | User onboarding web client for uploading identity details in a privacy preserving manner. Data will be encrypted and only accessible by 1) the user, 2) a pre-specified KYC administrator account, and 3) a persistence partner/custodian that the user or app administrator selects. |\n| 2. | KYC Admin | KYC administrator screen for viewing and approving new user (market participant) requests. We plan to use the existing `registrar` process on the Identity pallet. UI is in Angular, with a small chance we may migrate it to Vuejs |\n| 3. | Slides |1-3 additional presentation slides for Louise W. Reed, CPA’s currently scheduled talks at CPA conferences regarding blockchain, cryptocurrency, triple-entry accounting and transferring state tax credits.  The additional slides will be added to address why Afloat sees value in being supported by Polkadot’s ecosystem|\n\n### Milestone 2 — Originate and configure a tax credit and create sales order for tax credits\n\n- **Estimated duration:** 4 weeks\n- **FTE:**  2\n- **Costs:** 14,140 USD\n(5 contributors)\n\n| Number | Deliverable | Specification |\n| -----: | ----------- | ------------- |\n| 0a. | License | MIT |\n| 0b. | Documentation | We will provide **inline documentation** of the code and a basic **tutorial** of the modules delivered in this Milestone.|\n| 0c. | Testing | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided |\n| 0d. | Video | We will provide a video demonstration that will illustrate all of the functionality delivered with this milestone. |\n| 0e. | Article | We will publish an **article** in English and Spanish that explains what was built and how it can benefit other projects\n| 1. | Originate Tax Credit | Web client for onboarding new tax credits as NFTs, appropriate metadata persisted using the Uniques and likely Statemint specifications. |\n| 2. | Upload Confidential Documents | This feature allows for NFT originators to upload encrypted files attached to tax credits. The files will be accessible only by the user and the application administartor. |\n| 3. | Tax Credit verification | MVP Tax Credit pallet, compatible with the prebuilt Uniques pallet (and/or RMRK), will support data validation rules by jurisdiction and tax credit type. The user will be able to save a draft of their tax credit if they need to identify more IRL steps to fix discrepancies. It's like a 'tax credit compiler'. |\n| 4. | List for Sale | Ability for Tax Credit (NFT) owners to assign a price and list it for sale.|\n\n### Milestone 3 — Sell the entire or a fraction of the tax credit to interested buyers using fruniques pallets\n\n- **Estimated duration:** 2 weeks\n- **FTE:**  2\n- **Costs:** 7,070 USD\n(5 contributors)\n\n| Number | Deliverable | Specification |\n| -----: | ----------- | ------------- |\n| 0a. | License | MIT |\n| 0b. | Documentation | We will provide **inline documentation** of the code and a basic **tutorial** of the modules delivered in this Milestone. |\n| 0c. | Testing | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided |\n| 0d. | Video | We will provide a video demonstration that will illustrate all of the functionality delivered with this milestone. |\n| 0e. | Article | We will publish an **article** in English and Spanish that explains what was built and how it can benefit other projects\n| 1. | Order Part of an NFT | Web client and pallet support for fractionalizing a Tax Credit NFT. Users may specify the % and/or direct amount for the order. Rust and Angular/Vuejs |\n| 2. | Complete/Confirm Order | Sell the entire or a fraction of the tax credit to interested buyers using fruniques pallets. Rust and Angular/Vuejs |\n| 3. | Order Settlement | Ensure the marketplace correctly calculates appropriate commissions and fees. Calculations will be in Rust, displayed in application using Angular/Vuejs |\n\n### Milestone 4 — Redeem the tax credit and confirm redemption and freeze/burn asset on-chain\n\n- **Estimated duration:** 2 weeks\n- **FTE:**  2\n- **Costs:** 7,070 USD\n(5 contributors)\n\n| Number | Deliverable | Specification |\n| -----: | ----------- | ------------- |\n| 0a. | License | MIT |\n| 0b. | Documentation | We will provide **inline documentation** of the code and a basic **tutorial** of the modules delivered in this Milestone.|\n| 0c. | Testing | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided |\n| 0d. | Video | We will provide a video demonstration that will illustrate all of the functionality delivered with this milestone. |\n| 0e. | Article | We will publish an **article** in English and Spanish that explains what was built and how it can benefit other projects\n| 1. | Approve Redemption Specialists | Pallet and web client for onboarding and approving/enrolling Tax Credit Redemption Specialists. These are experts that know how to perform appropriate steps to migrate a tax credit IRL. Approval will be handled by marketplace administrator initially, by the community eventually. |\n| 2. | Request Redemption | Pallet and web function/form for requesting redemption, optionally from a specific Redemption Specialist or system will choose. |\n| 3. | View materials and Redeem | Pallet support and web client for Redemption Specialist to review the encrypted tax credit materials and confirm that off-chain IRL redemption has been completed. Redemption completion will be approved by owner and Redemption specialist. |\n| 4. | Asset Manager | Once part or all of a tax credit NFT is redeemed, the Tax Credit Asset Manager(s) will be able to lock, freeze, and/or burn the NFT. |\n| 5. | Launch Materials | Launch materials, videos and speaking arrangements for Louise are already in queue.|  \n\n## Future Plans\n\n### Immediate Use\n\nAll Afloat users will be migrated to the substrate application and benefit from the identity and security enhancements. Afloat will gain access to the full substrate ecosystem and vice versa.\n\n### Next Phases\n\nThis proposal covers Afloat migration of the current functionality. Below are future phases that expand it:\n\n#### Phase 2\n\nUser scenarios:\n\n- Registration/approval of new appraisers,\n- Request appraisal of NFT,\n- Appraise NFT,\n- Review and compensate appraiser\n\nWeb client for:\n\n- NFT creator to request judgment and grant access to Asset Grader(s)\n- Asset Grader to review materials and provide judgment\n\n#### Phase 3\n\nUser scenarios:\n\n- More advanced ordering and pricing models,\n- Candle auctions,\n- Improved compatibility with more jurisdictions.\n\n#### Phase 4\n\n- Provide API access and referral program for tax industry participants. (e.g. allow existing systems and networks to seamlessly integrate)\n\n## Additional Information :heavy_plus_sign:\n\n**How did you hear about the Grants Program?**\nRaul Romanutti recommended the program on a call with Louise Reed, Max Gravitt and Augusto Lara on March 21st, 2022.\n\n### Additional Context\n\n#### State Tax Credit Breakdown\n\nCurrently, forty-one states offer tax credits designed to incentivize economically and socially desirable behavior, like historic structure rehabilitation, land preservation and film production.\n\n- Linking a US bank account\n\n![Image](https://user-images.githubusercontent.com/7217054/160020375-0e360e26-17f9-4856-8266-1e95b76efc7c.png)\n\nThirty-four of those states allow the producers of these credits to be incentivized even if they do not have enough state income to fully utilize the credits and/or need the cash flow to further expand the incentivized behavior.  \n\n![Image](https://user-images.githubusercontent.com/7217054/160020372-8190f4aa-81aa-4b0e-ae1b-d92eb031df5b.png)\n\nBlockchain Friendly State Breakdown\n\n![Image](https://user-images.githubusercontent.com/7217054/160020643-84313880-4e0b-4942-8b1a-7278eb7aa219.png)\n\n<https://www.investopedia.com/news/majority-us-states-are-still-acknowledge-cryptocurrencies/>\n",
    md_link:
      'https://raw.githubusercontent.com/shaurya-ATR940/Grants-Program_dummy/master/applications/Afloat.md',
    project_name: 'afloat tax infrastructure polkadot integration',
    status: 'complete',
    total_cost: {
      amount: '46200',
      currency: 'usd'
    },
    total_duration: '13 weeks',
    team_id: 'ea7012bd-676b-4b7f-80b9-26e44079e08c',
    level: '2',
    legal_structure: {
      registered_address: '6118 saint andrews lane, richmond, va 23226',
      registered_legal_entity: 'afloat, inc.'
    },
    milestones: [
      '60d52d97-00cd-41a4-831b-802fbb6962b1',
      'de0e0a1d-e27a-4d76-8c3b-5a1cb25b4dae',
      'b08b19c8-4b1a-4686-b548-57c955e78fff',
      'ed5b5728-f313-433a-9c44-cc9d71e44de9'
    ],
    totalMilestones: 4,
    __v: 0
  },
  {
    _id: {
      $oid: '64ca432c718d788969a5ae1c'
    },
    id: 'ff1fd744-f93a-424a-a129-4d2ef9d20401',
    user_github_id: null,
    file_name: 'anchor.md',
    start_date: {
      $date: '2023-02-14T12:01:17.000Z'
    },
    html_url:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/Anchor.md',
    payment_details: '13u5klgrt4n1smc78zxtyvedgp1u1lygaahtpftvcv6z1btr (usdt)',
    md_content:
      '# Anchor, On-chain Linked List pallet and Name Service\n\n- **Team Name:** Fuu\n- **Payment Address:** 13u5kLGrt4n1Smc78ZXtYVedgp1U1LyGAAHtPFtVcv6Z1BtR (USDT)\n- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1\n\n\n## Project Overview :page_facing_up:\n\n### Overview\n\n- Anchor is a on-chain linked list system base on substrate 3.0.0. It is used to support cApp ( Chain Application ) development. On another hand, Anchor can alse be treated as Name Service or on-chain key-value storage system.\n\n- Anchor is a isolated substrate pallet. It is currently used in the application of freeSaying. It can provide flexible data structure on the chain and handle complex logic without upgrading the substrate node itself.\nYou can access the [freeSaying ( Only applicable to mobile )](https://freesaying.net) demo to know well. Anchor network is the very important basic storage system. Anchor.js is a isolate JS library to access Anchor network, can read and write data easily.\nAnchor pallet is a part of EasyPolka, the relationship as follow :\n\n![easypolka.png](http://android.im/anchor/easypolka.png)\n\nQR to access to freesaying.net.\n![easypolka.png](http://android.im/anchor/qr.png)\n\n- With Anchor, you can use run a substate network just need a bit upgrade. Through the highly customizable data structure and the ability of cApp, the threshold of application development on the chain is greatly reduced. It means that new developers who even does not know blockchain well can build cApp just by Javascript and publish it nearly free.\n\n- As a web developer, I firmly believe in the future of blockchain technology, but when I turn to blockchain development, I encounter a huge threshold. It takes a lot of time to get familiar with both language and various concepts. At the same time, technology is still improving, and a stable development environment cannot be obtained. All of these prompted me to improve EasyPolka for my own development.\nSo far, only one person myself can develop complex cApp ( on-chain applications ). I believe that this can help other developers to build cApps more efficiently.\nWill try to apply the left part, it is a bit complex, I am working on regrouping them now. The image show the whole structure.\n\n![easypolka.png](http://android.im/anchor/easypolka_not.png)\n\n### Project Details\n\n- Anchor development itself has been done, and it is deployed here [check "wss://dev.metanchor.net" on polkadot.js.org](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdev.metanchor.net#/explorer). One cApp is deployed to test too, the URL is [https://freesaying.net](https://freesaying.net). This React project load the target Anchor "freeSaying" from dev.metanchor.net, then run the cApp which is a socail media application.\n\n- There are 4 methods and 2 stores to implement the on-chain linked list function in Anchor pallet.\n\n- Substrate 3.0.0 and Rust for Anchor pallet. Javascript for anchor.js.\n\n- Code here [https://github.com/ff13dfly/Anchor](https://github.com/ff13dfly/Anchor), the document is the next step.\n\n- Treat Anchor as Name Service, there is no available pallet can be use. Have checked here [Open Source Polkadot Stack](https://wiki.polkadot.network/docs/build-open-source).\n![easypolka.png](http://android.im/anchor/status.png)\n\n- The function of Anchor has been finalized and will not be further expanded on substrate side. The function of the current version is the final form.\n\n### Ecosystem Fit\n\n- An available Name Services on Substrate 3.0.0, and it is extended to a On-chain Linked List system.\n\n- Developers who have not yet used substrate/Polkadot. Developers who do not like Smart Contract way to develop application.\n\n- Developer can build application flexibly without understanding the whole blockchain system. I think this is attractive to many developers.\n\n- From the [Open Source Polkadot Stack](https://wiki.polkadot.network/docs/build-open-source), there are 4 Name Service pallets, 2 red ( can not compatible to substrate 3.0.0 ) and 2 yellow ( code not updated more than 2 months by checking github ).\n\n## Team :busts_in_silhouette:\n\n### Team members\n\n- Zhongqiang Fu, individual developer.\n\n### Contact\n\n- **Contact Name:** Zhongqiang Fu\n- **Contact Email:** ff13dfly@163.com\n- **Website:** https://github.com/ff13dfly/\n\n### Legal Structure\n\n- Individual\n\n### Team\'s experience\n\n- On substrate, Substrate with Anchor pallet has been build successful and run at [wss:dev.metanchor.net](wss:dev.metanchor.net). I have tried to load a three nodes network successful.\n\n### Team Code Repos\n\n- https://github.com/ff13dfly/\n- https://github.com/ff13dfly/Anchor\n\n### Team LinkedIn Profiles (if available)\n\n## Development Status :open_book:\n\n- Demo cApp [freeSaying](https://android.im/vManager/) is published now. The test network is available, you can access [wss:dev.metanchor.net](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdev.metanchor.net#/explorer). Anchor pallet functions have been developed, but not tested entirely.\n\n## Development Roadmap :nut_and_bolt:\n\n### Anchor pallet\n\n- There are 4 methods exposed. One for setting data, Three for trading anchor.\n  ![easypolka.png](http://android.im/anchor/methods.png)\n  1. setAnchor, set Anchor data method.\n\n    ```RUST\n    pub fn set_anchor(\n      origin: OriginFor<T>,   //default\n      key: Vec<u8>,           //Anchor name\n      raw: Vec<u8>,           //raw data to storage\n      protocol: Vec<u8>,      //data protocol, used to decide how to decode raw data\n      pre:T::BlockNumber      //the previous block number which storage anchor data\n    ) -> DispatchResult {\n      // code here.\n      Ok(())\n    }\n    ```\n\n  2. sellAnchor, sell your Anchor publish or to target account.\n\n    ```RUST\n    pub fn sell_anchor(\n      origin: OriginFor<T>,   //default\n      key: Vec<u8>,           //Anchor name\n      cost: u32,              //unit accuracy\n      target:<T::Lookup as StaticLookup>::Source  //target buyer SS58 address. If the same as owner, can be sold to anyone.\n    ) -> DispatchResult {\n      // code here.\n      Ok(())\n    }\n    ```\n\n  3. unsellAnchor, revoke Anchor sell status.\n\n  ```RUST\n    pub fn unsell_anchor(\n      origin: OriginFor<T>,   //default\n      key: Vec<u8>,           //Anchor name\n    ) -> DispatchResult {\n      // code here.\n      Ok(())\n    }\n  ```\n\n  4. buyAnchor, buy target Anchor which is on sell.\n\n  ```RUST\n    pub fn buy_anchor(\n      origin: OriginFor<T>,    //default\n      key: Vec<u8>,            //Anchor name\n    ) -> DispatchResult {\n      // code here.\n      Ok(())\n    }\n  ```\n\n- There are two Runtime Storage. One for the anchor data status, one for the on-sell list.\n  ![easypolka.png](http://android.im/anchor/storage.png)\n  ```RUST\n    // (T::AccountId,T::BlockNumber)\n    //  T::AccountId, the anchor owner ss58 address\n    //  T::BlockNumber, last block number when updated data successfully.\n    pub(super) type AnchorOwner<T: Config> = StorageMap<_, Twox64Concat, Vec<u8>, (T::AccountId,T::BlockNumber)>;\n\n    // (T::AccountId, u32,T::AccountId)\n    // T::AccountId, the anchor owner ss58 address\n    // u32, the sell price for the anchor\n    // T::AccountId, the target buyer. If the same as owner, it is free to buy.\n    pub(super) type SellList<T: Config> = StorageMap<_, Twox64Concat, Vec<u8>, (T::AccountId, u32,T::AccountId)>;\n  ```\n\n### anchor.js\n\n- exposed methods. Three parts : basic substrate functions, anchor data I/O functions, anchor exchange functions. It has been used in the demo freeSaying, but no isolated yet. And exchange part need to code this time.\nAnchor.js can help developer accessing Anchor network by this single JS.\n\n  ```JS\n    /*******************************/\n    /* substrate related functions */\n    /*******************************/\n\n    //link to target substrate node\n    exports.link=function(endpoint,callback){\n      /* return callback && callback(PolkadotJS.API) */\n    };\n\n    //load encry file to get pair\n    exports.load=function(file,password,callback){\n      /* return callback && callback(pair) */\n    };\n\n    //subcribe the latest block\n    exports.subcribe=function(callback){\n      /* return callback && callback(anchorDataList) */\n    };\n\n    //check account balance\n    exports.balance=function(ss58Address,callback){\n      /* return callback && callback(amount) */\n    },\n    \n    /***********************************/\n    /* Anchor pallet related functions */\n    /***********************************/\n\n    /* data part */\n    //get the latest anchor data\n    exports.latest=function(anchor,callback){\n      /* return callback && callback(formattedAnchorData) */\n    };\n\n    //get the anchor data on special block.\n    exports.target=function(anchor,block,callback){\n      /* return callback && callback(formattedAnchorData) */\n    };\n\n    //get the list data of anchor.\n    exports.history=function(anchor,callback,limit){\n      /* return callback && callback(listofAnchorsData) */\n    };\n\n    //set target Anchor data.\n    exports.write=function(pair,anchor,raw,protocol,callback){\n      /* return callback && callback(toChainProcessStatus) */\n    };\n\n    /* market part */\n    //set Anchor status to sell.\n    exports.sell=function(pair,anchor,cost,target,callback){\n      /* return callback && callback(true/false) */\n    };\n\n    //buy anchor on sell.\n    exports.buy=function(pair,anchor,callback){\n      /* return callback && callback(true/false) */\n    };\n\n    //revoke anchor from selling.\n    exports.unsell=function(pair,anchor,callback){\n      /* return callback && callback(true/false) */\n    };\n  ```\n\n### Overview\n\n- **Total Estimated Duration:** 1 month\n- **Full-Time Equivalent (FTE):**  1\n- **Total Costs:** 6,000 USDT\n\n### Milestone 1 — Anchor pallet testing & documents, anchor.js full function\n\n- **Estimated duration:** 1 month\n- **FTE:**  1\n- **Costs:** 6,000 USDT\n\n| Number | Deliverable | Specification |\n| -----: | ----------- | ------------- |\n| 0a. | License | Apache 2.0 / GPLv3 |\n| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |\n| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. On anchor.js, will supply demo to test. |\n| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. I am not so fimilar with Docker, that will take a bit long time. |\n| 0e. | Anchor pallet | Will fix if neccessary. Mainly testing this time. |\n| 0f. | anchor.js | A demo with all functions will be developed by React |\n\n## Future Plans\n\n- Anchor is the data storage part of EasyPolka, it is the most important component. Next, the whole EasyPolka will be open source. At present, it includes the following contents.\n\n| Order | Name | Demo | Github | introduction |\n| -----: | ----------- | ------------- | ------------- | ------------- |\n| 1 | Anchor | wss://dev.metanchor.net | [https://github.com/ff13dfly/Anchor](https://github.com/ff13dfly/Anchor) | Linked list on chian & Name service |\n| 2 | Saying | [https://freesay.net](https://freesay.net) | Not yet | Plinth for cApp |\n| 3 | cSaying | on block 2,220 | Not yet | FreeSaying cApp , pure JS app |\n| 4 | vGateway | [https://android.im/vGateway/](https://android.im/vGateway/) | Not yet | Gateway access to vServices |\n| 5 | vManager | [https://android.im/vManager/](https://android.im/vManager/) | Not yet | Management portal for vServices |\n| 6 | vHistory | No domain, node.js app | Not yet |Anchor cache vService |\n| 7 | vSaying | No domain, node.js app | Not yet] | FreeSaying comment vService |\n| 8 | vMarket | No domain, node.js app | Not yet | Free charge vService |\n| 9 | vMix | No domain, node.js app | Not yet | Front mixer vService |\n| 10 | vSocial | No domain, node.js app | Not yet | Fav & tread vService |\n\n![easypolka.png](http://android.im/anchor/easypolka_not.png)\n\n- The functions above, you can test on the cApp [freeSaying](https://freesaying.net).\nIt is not very stable to access Github here, so the left codes are on my private git server.\n\n- The whole EasyPolka framework works properly, but still so many details to fix and neccesary function to add.\n\n## Additional Information :heavy_plus_sign:\n\n**How did you hear about the Grants Program?** Web3 Foundation Website.\n\n- Demo cApp [freeSaying](https://android.im/vManager/) is published now. The test network is available, you can access [wss:dev.metanchor.net](wss:dev.metanchor.net).\n\n- I have tried twice to apply the Gant Application but not accepted.\n  Anchor, a key-value storage system for substate. Now, it is extended, and applying again, :-)\n  SimPolk, simulator of Polkadot.\n',
    md_link:
      'https://raw.githubusercontent.com/shaurya-ATR940/Grants-Program_dummy/master/applications/Anchor.md',
    project_name: 'anchor, on-chain linked list pallet and name service',
    status: 'active',
    total_cost: {
      amount: '6000',
      currency: 'usdt'
    },
    total_duration: '1 month',
    team_id: '36fd4966-474b-4f2b-85bf-83861879a8ac',
    level: '1',
    legal_structure: {
      registered_address: '',
      registered_legal_entity: ''
    },
    milestones: ['7b60be90-cbdb-4725-aba4-c317c8a450ed'],
    totalMilestones: 1,
    __v: 0
  },
  {
    _id: {
      $oid: '64ca432c718d788969a5ae1d'
    },
    id: '81c811f6-55b7-4296-8de6-79a738cf626c',
    user_github_id: null,
    file_name: 'apron_network.md',
    start_date: {
      $date: '2020-11-26T08:13:40.000Z'
    },
    html_url:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/Apron_Network.md',
    payment_details: '15tv6rqswngwq1z5pim2yjmellvwnm5d4v',
    md_content:
      "# Apron Network\n\n* **Team Name:** Apron Labs\n* **Payment Address:** 15tV6rQSwNgWQ1Z5pim2yJmELLvWNm5D4V\n\n## Project Overview :page_facing_up:\n\n### Overview\n\n#### Introduction\n\nThe Apron Network's vision is to be the entry point of the Web3 World in the future. The goal of the Apron Network is to create the decentralized infrastructure for all the developers who want to build applications on top of the blockchain, the service providers who are running nodes for blockchain, and the users who are using applications based on blockchain.\n\nThe blockchain infrastructure services are provided by seldom centralized service providers. Those service providers are commercial companies and earn profit by providing these services. In general speaking, there is no problem with such a business model that commercial companies provide infrastructure services and get paid by developers or users in the past ages. But NOT NOW. The main feature of blockchain is decentralization, while all the blockchain infrastructure services are built and maintained by commercial companies, and those systems are centralized, which is against the decentralization of blockchain. There is a potential issue of such a business model that the service providers can steal the blockchain from the community by manipulating the API accesses through their infrastructure services. Once the service providers manipulate the API accesses, there is no real blockchain anymore.\n\nMaybe you are still thinking that it sounds terrible but no one can prove it. Let's see the recent accident of infura.io. Almost all of the blockchain applications mainly rely on the API services from infura.io, but none of the builders of blockchain applications can imagine what will happen if infura.io manipulates the API services. Hopefully, infura.io worth our trust according to past services, and there is no manipulation found yet.\n\n**On Nov. 11th, 2020, the API services from infura.io are down, and the idea of Apron Network comes out.**\n\nThe Apron Network is built by the Apron Labs powered by Substrate. It provides a Cross-chain Decentralized Infrastructure Services Network that will be used by blockchain node runners, DApp developers, the public chain community, and DApp users. Every DApp developer can discover the proper service provider for a specific blockchain through the decentralized infrastructure market on the Apron Network. The Apron Network can be run as a parachain of Polkadot.\n\nWith the Apron Network,  the DApp developers can find their API endpoint, node runners can provide infrastructure services to get profit and all the infrastructure services will be decentralized on the two-layers infrastructure service network. The Apron Network will guaranty there is no infura.io accident anymore!\n\n#### Integration\n\nThe Apron Network can be run as a parachain on Polkadot, or an independent chain. The Apron Network contains Apron Node and Apron Market. The Apron Node is built with Substrate 2.0 Framework, and the OCW (Off-chain worker) will be included for API manage records. Apron Market consists of Apron Market Contracts and Apron Market Front End. The contracts will be implemented with Ink!, and the front-end will be built with polkadot.js.\n\n#### Team Interest\n\nMost of the team members are DApp developers who suffer from the lacking of Ethereum API Endpoint and tightly rely on infura.io since we are not able to set up our full node due to funds. As we have known, most of the DApp developers have the same embarrassing situation as us. After shocked by the accident of infura.io, we are willing to build a decentralized infrastructure service network, and we name it the Apron Network.\n\nWith Substrate 2.0 Framework, we are able to build a customized blockchain network easily, and we have the ability to integrate an API Gateway to manage blockchain API services in Apron Node. With the Apron Network, the blockchain node runners can provide Infrastructure service easily and get profit through this decentralized infrastructure services network.\n\n### Project Details\n\n#### Architecture  \n\nThe Apron Network consists of **Apron Node**, **Arpon Market Contracts**, **Decentralized API Market**, and the **Apron SDK**.\n\n![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Architecture.jpg)\n\n* The Apron Node is the customized chain node for the Apron network built with Substrate 2.0. Besides blockchain-related features, it contains the full features of an API Gateway in the early versions. In future versions, more infrastructure features will be added. It should be run together with the blockchain node and operate by blockchain node runners. For example,  the owner of the Ethereum Full node can set up an Apron Node to interact with his Ethereum Full node through RPC, then the DApp developer can retrieve the information of his Apron Node from the Apron Network, and call the API like calling an API with infura.io.\n* The Apron Market Contracts manage the API services information, the registration of API services, the registration of API users, and the billing of API usage. All the API information is stored in these contracts. The billing feature is implemented,  the API users have to pay **$ANT** to use these APIs and the API owners will get paid by **$ANT**. Everything is done through smart contracts. **$ANT** is the native token in Apron Network.\n* Decentralized API Market lists all the API services registered and available for developers from the data in smart contracts. DApp developers search the API services according to their needs and choose the one with the proper price.\n* The Apron SDK makes the use of Apron Network easier. DApp developers can integrate this SDK in their app to dynamic switch blockchain entry-point according to their needs.\n\n#### Substrate / Polkadot Integration\n\nThe Apron Network can be run as a para-chain of Polkadot, and also can be run as an independent chain apart from Polkadot.\n\nThe whole network is built on top of the Substate 2.0 Framework, and OCW (off-chain worker) is used to report API usage statistics on which the billing relies.\n\nAll the contracts will be implemented with Ink!, and the front-end of Decentralized API Market will be on top of polkadot.js.\n\n#### Scenarios\n\n* Node Runners  \n\n![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Node.jpg)\n\nThe above figure shows the role of each component act from the view of the blockchain node owner. To simply the scenario, we take an example. The para-chain node is running at the beginning, the Apron Node shown above is set up by the owner by staking some **$ANT**, and the Apron Node is accessible on the internet. The owner can configure Apron Node with the RPC entry point of the para-chain node, API access frequency, API access fee, and other limitations. After everything is configured, the Apron Node will be able to call the RPC interface of para-chain, and DApps will call the API through the Apron Node. The Apron Node calculates the API usage statistics of each caller, then stores this data through OCW (off-chain worker) on the chain for further billing.\n\n* DApp Developers  \n\n![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Usage.jpg)\n\nFor DApp developers, there are two components that will be used. One is the Decentralized API Market, the other one is the Apron SDK. Firstly, DApp developers search the API services in the API service repositories ( which is part of the Decentralized API Market) on the webpage. After finding the proper API service, the DApp developer will generate an API access key with the help of Apron Market Contracts. Finally, the DApp developer develops the DApp with the API access key to use the related API services. Of course, the DApp developer should pay the fee of using the API services according to the fee addressed by the API service provider.\n\n#### Interface Specification\n\nThe function provided by the pallet to report API usage statistics data is reportAPIUsage.\n\n```\n1. reportAPIUsage\n\n- desc: Report the API usage statistics from API Gateway data.\n- params: API Key\n- return: the calls number\n```\n\n### Ecosystem Fit\n\nInfura.io is the typical infrastructure services provider that is totally centralized.\n\nThe Apron Network provides exactly the same API services as infura.io but in a decentralized way, thanks to Substrate 2.0 Framework which let us only focused on the logic on top of blockchain rather than re-develop a new blockchain. In the future, the Apron Network will provide a decentralized infrastructure services network.\n\n## Team :busts_in_silhouette:\n\n### Team members\n\n* Toney - CTO/Project Lead  \n* Junjun - Full-stack Developer  \n\n### Contact\n\n- <https://apron.network>\n\n### Legal Structure\n\nNo Legal Entity\n\n### Team's experience\n\nToney\n\n* Over 13 years of experiences in Software Development\n* Software Engineer in MS\n* Mobile Game Developer  \n* Blockchain Game Developer  \n* The Chief Tech Officier of the team which wins TRON Accelerator 2018 Game Rewards  \n\nJunjun\n\n* Over 15 years of experiences in Software Development\n* Former Senior Software Engineer in Lucent\n* DApp Developer  \n* Full-stack Developer\n\n### Team Code Repos\n\n* Apron Labs: <https://github.com/apron-network>\n\n### Team LinkedIn Profiles\n\n* [Toney](https://www.linkedin.com/in/yi-sui-297a9223/)\n\n## Development Roadmap :nut_and_bolt:\n\n### Overview\n\n* **Total Estimated Duration:** 3 months\n* **Full-time equivalent (FTE):** 4\n* **Total Costs:** 0.73 BTC\n\n### Milestone 1 Example — Implement Substrate Modules\n\n* **Estimated Duration:** 3 months\n* **Full-time Equivalent (FTE):** 4\n* **Costs:** 0.73 BTC\n\nIn the first milestone, the features for the PoC will be implemented and tested by limited users.\n\nThe following components will be included:\n\n* Apron Node  \n* Apron Market Contracts  \n* Decentralized API Market / Front End\n* Apron SDK\n\n| Number | Deliverable | Specification |\n| ------------- | ------------- | ------------- |\n| 0a. | License | Apache 2.0 |\n| 0b. | Documentation | The documentation will be provided to show the whole achitecture of the Apron Network. |\n| 0c. | Testing Guide | The testing guide will be provided to test each component. |\n| 1. | Apron Node Repo | We will create a customized chain node with Substrate 2.0 Framework, it will contains the OCW module to report API usage statistics on-chain. |\n| 2. | Apron Market Contracts Repo | The contracts will be implemented with Ink!, and it will handle all the API services related functions such as 1) Staking tokens to register API service for node runner, 2) Register and unregister API service for node runner, 3) Define the price of API service for node runner, 4) Apply API service access key for node runner and DApp developers, 5) Billing System of the API usage for node runner and DApp developers, 6)Interface to integrate with a DAO to solve dispute between node runner and DApp developer|\n| 3. | Decentralized API Market / Front End Repo | It's a webpage working with Arpon Network, it's implemented based on polkadot.js as planned. |\n| 4. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |\n| 5. | Tutorial | We will write an tutorial about how to use Apron Network. |\n| 6. | Article | We will write an article published on media channels. |\n| 7. | DAO | A Apron DAO will be created to handle the governance of the Decentralized API Market. |\n\n## Future Plans\n\nCommunity Plan\n\n* Hire 3 more developers.  \n* Hire 1 marketing adviser.  \n* Recruit more contributors involved in our project.  \n* Join Polkadot related events.  \n* Bounty Program.  \n* Publish articles on media channels to expose the Apron Network.  \n\nDevelopment Plan\n\n* The Apron Network will run as a parachain of the Kusama.  \n* Support Kusama Node.  \n* In phase 1, our goal is to achieve all the designed functions.  \n* In phase 2, improve the stability of the Apron Network.\n* In phase 3, provide decentralized quick node services.\n* Finally, our goal is to provide the infrastructure services network.\n\n## Additional Information :heavy_plus_sign:\n\nCurrently we just start the first design of the Apron Network.\n\nThe project repo: <https://github.com/apron-network>\n",
    md_link:
      'https://raw.githubusercontent.com/shaurya-ATR940/Grants-Program_dummy/master/applications/Apron_Network.md',
    project_name: 'apron network',
    status: 'active',
    total_cost: {
      amount: '0.73',
      currency: 'btc'
    },
    total_duration: '3 months',
    team_id: '7d8a38a3-c620-49e7-b447-9a0dcceef7b1',
    level: '3',
    legal_structure: {
      registered_address: '',
      registered_legal_entity: ''
    },
    milestones: [],
    totalMilestones: 1,
    __v: 0
  }
];

export const MILESTONES: any[] = [
  {
    _id: {
      $oid: '64ca432c718d788969a5b2e0'
    },
    id: '8f276a33-a8e3-4cb2-9d4a-24da91724407',
    file_name: 'admeta_milestone_1.md',
    project_id: 'b7e15891-7d4b-4218-869b-e0da32191a6e',
    user_github_id: '',
    project_md_link:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/AdMeta.md',
    md_content:
      '# Milestone Delivery :mailbox:\n\n**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  \n\n* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/AdMeta.md\n* **Milestone Number:** 1\n\n\n**Deliverables**\n\n| Number | Deliverable | Link | Notes |\n| ------------- | ------------- | ------------- |------------- |\n| 0a. | License | [LICENSE](https://github.com/AdMetaNetwork/admeta/blob/main/LICENSE) | GPLv3 |\n| 0b. | Documentation | [Rust Docs](https://admetanetwork.github.io/admeta/), [AdMeta Documentation](https://docs.admeta.network/)| Rust docs are generated from the inline documentation, which can be also found in the source code. AdMeta documentation provides a guide to build and set up an AdMeta test network, and also there is a step-to-step guide for the AdMeta WebApp. | \n| 0c.  | Testing Guide\t| [Build and Test](https://github.com/AdMetaNetwork/admeta#getting-started), [Test Results in CI](https://github.com/AdMetaNetwork/admeta/actions/workflows/rust.yml), [WebApp Guide](https://docs.admeta.network/guides/how-to-use-admeta-webapp) | In the README we described a build and unit test guide of AdMeta node. Also, unit test execution is integrated in CI. For a functional related test, the most convenient way is to use our WebApp by following the WebApp guide provided.  |\n| 0d. | Docker | [Docker Image](https://hub.docker.com/repository/docker/h4n00/admeta) | |\n| 0e. | Article | [Introduce AdMeta](https://medium.com/@admeta/admeta-an-internet-advertising-revolution-cee26f3421e7) ||\n| 1. | Substrate module: ad\t| https://github.com/AdMetaNetwork/admeta/tree/d133bce5adaa41dc2acffa8f10b63928d22751b4/pallets/ad |  |\n| 2. | Substrate module: user mock\t| https://github.com/AdMetaNetwork/admeta/tree/d133bce5adaa41dc2acffa8f10b63928d22751b4/pallets/user | |\n| 3. | Substrate solo chain\t| https://github.com/AdMetaNetwork/admeta/tree/d133bce5adaa41dc2acffa8f10b63928d22751b4/node https://github.com/AdMetaNetwork/admeta/tree/d133bce5adaa41dc2acffa8f10b63928d22751b4/runtime | |\n| 4. | AdMeta WebApp | https://github.com/AdMetaNetwork/admeta-webapp/tree/cb198db390708e47b1a3fce2b36769d01509e890 | |\n\n\n\n\n**Additional Information**\n\nPlease note that the deployed Webapp https://app.testnet.admeta.network/ is based on the latest version, while the provided code commit is from an older version. There could be inconsistency between these two versions.\n\n',
    status: 'complete',
    cost: '12,000 usd',
    milestoneNo: 1,
    merged_at: '',
    __v: 0
  },
  {
    _id: {
      $oid: '64ca432c718d788969a5b2e1'
    },
    id: '60d52d97-00cd-41a4-831b-802fbb6962b1',
    file_name: 'Afloat_Milestone1.md',
    project_id: '07c49e56-9a1e-444c-9a5b-a65d723ba757',
    user_github_id: '',
    project_md_link:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/Afloat.md',
    md_content:
      "# Milestone Delivery :mailbox:\n\n**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone, and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  \n\n* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Afloat.md\n* **Milestone Number:** 1\n\n**Context** (optional)\n\nRegarding the user onboarding and KYC process, we anticipated using the identity pallet to store crucial information, however, modifying the user identity causes the current judgments to be reset. Therefore we opted for storing the necessary information (which results from a developed privacy solution) within a custom pallet storage, along with some other items to describe pivotal data relations to keep it more persistant.\n\nA running instance of the code can be found [here](http://34.107.153.230/)\n\n**Deliverables**\n| Number | Deliverable | Link | Notes |\n| ------------- | ------------- | ------------- |------------- |\n| 0a. | License | https://github.com/hashed-io/hashed-substrate/blob/main/LICENSE | MIT |\n| 0b. | Documentation | https://github.com/hashed-io/hashed-marketplaces-ui <br> https://github.com/hashed-io/hashed-substrate<br>  https://github.com/hashed-io/hashed-private-server <br> https://github.com/hashed-io/hashed-private-client-api | The code has inline documentation and each repository has a detailed README with build, run, and test instructions. |\n| 0c. | Testing | https://github.com/hashed-io/hashed-substrate/blob/main/pallets/gated-marketplace/src/tests.rs | The test is built directly into the Rust project |\n| 0d. | Video | [English](https://drive.google.com/file/d/1Gzz1scZt4LSBPrQ30XXZzclhAXjjdUHJ/view?usp=sharing) and [Spanish](https://drive.google.com/file/d/12HGvMEMDU5NMRXcEa8m3gkuqjwO3iONV/view?usp=sharing) versions | 14 minute video demonstrating the deliverables |\n| 0e. | Article | [English](https://docs.google.com/document/d/1bDswb619nkdL0xt41GEJEtyLcCOc3LO-M-dB2RdDr9s/edit?usp=sharing) and [Spanish](https://docs.google.com/document/d/1DNHgONQrZfpG4f0f79n6pS9h9jUQQDW52OlWCw1TiJA/edit?usp=sharing) versions | Afloat's and general use case of gated Marketplaces |\n| 1. | Set Profile and Upload KYC Materials | https://github.com/hashed-io/hashed-private-server https://github.com/hashed-io/hashed-private-client-api  | Users can upload files visible to themselves, a custodian, and the Marketplace owner. Covered in the video. |\n| 2. | KYC Admin | https://github.com/hashed-io/hashed-marketplaces-ui https://github.com/hashed-io/hashed-substrate | Marketplace owner can approve an applicant. Covered in Video.|\n| 3. | Slides | https://drive.google.com/file/d/1_YgnWkFoFXhjG1XdSFGa1F_Vbz1HkwA8/view?usp=sharing | Presentation slides used by Louise W. Reed at CPA conferences to address why Afloat sees value in the Polkadot’s ecosystem| \n\n**Repositories** \n(all MIT licensed)\n| Component | Repo | Language |\n| -----: | ----------- | ------- |\n| Marketplace UI | https://github.com/hashed-io/hashed-marketplaces-ui | Quasar/Vue |\n| Marketplace pallets | https://github.com/hashed-io/hashed-substrate | Rust |\n| Confidential Documents Server | https://github.com/hashed-io/hashed-private-server | Javascript |\n| Confidential Documents API | https://github.com/hashed-io/hashed-private-client-api | Javascript |\n\n\n\n**Additional Information**\n\nWe will create more extensive and polished end-user documentation as we continue delivering the Milestones.\n",
    status: 'complete',
    cost: '17,675 usd',
    milestoneNo: 1,
    merged_at: '',
    __v: 0
  },
  {
    _id: {
      $oid: '64ca432c718d788969a5b2e2'
    },
    id: 'de0e0a1d-e27a-4d76-8c3b-5a1cb25b4dae',
    file_name: 'Afloat_Milestone2.md',
    project_id: '07c49e56-9a1e-444c-9a5b-a65d723ba757',
    user_github_id: '',
    project_md_link:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/Afloat.md',
    md_content:
      "# Milestone Delivery :mailbox:\n\n**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone, and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  \n\n* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Afloat.md\n* **Milestone Number:** 2\n\n**Context** (optional)\n\nA running instance of the code can be found [here](https://hashed-portal-dev.hashed.systems/login)\n\n**Deliverables**\n\n| Number | Deliverable | Link | Notes |\n| -----: | ----------- | ------------- | ------------------- |\n| 0a. | License | https://github.com/hashed-io/hashed-substrate/blob/main/LICENSE | MIT |\n| 0b. | Documentation | https://github.com/hashed-io/hashed-marketplaces-ui <br> https://github.com/hashed-io/hashed-substrate<br>  https://github.com/hashed-io/hashed-private-server <br> https://github.com/hashed-io/hashed-private-client-api | The code has inline documentation and each repository has a detailed README with build, run, and test instructions. |\n| 0c. | Testing | [Github repository](https://github.com/hashed-io/hashed-substrate/blob/main/pallets/gated-marketplace/src/tests.rs) | The test is built directly into the Rust project |\n| 0d. | Video | [Video](https://drive.google.com/file/d/1tpmsaml4RmKbPb2PB5D0_32y_NcVDSZ7/view?usp=share_link) | 8 minute video demonstrating the deliverables |\n| 0e. | Article | [English](https://docs.google.com/document/d/1bDswb619nkdL0xt41GEJEtyLcCOc3LO-M-dB2RdDr9s/edit?usp=sharing) and [Spanish](https://docs.google.com/document/d/1DNHgONQrZfpG4f0f79n6pS9h9jUQQDW52OlWCw1TiJA/edit?usp=sharing) versions | Afloat's and general use case of gated Marketplaces |\n| 1. | Originate Tax Credit | [JS library](https://github.com/hashed-io/afloat-client-api/blob/master/src/model/polkadot-pallets/afloatApi.js#L34) [Pallet](https://github.com/hashed-io/hashed-substrate/blob/develop/pallets/fruniques/src/lib.rs#L177) | This video provides a demonstration and explainer for how new tax credit NFTs are being originated: [Youtube Video](https://youtu.be/dpFk2d0UXYc) | \n| 2. | Upload Confidential Documents | [Video](https://drive.google.com/file/d/1yvCiuJ7P5xTPtTwCLZyNWCSez4NBUGfP/view?usp=sharing) showing NFT functionality specific to the tax credits implementation [JS library](https://github.com/hashed-io/hashed-confidential-docs-client-api/blob/015b59837eb8c0117fecb0c6323053d605a6f5fd/src/model/OwnedData.js#L57) | This feature allows for NFT originators to upload encrypted files attached to tax credits. The files will be accessible only by the user and the application administrator. This is also explained in the [video](https://youtu.be/dpFk2d0UXYc) | \n| 3. | Tax Credit verification | An example of state tax credit verification is shown in the [video](https://drive.google.com/file/d/1yvCiuJ7P5xTPtTwCLZyNWCSez4NBUGfP/view?usp=sharing) from the previous point of this deliverable (2.) at 4m12s | This shows a tax credit verification at the state level. Other verifications can be configured. |\n| 4. | List for Sale | [Enlist NFT for sale](https://github.com/hashed-io/hashed-substrate/blob/00135e71f7bed81cf9f8dbd902b989bd19393f7e/pallets/gated-marketplace/src/lib.rs#L549) | Ability for Tax Credit (NFT) owners to assign a price and list it for sale.| \n\n**Repositories** \n(all MIT licensed)\n| Component | Repo | Language |\n| -----: | ----------- | ------- |\n| Afloat Client API | https://github.com/hashed-io/afloat-client-api | Javascript |\n| Marketplace UI | https://github.com/hashed-io/hashed-network-portal-ui | Quasar/Vue |\n| Marketplace pallets | https://github.com/hashed-io/hashed-substrate/tree/develop/pallets/gated-marketplace | Rust |\n| Confidential Documents Server | https://github.com/hashed-io/hashed-private-server | Javascript |\n| Confidential Documents API | https://github.com/hashed-io/hashed-confidential-docs-client-api | Javascript |\n\n\n\n**Additional Information**\n\n\n",
    status: 'complete',
    cost: '14,140 usd',
    milestoneNo: 2,
    merged_at: '',
    __v: 0
  },
  {
    _id: {
      $oid: '64ca432c718d788969a5b2e3'
    },
    id: 'b08b19c8-4b1a-4686-b548-57c955e78fff',
    file_name: 'Afloat_Milestone3.md',
    project_id: '07c49e56-9a1e-444c-9a5b-a65d723ba757',
    user_github_id: '',
    project_md_link:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/Afloat.md',
    md_content:
      "<!-- @format -->\n\n# Milestone Delivery :mailbox:\n\n**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone, and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**\n\n- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Afloat.md\n- **Milestone Number:** 3\n\n**Context** (optional)\n\nThis is the third milestone of Afloat's grant. It covers ordering fractional tax credits, confirming and settling the order.\n\nA running instance of the code can be found [here](https://hashed-portal-dev.hashed.systems/login)\n\n**Deliverables**\n\n| Number | Deliverable            | Link                                                                                                                                                                                                                                                                                                                                                                                                                      | Notes                                                                                                               |\n| -----: | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |\n|    0a. | License                | https://github.com/hashed-io/hashed-substrate/blob/main/LICENSE                                                                                                                                                                                                                                                                                                                                                           | MIT                                                                                                                 |\n|    0b. | Documentation          | https://github.com/hashed-io/hashed-marketplaces-ui <br> https://github.com/hashed-io/hashed-substrate <br>[Marketplace](https://github.com/hashed-io/hashed-substrate/tree/main/pallets/gated-marketplace)<br> [Fruniques](https://github.com/hashed-io/hashed-substrate/tree/main/pallets/fruniques)<br> https://github.com/hashed-io/hashed-private-server <br> https://github.com/hashed-io/hashed-private-client-api | The code has inline documentation and each repository has a detailed README with build, run, and test instructions. |\n|    0c. | Testing                | [Github repository](https://github.com/hashed-io/hashed-substrate/blob/main/pallets/gated-marketplace/src/tests.rs)                                                                                                                                                                                                                                                                                                       | The test is built directly into the Rust project                                                                    |\n|    0d. | Video                  | [English](https://drive.google.com/file/d/1YtlNNsmhpxzKgVTLbaMXC7unRzfVLNbE/view?usp=share_link) and [Spanish](https://drive.google.com/file/d/1D9LQ2KCDVWGbuTZ7_Oo-QYvOqNg9PUH3/view?usp=share_link) versions                                                                                                                                                                                                            | English and Spanish videos explaining the functionality on this Milestone, as well as some details on how to run it.                                                                                                                 |\n|    0e. | Article                | [English](https://docs.google.com/document/d/1clgBMWQQXGqZd6p7P7CmZwEo0YaM5WRMZLISOn3FuNI/edit?usp=sharing) and [Spanish](https://docs.google.com/document/d/1AB-2sKU8GHO-yLZOQ-sn0MOlsCABPXG6gfRG61BtRXc/edit?usp=sharing) versions                                                                                                                                                                                      | English and Spanish articles explaining the math of the fractional NFTs and the business advatanges                                                                                                                 |\n|     1. | Order Part of an NFT   | [Gated Markeplace business documentation.](https://github.com/hashed-io/hashed-substrate/blob/develop/docs/pallets-review/gated-marketplace.md#order-part-of-an-nft) The code can be found in the repositories on the last section.                                                                                                                                                                                                                                                                             |                                                                                                                     |\n|     2. | Complete/Confirm Order | [Gated Markeplace business documentation.](https://github.com/hashed-io/hashed-substrate/blob/develop/docs/pallets-review/gated-marketplace.md#completeconfirm-order) The code can be found in the repositories on the last section.                                                                                                                                                                                                                                                                                  |                                                                                                                     |                                                                                                                     |\n|     3. | Order Settlement       | [Gated Markeplace business documentation.](https://github.com/hashed-io/hashed-substrate/blob/develop/docs/pallets-review/gated-marketplace.md#order-settlement) The code can be found in the repositories on the last section.                                                                                                                                                                                                                                                                                  |                                                                                                                     |                                                                                                                     |\n\n**Repositories**\n(all MIT licensed)\n| Component | Repo | Language |\n| -----: | ----------- | ------- |\n| Afloat Client API | https://github.com/hashed-io/afloat-client-api | Javascript |\n| Marketplace UI | https://github.com/hashed-io/hashed-network-portal-ui | Quasar/Vue |\n| Marketplace pallet | https://github.com/hashed-io/hashed-substrate/tree/develop/pallets/gated-marketplace | Rust |\n| Fruniques pallet | https://github.com/hashed-io/hashed-substrate/tree/develop/pallets/fruniques | Rust |\n| Confidential Documents Server | https://github.com/hashed-io/hashed-private-server | Javascript |\n| Confidential Documents API | https://github.com/hashed-io/hashed-confidential-docs-client-api | Javascript |\n| Faucet Server | https://github.com/hashed-io/faucet-server | Javascript |\n",
    status: 'complete',
    cost: '7,070 usd',
    milestoneNo: 3,
    merged_at: '',
    __v: 0
  },
  {
    _id: {
      $oid: '64ca432c718d788969a5b2e4'
    },
    id: 'ed5b5728-f313-433a-9c44-cc9d71e44de9',
    file_name: 'Afloat_Milestone4.md',
    project_id: '07c49e56-9a1e-444c-9a5b-a65d723ba757',
    user_github_id: '',
    project_md_link:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/Afloat.md',
    md_content:
      "<!-- @format -->\n\n# Milestone Delivery :mailbox:\n\n**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone, and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**\n\n- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Afloat.md\n- **Milestone Number:** 4\n\n**Context** (optional)\n\nThis is the third milestone of Afloat's grant. It covers ordering fractional tax credits, confirming and settling the order.\n\nA running instance of the code can be found [here](https://hashed-portal-dev.hashed.systems/login)\n\n**Deliverables**\n\n| Number | Deliverable            | Link                                                                                                                                                                                                                                                                                                                                                                                                                      | Notes                                                                                                               |\n| -----: | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |\n|    0a. | License                | https://github.com/hashed-io/hashed-substrate/blob/main/LICENSE                                                                                                                                                                                                                                                                                                                                                           | MIT                                                                                                                 |\n|    0b. | Documentation          | https://github.com/hashed-io/hashed-network-portal-ui <br> https://github.com/hashed-io/hashed-substrate <br>[Marketplace](https://github.com/hashed-io/hashed-substrate/tree/main/pallets/gated-marketplace)<br> [Fruniques](https://github.com/hashed-io/hashed-substrate/tree/main/pallets/fruniques)<br> https://github.com/hashed-io/hashed-private-server <br> https://github.com/hashed-io/hashed-private-client-api | The code has inline documentation and each repository has a detailed README with build, run, and test instructions. |\n|    0c. | Testing                | [Github repository](https://github.com/hashed-io/hashed-substrate/blob/main/pallets/gated-marketplace/src/tests.rs)                                                                                                                                                                                                                                                                                                       | The test is built directly into the Rust project                                                                    |\n|    0d. | Video                  | [English](https://drive.google.com/file/d/1GGBJORWcM9S3wkxrPJSjD77PZl_qXuMm/view) and [Spanish](https://drive.google.com/file/d/1sFH-fcm8Mfa-2-boJ35egd8AWByZmo-9/view) versions                                                                                                                                                                                                            | English and Spanish videos explaining the functionality on this Milestone, as well as some details on how to run it.                                                                                                                 |\n|    0e. | Article                | [English](https://docs.google.com/document/d/1ybvHORc4SpFpTbVw97emFKPJeSdYPSXjsHKYnZ33s6U/view) and [Spanish](https://docs.google.com/document/d/1OJFNv0E7u93ljTYEuss_X5Xtp3mB-rxJ7TQ1pKzzoLU/view) versions                                                                                                                                                                                      | English and Spanish articles explaining the math of the fractional NFTs and the business advatanges                                                                                                                 |\n|     1. | Approve Redemption Specialists     | [Documentation](https://github.com/hashed-io/hashed-substrate/blob/develop/docs/pallets-review/gated-marketplace.md#approve-redemption-specialists) |The redemption specialist role is currently part of the administrator role to reflect Afloat's current workflow. Step shown in video|  \n|     2. | Request Redemption                 | [Documentation](https://github.com/hashed-io/hashed-substrate/blob/develop/docs/pallets-review/gated-marketplace.md#request-redemption) | Step shown in video.|  \n|     3. | View materials and Redeem          | |The tax credit documentation is visible and the workflow is shown in the video.|   \n|     4. | Asset Manager\t                    | [Documentation](https://github.com/hashed-io/hashed-substrate/blob/develop/docs/pallets-review/gated-marketplace.md#asset-manager) |The asset manager role is currently part of the administrator role to reflect Afloat's current workflow.  Step shown in video.|  \n|     5. | Launch Materials\t                  | | [Louise](https://www.vscpa.com/people/louise-reed) is giving a series of talks that started January 12th, sponsored by 4 CPA societies (Indiana, Georgia, Michigan and Virginia) called [From Bitcoin to Parachains: How One Strand of the Blockchain Industry is Evolving](https://www.micpa.org/cpe/store/course-detail?ProductId=141530). <br> <br> Louise also gave the \"[Roller Coaster of Media Reporting on Blockchain and Cryptocurrency](https://www.vscpa.com/sites/default/files/resources/Session%202C%20-%20The%20Roller%20Coaster%20of%20Media%20Reporting%20on%20Blockchain%20and%20Cryptocurrency.pdf)\" talk in September and November 2022, supported by the Virginia Society of CPAs with Virginia Technological Insitute. The videos from the milestone will be used to show the general functionality.|  \n\n\n\n**Repositories**\n(all MIT licensed)\n| Component | Repo | Language |\n| -----: | ----------- | ------- |\n| Afloat Client API | https://github.com/hashed-io/afloat-client-api | Javascript |\n| Marketplace UI | https://github.com/hashed-io/hashed-network-portal-ui | Quasar/Vue |\n| Marketplace pallet | https://github.com/hashed-io/hashed-substrate/tree/develop/pallets/gated-marketplace | Rust |\n| Fruniques pallet | https://github.com/hashed-io/hashed-substrate/tree/develop/pallets/fruniques | Rust |\n| Confidential Documents Server | https://github.com/hashed-io/hashed-private-server | Javascript |\n| Confidential Documents API | https://github.com/hashed-io/hashed-confidential-docs-client-api | Javascript |\n| Faucet Server | https://github.com/hashed-io/faucet-server | Javascript |\n",
    status: 'complete',
    cost: '7,070 usd',
    milestoneNo: 4,
    merged_at: '',
    __v: 0
  },
  {
    _id: {
      $oid: '64ca432c718d788969a5b2e5'
    },
    id: 'fbb571be-a340-4853-8477-04c9f06a232a',
    file_name: 'AlgoCash-Milestone1.md',
    project_id: '78ca725c-c596-4919-ba69-79c1a3892b3b',
    user_github_id: '',
    project_md_link:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/AlgoCash.md',
    md_content:
      '# Milestone Delivery :mailbox:\n\n**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSdSqj2vYjvpiIytkjcc40Pwl0Eg76WGUAq5L9e8eFuuOegmLw/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  \n\n* **Application Document:** [Algo Cash](https://github.com/w3f/Open-Grants-Program/blob/master/applications/AlgoCash.md)\n* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/217\n* **Milestone Number:** 1\n\n\n\n| Number | Deliverable | Link | Notes |\n| ------------- | ------------- | ------------- |------------- |\n| 1. | Source code|https://github.com/ReserveLabs/AlgoCash|Token mint, Bond purchase and redemption are deliverable functions in this milestone.| \n| 2.  | License|https://github.com/ReserveLabs/AlgoCash/blob/main/LICENSE| Apache 2.0 |\n| 3.  | Documentation|https://github.com/ReserveLabs/AlgoCash/blob/main/README.md| Brief Intro of Algo Cash, code structure and how to deploy the contracts.| \n| 4.  | Tests|https://github.com/ReserveLabs/AlgoCash/tree/main/tests|Tests for Distribution, Treasury and Boradroom|   \n| 5.  | Demo vidoe|https://youtu.be/RalxYnx0Go8| Demo for ALB and ALC working woth Treasury.| \n| 6.  |Dock Image| http://dl.veim.cn/download/algocash/europa-algocash.tar.gz|Please kindly follow the [README](https://github.com/ReserveLabs/AlgoCash/blob/main/README.md#docker) to run the docker.|\n',
    status: 'complete',
    cost: '5,000 dai',
    milestoneNo: 1,
    merged_at: '',
    __v: 0
  },
  {
    _id: {
      $oid: '64ca432c718d788969a5b2e6'
    },
    id: '7b60be90-cbdb-4725-aba4-c317c8a450ed',
    file_name: 'anchor_milestone_1.md',
    project_id: 'ff1fd744-f93a-424a-a129-4d2ef9d20401',
    user_github_id: '',
    project_md_link:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/Anchor.md',
    md_content:
      '# Milestone Delivery :mailbox:\n\n**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  \n\n* **Application Document:** [https://github.com/w3f/Grants-Program/blob/master/applications/Anchor.md](https://github.com/w3f/Grants-Program/blob/master/applications/Anchor.md) \n* **Milestone Number:** 1\n\n**Context** (optional)\n\n* Anchor pallet, unit test code and dockerfile for testing , README.\n\n* Anchor.js, the JS lib and Playground base on React. Test network is on line too.\n\n**Deliverables**\n\n| Number | Deliverable | Link | Notes |\n| ------------- | ------------- | ------------- |------------- |\n| 0a. | License | [https://github.com/ff13dfly/Anchor/blob/main/LICENSE-APACHE2](https://github.com/ff13dfly/Anchor/blob/main/LICENSE-APACHE2) [https://github.com/ff13dfly/Anchor/blob/main/LICENSE-GPL3](https://github.com/ff13dfly/Anchor/blob/main/LICENSE-GPL3) | |\n| 0b. | Documentation | [https://github.com/ff13dfly/Anchor/blob/main/README.md](https://github.com/ff13dfly/Anchor/blob/main/README.md) [https://github.com/ff13dfly/Anchor/blob/main/js/README.md](https://github.com/ff13dfly/Anchor/blob/main/js/README.md) | |\n| 0c. | Testing Guide | [https://github.com/ff13dfly/Anchor/blob/main/frame/anchor/README.md](https://github.com/ff13dfly/Anchor/blob/main/frame/anchor/README.md) [https://github.com/ff13dfly/Anchor/blob/main/js/playground/README.md](https://github.com/ff13dfly/Anchor/blob/main/js/playground/README.md) | | |\n| 0d. | Docker |[https://github.com/ff13dfly/Anchor/tree/main/docker](https://github.com/ff13dfly/Anchor/tree/main/docker)| |\n| 0e. | Anchor pallet |[https://github.com/ff13dfly/Anchor](https://github.com/ff13dfly/Anchor)| Bug fix and code improvement |\n| 0f. | Anchor.js | [https://github.com/ff13dfly/Anchor/tree/main/js/playground](https://github.com/ff13dfly/Anchor/tree/main/js/playground) [https://github.com/ff13dfly/Anchor/tree/main/js/test](https://github.com/ff13dfly/Anchor/tree/main/js/test)| There is also a live playground here [https://playground.metanchor.net](https://playground.metanchor.net). | |\n\n**Additional Information**\n\n* About the dockerfile, I can run it and see the log in docker desktop, but I still have problem to access it. Normally, I tested the functions on local bin, no issues for me.\n\n* I have released the binrary substrate with anchor pallet. Hope to help, it is easy to test.',
    status: 'complete',
    cost: '6,000 usdt',
    milestoneNo: 1,
    merged_at: '',
    __v: 0
  },
  {
    _id: {
      $oid: '64ca432c718d788969a5b2e7'
    },
    id: '8e7c3b22-419d-43fa-9b67-6b2fa64bca19',
    file_name: 'ArtZero_InkWhale_Milestone_1.md',
    project_id: '7a393fe8-ae2b-4ec0-9a7d-d12cc40354ee',
    user_github_id: '',
    project_md_link:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/ArtZero_InkWhale.md',
    md_content:
      "# Milestone Delivery :mailbox:\n\n> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones.\n>\n> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.\n\n**The [invoice form :pencil:](https://forms.gle/LSRr7PCjBpEbKGh89) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  \n\n* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ArtZero_InkWhale.md\n* **Milestone Number:** 1\n\n**Context** (optional)\n\n**Deliverables**\n\n| Number | Deliverable | Link | Notes |\n| ------------- | ------------- | ------------- |------------- |\n| 0a.    | License            | https://github.com/ArtZero-io/Contracts/blob/feature/ink-4-version/LICENSE  | |\n| 0b.    | Documentation      | Official document is at https://docs.artzero.io/ Technical documents are at https://docs.google.com/document/d/1QWJW2YAFXcD_X-xvwcTee_W9Gfn2GXNdKYdoe0m7iv8/edit# and https://docs.google.com/document/d/1bPq9aFMaaVgKgsYWG3K4APubRK33OloY4_gHM3c8wo0/edit | |\n| 0c.    | Testing      | Contract Tests can be found at https://github.com/ArtZero-io/Contracts/tree/feature/ink-4-version/Azero_Contracts/tests Front-end Test: https://github.com/ArtZero-io/frontend-react/tree/ink4-upgrade/docs Backend API Test: https://github.com/ArtZero-io/backend/tree/main/docs| |\n| 0d.    | Article/Tutorial   | Several articles are published at https://medium.com/@artzero_io | |\n| 1. | Smart contract Development | Code can be found in https://github.com/ArtZero-io/Contracts branch feature/ink-4-version | |\n| 2. | Backend | Backend code is at https://github.com/ArtZero-io/backend and handles the following tasks: Monitor NFT bids in the queue and update Bid table in the database; Cache Images from IPFS to CloudFlare Image; Cache NFT Metadata to local database; Monitor NFT Collection changes and update the database; Monitor NFT Information and update the database; Telegram bot to alert system operators: queue length and access attempt and work load. | |\n| 3. | Frontend | Our front-end demo can be seen at https://alephzero.artzero.io/ for AlephZero network and https://shibuya.artzero.io/ for Shibuya (Astar testnet). The git repo is at https://github.com/ArtZero-io/frontend-react branch ink4-upgrade | |\n\n**Additional Information**\n",
    status: 'complete',
    cost: '15,000 usd',
    milestoneNo: 1,
    merged_at: '',
    __v: 0
  },
  {
    _id: {
      $oid: '64ca432c718d788969a5b2e8'
    },
    id: '3b61b9a6-527d-4c19-a286-20519918048f',
    file_name: 'ArtZero_InkWhale_Milestone_2.md',
    project_id: '7a393fe8-ae2b-4ec0-9a7d-d12cc40354ee',
    user_github_id: '',
    project_md_link:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/ArtZero_InkWhale.md',
    md_content:
      '# Milestone Delivery :mailbox:\n\n**The [invoice form :pencil:](https://forms.gle/LSRr7PCjBpEbKGh89) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  \n\n* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ArtZero_InkWhale.md\n* **Milestone Number:** 2\n\n**Context** (optional)\nInk Whale token is now INW instead of WAL\n\n**Deliverables**\nMilestone 2  — Ink Whale Staking and Yield Farming Platform Development\n\n| Number | Deliverable | Link | Notes |\n| ------------- | ------------- | ------------- |------------- |\n| 0a.    | License            | https://github.com/InkWhale-net/contracts/blob/main/LICENSE  | |\n| 0b.    | Documentation      | Official Document is at https://docs.inkwhale.net/ Technical documents are at https://github.com/InkWhale-net/backend/blob/main/docs/apis.md and https://github.com/InkWhale-net/contracts/blob/main/inkwhale_contract/docs/technical_doc.md | |\n| 0c.    | Testing Guide      | https://github.com/InkWhale-net/contracts/tree/main/tests/readme.md | |\n| 0d.    | Article/Tutorial   | https://medium.com/@artzero_io/aztzeros-nft-yield-farming-pool-guide-for-creators-c20057fa0d89 | |\n| 1. | Smart Contract Development | https://github.com/InkWhale-net/contracts/blob/main/readme.md Completed following functions: create PSP22 token, create a staking pool, create NFT yield farm, create token yield farm, add rewards to pool, remove rewards from pool, claim reward from pool. We have to create 9 different contracts; INW token contract that allows public minting and fixed total supply; General psp22 token contract and psp22 token generator contract; Pool Contract and Pool Generator Contract; NFT Farming Contract and NFT Farming Generator Contract; LP Farming Contract and LP Farming Generator Contract. | |\n| 2. | Backend | https://github.com/InkWhale-net/backend follow readme.md to run the backend service | |\n| 3. | Frontend | The front-end demo can be seen at https://testnet.inkwhale.net The code repo is at https://github.com/InkWhale-net/frontend branch ink4. This front-end uses our latest design. | |\n\n**Additional Information**\n',
    status: 'complete',
    cost: '15,000 usd',
    milestoneNo: 2,
    merged_at: '',
    __v: 0
  },
  {
    _id: {
      $oid: '64ca432c718d788969a5b2e9'
    },
    id: 'd1dfc25a-1a55-4206-a68c-2d58d1b875b7',
    file_name: 'Awesome-Polka-1.md',
    project_id: '3f5b6b6d-3341-4e2c-b941-a1f6835cb7af',
    user_github_id: '',
    project_md_link:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/Awesome-Polka.md',
    md_content:
      '# Milestone Delivery :mailbox:\n\n**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  \n\n* **Application Document:** https://github.com/w3f/Grants-Program/tree/master/applications/Awesome-Polka.md\n* **Milestone Number:** 1\n\n**Context**\nThis milestone includes the functionality of the public part of the platform and the design of the project owner dashboard, as stated in the contract, normal users and project owners can use the platform.\n\n**Deliverables**\n\n| Number | Deliverable | Link | Notes |\n| ------------- | ------------- | ------------- |------------- |\n| **0a.** | License | [MIT](https://github.com/tolgayayci/awesome-polka/blob/dev/LICENSE) | License Added to All Branches |\n| **0b.** | Documentation | [Awesome Polka Docs](https://docs.awesomepolka.org/docs/awesome-polka/getting-started) | Base documentation provided, in near time this will be enhanced with examples and use cases. |\n| **0c.** | Testing and Testing Guide |  [Guide](https://docs.awesomepolka.org/docs/technical-details/testing) | API Tests & End to End tests are completed with a few users, also in this link you can see form validation tests. For future, hooks and api tests will be included in this page. |\n| **0e.** | Article | [Documentation Includes](https://docs.awesomepolka.org/docs/awesome-polka/getting-started) | Documentation like a kind of article about how to use this platform. |\n| **1.** | UI & UX Development | **Home Page:** [Link](https://awesomepolka.org) <br /><br /> **Projects Page:**  [Link](https://awesomepolka.org/projects)</br></br>**Project Detail Page:**  [Link](https://awesomepolka.org/projects/awesome-polka)<br /></br>**Articles Page:**  [Link](https://awesomepolka.org/articles)<br /></br>**Article Detail Page:**  [Link](https://awesomepolka.org/articles/09885b15-3a16-478f-aa2f-d6929d2f05c8)<br /></br>**Ranking Page:** [Link](https://awesomepolka.org/ranking)</br></br> **Learn Page:** [Link](https://awesomepolka.org/learn)</br></br> **UX Improvements & Testing:**  [Link](https://docs.awesomepolka.org/docs/technical-details/testing)| All pages that designed for milestones are completed, you can visit links to verify, ux improvements will be continue in future stages. | ... |\n| *2.* | Project Owner Dashboard  | [Dashboard Link](https://awesomepolka.org/dashboard/project) | You **must have an account** to use this dashboard. If you have an account, a "Dashboard" link appears in the footer of the site and you can access the dashboard by clicking this link. To request an account, click on the "Submit Project" on the main page or directly [this link](https://ts6prh04a2p.typeform.com/to/L4jpfJKl), after your membership is defined, you will receive an e-mail and you can start testing the dashboard.</br>|\n\n**Additional Information**\nAlthough milestones of the project have been completed, it will continue to be actively developed, I will publish a report stating its status in the next two quarters.\n\nI would like to offer a more detailed infrastructure for testing, but you can test it by using the platform in the easiest way, while everyone can view the public part, I will authorize you when you fill out the form for the project owner dashboard, so you can try this dashboard.\n\nApi key of many platforms such as algolia, aws, thirdweb, coinbase cloud is required to set up a test infrastructure from start to finish, so a partial test report has been published to make things easier.\n\nMain domain currently lists dev branch but after approval I will push a clean main branch and we will start from scratch with new projects, so you can tamper with it as you wish, these changes will not be visible in prod version.\n',
    status: 'complete',
    cost: '',
    milestoneNo: 1,
    merged_at: '',
    __v: 0
  }
];

export const TeamsData: any = [
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c5e'
    },
    id: '4933b995-428b-4882-9f23-92ce69182a02',
    name: 'cess lab',
    members: ['Joseph Li', 'Jinghong Zeng'],
    projects: [
      {
        projectId: '189930db-0cc3-4c8e-9268-1676d5c598fd',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c5f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c60'
    },
    id: '8a432d32-005f-4a80-9215-a91416e762dd',
    name: 'collective intelligence labs',
    members: [
      '👨‍💻 Alex Shkor - Architect, Developer, Team Lead',
      '👨‍💻 Alexey Kulik - Architect, Developer',
      '👩‍💼 Julia Shinkevich - Project Manager',
      '🧑‍💼 Max Slyzkoukh - Product Manager',
      '👨‍🔧 Yahor Tsaryk - Engineer'
    ],
    projects: [
      {
        projectId: '83c8b8fc-6286-45b3-876d-065d25a69b95',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c61'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c62'
    },
    id: 'ae7afabd-0b07-46f8-b431-4014f72b7d93',
    name: 'topmonks',
    members: [
      'Antonina Nesmelova - developer',
      'Richard Jedlička - developer',
      'Radek Jakl - designer',
      'Jan Lopusek - project manager'
    ],
    projects: [
      {
        projectId: '812990ab-9baa-4519-a1f4-ae60beb7bfa2',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c63'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c64'
    },
    id: '75c899eb-22f7-441f-acae-329dc10e2491',
    name: '',
    members: [],
    projects: [
      {
        projectId: '2a071dc9-0812-439d-a5ad-7730c3fed0bc',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c65'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c66'
    },
    id: 'b8061ee0-0b58-4408-9586-4efd2519ae41',
    name: 'taiwan research-based biopharmaceutical manufacturers association',
    members: [
      'Jacob Lee, Team Lead',
      'Brady Liu, Project Tech Lead',
      'Dr. Nicky Liu, Project Manager',
      'Carol Cheng, Regulation and compliance'
    ],
    projects: [
      {
        projectId: 'f61552da-de5f-48b6-8ce5-cc2df9cdc3b1',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c67'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c68'
    },
    id: 'ab3ffdbd-a53a-4d5e-a94e-3a3ddc5f5af3',
    name: '',
    members: [
      'Qiuye, team leader, PhD in Economics, major in Macroeconomics including currency, finance and exchange rates. Mainly focuses on cryptocurrency and is committed to exploring the fundamental changes that cryptocurrency brings to traditional economic theories.'
    ],
    projects: [
      {
        projectId: 'c351c21a-f020-4145-9a94-e8e17da03f38',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c69'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c6a'
    },
    id: '03b6d737-451d-4393-93ca-fd7fdee9295e',
    name: 'composable finance ltd',
    members: [
      'Name of team leader: Hussein Ait-Lahcen',
      'Names of team members: Cor Pruijs, Abduallah Eryuzlu'
    ],
    projects: [
      {
        projectId: 'bf6b1a21-e33c-4065-a03c-6e67e0c5c255',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c6b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c6c'
    },
    id: '6be338fd-00a6-45e1-aea9-57ddb4036e99',
    name: 'mutai solutions',
    members: ['**Bryan Mutai** : Full-Stack developer and web designer'],
    projects: [
      {
        projectId: 'edeba74b-29d6-4649-9ec0-55ae5d57dde3',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c6d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c6e'
    },
    id: 'f1fae0c3-6490-453b-9e2a-ad3ce3d6f79d',
    name: 'dia data',
    members: [],
    projects: [
      {
        projectId: 'bad1841d-6674-4e43-9b46-d589b9db46ef',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c6f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c70'
    },
    id: 'dcfbd50d-acbd-4bd5-9d5b-a98b36397030',
    name: 'dico team',
    members: [
      'Name of team leader: gogomath',
      'Names of team members:Daniel, gogomath,Dunham,cf,tokggo,cj1afs,meliart'
    ],
    projects: [
      {
        projectId: 'f4cca91a-f2d4-41e2-93b7-b7c26d632fd2',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c71'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c72'
    },
    id: 'c686c80f-b74a-42d9-8b0d-1d296a6f0309',
    name: 'valletech ab',
    members: ['Rafael del Valle López', 'René Moser'],
    projects: [
      {
        projectId: 'd625d2e1-8c20-4350-8a0e-aefcd0147b10',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c73'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c74'
    },
    id: 'bb37ca4b-f73d-4204-9333-fd529a2885cf',
    name: 'dksap',
    members: [
      'Yahuang Wu',
      '[Github address](https://github.com/wuyahuang)',
      '7 years of internet R&D experience, participated in the development of several APPs with millions of Daily Active Users (Qunar, Snowball, Meiyou)',
      'Wrote 40 EOS technical articles [list of technical articles](https://github.com/meet-one/documentation/blob/master/meetone-lab-docs.md)',
      'Selected for the EOS Open Source Community Acknowledgments List [list of selected lists](https://steemit.com/eos/@liondani/eos-acknowledgments-making-it-immutable-via-steemit )',
      'Multiple EOS open-source repositories that submitted PRs were selected for the GitHub Archive Program',
      'Has 10 blockchain technology patents [Patent List](http://www1.soopat.com/Home/Result?SearchWord=%E5%90%B4%E4%BA%9A%E7%9A%87&FMZL=Y&SYXX=Y&WGZL=Y&FMSQ=Y)'
    ],
    projects: [
      {
        projectId: 'd9de7932-5edf-4bc3-b04d-87b50c396996',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c75'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c76'
    },
    id: '95701f78-86ae-4a02-b7b2-0c3f2ec7538c',
    name: '',
    members: [],
    projects: [
      {
        projectId: 'fa35e231-0a4e-4e20-8976-11ae2ecad5c4',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c77'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c78'
    },
    id: '37858737-90b8-4ec8-8116-a7bd58d5f141',
    name: 'dante network',
    members: [
      'Shawn Zheng (Tech leader of Dante Network)',
      'Worked for a state-owned enterprise (Fortune 500) engaged in the security business for 10+ years.',
      'Full-stack engineer in information security, AI, blockchain, etc.',
      'Hackathon winner as a team tech leader: [Near Metabuild Hackathon](https://devpost.com/software/universal-trusted-cross-chain-bridge), [PlatON Dorahacks](https://forum.latticex.foundation/t/topic/5676);',
      'Github: https://github.com/xiyu1984',
      'Mail: xiyuzheng1984@gmail.com',
      'Zack Wu (Full-stack Dev in web3, core dev in Dante Network)',
      'EOS, PlatON technical community senior participant (output 40 technical articles, help EOS, PlatON fix many bugs).',
      'Technical mentor for EOS 1st Hong Kong Hackathon Live.',
      'Technical leader of EOS Genesis node eosiomeetone, the largest node in Asia in terms of traffic when the main network was launched, with TPS 8k+.',
      'Senior full-stack engineer (worked in Go, Snowball).',
      'Hackathon winner: [Near Metabuild Hackathon](https://devpost.com/software/universal-trusted-cross-chain-bridge), [PlatON Dorahacks](https://forum.latticex.foundation/t/topic/5676);',
      'Github main page: https://github.com/wuyahuang.',
      'Technical articles: https://github.com/meet-one/documentation.',
      'Mail: wuyahuang@gmail.com',
      'George Huang (Full-stack Dev in web3, core dev in Dante Network)',
      '2Senior participant of PlatON technical community ported Chainlink project for PlatON and exported several technical articles.',
      'Built and maintained Polkadot, Kusama, PlatON, Ethereum2.0, ChainX, and other project nodes',
      'Crust, Phala project node data center leader, responsible for project operations and maintenance, and the development of operations and maintenance-related tools.',
      '10 years as a full-stack engineer in finance, games, education, etc.',
      'Hackathon winner: [Near Metabuild Hackathon](https://devpost.com/software/universal-trusted-cross-chain-bridge), [PlatON Dorahacks](https://forum.latticex.foundation/t/topic/5676);',
      'Github: https://github.com/virgil2019.',
      'Mail: hht2015ily@gmail.com',
      'Kay Lin (Full-stack Dev in web3, core dev in Dante Network)',
      'A state-owned enterprise medical alliance chain development, as well as the construction and maintenance of distributed storage network, related SDK development.',
      'Years of experience in blockchain, a deep participant in EOS, PlatON, and other communities, exporting technical articles, and modifying bugs.',
      'Participate in EOS node maintenance, EOS DApp development.',
      'Hackathon winner: [Near Metabuild Hackathon](https://devpost.com/software/universal-trusted-cross-chain-bridge), [PlatON Dorahacks](https://forum.latticex.foundation/t/topic/5676);',
      'GitHub: https://github.com/kay404.',
      'Mail: kay20475@gmail.com',
      'James Fan (Full-stack Dev in web3, core dev in Dante Network)',
      'Over 10 years of working experience in various aspects of computer programming, analysis, development, and testing.',
      'EOS, Fluence, Nervos technical community participant.',
      'Full-stack engineer(worked in Go/Rust/C++/Javascript)',
      'Hackathon winner: [FluenceLabs gitcoin hackathon](https://gitcoin.co/issue/fluencelabs/sovereign-data-hackathon/1/100026738), [nervos gitcoin hackathon](https://www.nervos.org/blog/nervos-gitcoin-hackathon-winners-announced).',
      'Github: https://github.com/fsy412',
      'Mail: fsy412@gmail.com'
    ],
    projects: [
      {
        projectId: 'd100edd1-2d69-427c-805e-f4bdb1bd6cca',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c79'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c7a'
    },
    id: 'dc9e7ed5-bfa7-48f0-84f8-8ee063d3f285',
    name: 'b-datagray',
    members: [
      'Angela Griggio (CEO)',
      'Luca Eugenio Barlassina (COO)',
      'Oliver Lim (Rust and Blockchain developer)',
      'Niccolò Baldini (Former_Head of Substrate Division)',
      'Ren Okamoto (Head of Solidity Smart-Contracts Development)',
      'Alawiye Olukayode (front end developer)',
      'William Liu (part-time / blockchain developer)',
      'Giulia Cortinovis (part time / web designer)',
      'Ahmed Abdel Al (part time / graphic designer)'
    ],
    projects: [
      {
        projectId: '83cc157a-dc43-4337-a6f4-318d18bb90bc',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c7b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c7c'
    },
    id: '37d3fc2c-64f3-4bf0-be10-83058d05049e',
    name: 'colorful notion, inc.',
    members: [],
    projects: [
      {
        projectId: 'f4d78f51-a81a-4d0b-979b-c023ebaf0c67',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c7d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c7e'
    },
    id: 'f31d8dc7-c2f1-4a1b-b649-8f2c6466072e',
    name: 'belsoft',
    members: [
      'Max Remov, managing partner at BelSoft Dev d.o.o',
      'Alexey Vexin, CEO at BelSoft Dev d.o.o',
      'Dmitrii Shevchenko, CTO at BelSoft Dev d.o.o',
      'Nikita Orlov, Teamlead at BelSoft Dev d.o.o',
      'Alexander Plekhanov, Middle full stack developer at BelSoft Dev d.o.o',
      'Valeriy Tetevin, Senior full stack developer at BelSoft Dev d.o.o'
    ],
    projects: [
      {
        projectId: '5ef8ba42-fca4-4778-8c23-8b34e5c36a80',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c7f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c80'
    },
    id: 'b4a8d5b3-95de-40fe-a59c-227d1c1988d6',
    name: '',
    members: [],
    projects: [
      {
        projectId: '12d06167-4b02-4cdf-a398-7e25e6578a2d',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c81'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c82'
    },
    id: 'd265c95d-0b89-4382-bb9d-f0baa8eab985',
    name: 'jett hays (individual)',
    members: ['Leader: Jett Hays', 'Advisor: Nicolas Christin'],
    projects: [
      {
        projectId: '97871898-3b67-427f-8f9a-95fbf3205949',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c83'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c84'
    },
    id: '955d6649-0405-44c9-9705-6b02c5b429be',
    name: 'crypto pay lab (cpl)',
    members: [
      'We will pleased to offer github accounts, LinkedIn and any other information in private.',
      'All team members can contact privately for any specific information.',
      'Richard Fang: team leader, core developer',
      'Fugen Wang: Background development',
      'responsible for the development of the website background.',
      'Yang Li:',
      'Responsible for front-end development.',
      'Peng Qiao: Rust developer',
      'Responsible for back-end development, relevant development of blockchain, payment task management module, and docking API and key management module on the chain.',
      'Wei Zhang:',
      'Responsible for operation, promotion in the open source community after the website is launched, and attracting open source projects to use our services.',
      'AdaLam:  PD/PMO',
      'Responsible for product design and project schedule management.',
      "Team's Experience",
      'Richard Fang:',
      'As an expert in the field of cloud computing in one of the biggested Internet listed companies with 7 years of rich working  experience.',
      'The author of a well-known cloud native project which has more than 5K stars and 4k paid enterprise users.',
      'Fugen Wang:',
      'CEO of an Internet start-up company and manages more than a dozen employees with 7 years working experience.',
      'Yang Li:',
      'Andriod/IOS front-end engineer with 5 years working experience.',
      'Peng Qiao:',
      'A core member of AI Research Institute wich is one of the top AI listed companies in China with 5 years working experience.',
      'Wei Zhang:',
      'An advertising director, one of the top AI listed companies in China with 7 years of rich working experience.',
      'AdaLam: PD/PMO',
      'Familiar with product design and project schedule management.'
    ],
    projects: [
      {
        projectId: 'f49222cf-8551-41a6-8772-b0ec9714bc24',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c85'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c86'
    },
    id: 'dc31bc16-0b91-4b84-a46a-ee056f5f0270',
    name: 'crosschain labs',
    members: [
      'Andreea - Team Leader',
      'Cristina - Full Stack Developer (JavaScript, React)',
      'Catalin - Full Stack Developer (JavaScript, React)',
      'Florin - UI/UX Designer (Sketch, Figma)'
    ],
    projects: [
      {
        projectId: '184d5139-e3f6-4376-83bb-7ffeab6a8a58',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c87'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c88'
    },
    id: 'b332d61f-d0ba-4948-a119-832bcd79b493',
    name: 'chainbridge network',
    members: ['Guan Yu', 'Gao Jianli'],
    projects: [
      {
        projectId: '827be135-2e37-4bb1-bf99-8d7d2fac3006',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c89'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c8a'
    },
    id: 'fb0d28e7-1ba0-4136-b41a-a6e249cf657a',
    name: 'sergej sakac & oliver lim',
    members: [
      'Sergej Sakac [Szegoo](https://github.com/Szegoo)',
      'Oliver Lim [cuteolaf](https://github.com/cuteolaf)'
    ],
    projects: [
      {
        projectId: 'a52c4fa8-ff36-4283-a804-1f4abd93a76a',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c8b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c8c'
    },
    id: '394efbf1-0913-4869-bba9-b04f5c507312',
    name: 'cycan technologies',
    members: [
      'Cycan is directed by the following key roles:',
      'Donald Gao: founder, financial model designer',
      'Michele Ruberl, global tech partner, IT architect',
      'Vivi Lin, global partner, CMO'
    ],
    projects: [
      {
        projectId: '026854dc-46b6-40dd-86c8-de1957967770',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c8d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c8e'
    },
    id: '63cf59c2-4c98-406d-858e-7121a52c6db8',
    name: ' element36',
    members: [
      'Leader: Walter Strametz, full-stack developer, founder element36.io: Worked on roughly a dozen blockchain projects in Switzerland - among them the digital identity project for the City of Zug, Swiss OTC Blockchain - the predecessor of the blockchain based swiss digital exchange (sdx.ch), ethereum smart contracts (ERC20 stablecoin and compliance contracts), and large parts of the element36 backend, especially access to banking system.',
      'Dastanbek Samatov: Polkadot Developer, worked on [Subsemly](https://github.com/LimeChain/subsembly) - a framework used for designing and implementing Substrate runtimes from scratch. Subsembly utilises Substrate Core to build runtimes in a non-native language of Substrate. Check out the substrate runtime [here](https://github.com/LimeChain/as-substrate-runtime).',
      'Vladimir Nicolic, Full Stack Developer: Javascript Senior, worked on decentral identity, large parts of the element36 modules and the Dapp for the exchange and compliance-administration.',
      'Ivan Baresic, Frontend and javascript full-stack developer: CI/CD, javascript-backend components, React-frontends and Dapp development.',
      'The team consists of more members, who we do not see as necessary for implementing the project.'
    ],
    projects: [
      {
        projectId: 'a00f0efb-3829-4fc6-baff-8962fc267b8d',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c8f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c90'
    },
    id: '42bd2158-e291-4e3d-a00f-abfec717ce94',
    name: 'mb karolio reikalai',
    members: ['Karolis Ramanauskas: full-stack developer & product designer'],
    projects: [
      {
        projectId: 'ab2f4bf8-98ef-4479-89d0-288c124b7c08',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c91'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c92'
    },
    id: '1aa5741a-d7a3-4ada-a8c6-488f02aa426d',
    name: 'fennel labs',
    members: [
      'Sean Batzel',
      'Isaac Adams',
      'Andre Vanoncini',
      'Fernando Fonseca-Avalos',
      'Mateusz Plaza',
      'Jan Eberle'
    ],
    projects: [
      {
        projectId: 'a2bd0484-2ba4-4a27-a8a9-c878858dca1d',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c93'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c94'
    },
    id: 'eaf1b4aa-8113-4c1c-ac41-10be77db8f41',
    name: 'fuzzland',
    members: [
      'Jeff Liu (PM & Marketing)',
      'Chaofan Shou (Core Dev) - https://scf.so/',
      'Shangying Tan (Core Dev) - https://shangyit.me/',
      'Ben Fong (Core Dev + QA)',
      'Yiqi Hu (Core Dev)'
    ],
    projects: [
      {
        projectId: 'd55956be-c728-49ed-92d6-8c204070ffa6',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c95'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c96'
    },
    id: 'e9825914-bbda-40c6-bd27-94732076808d',
    name: 'cryptoviet',
    members: [
      'Huynh Van Quyet (Jack) - CEO + Leader',
      'Phan Dang Quy (David) - Technical Lead',
      'Truong Ngoc Vuong (Michael) - CTO + UX/UI',
      'Do Tan Trung (Jackson) - Full-Stack Developer + DevOps',
      'Luu Hoang Trung (Mike) - UI/UI + DevOps',
      'Bui Minh Thanh (Stefan Muto) - Substrate developer'
    ],
    projects: [
      {
        projectId: '3910eb14-ae90-499d-94a1-924d945db85e',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c97'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c98'
    },
    id: 'a3ec5a1c-4b44-4b17-9894-4d5bd5cbeaf7',
    name: 'genesisdao by deep ink ventures gmbh',
    members: [],
    projects: [
      {
        projectId: 'c413be85-2d89-4fa7-9419-ca240f1ae9b1',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c99'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c9a'
    },
    id: 'beaa79d1-37de-44a2-8db0-fe987ac33ab1',
    name: 'tea project',
    members: [
      'Name of the team leader: Kevin Zhang',
      'Names of team members:',
      'William Zhang',
      'Jacky Li',
      'Raindust Yan',
      'Zehua Jiang',
      'Lex Pablo'
    ],
    projects: [
      {
        projectId: '410ecbf4-f9ee-41f1-8f67-6cced01896b0',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c9b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c9c'
    },
    id: 'b834ec93-74fe-49eb-8452-a7f883ba2e26',
    name: 'antier solutions pvt. ltd.',
    members: [
      'Kulwinder Singh (Backend)',
      'Shaivik Semwal (Frontend)',
      'Aanchal Kathuria (Tester)'
    ],
    projects: [
      {
        projectId: 'f817d029-6b12-430f-b297-eb8f2d31bcd9',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c9d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44c9e'
    },
    id: 'fcc9f027-4fc4-4a70-bb06-1ab4063f96eb',
    name: 'green lemon',
    members: [
      'Yahuang Wu',
      '[Github address](https://github.com/wuyahuang)',
      'Educated in Xiamen University, MEM',
      '7 years of internet R&D experience, participated in the development of several apps with millions of Daily Active Users (Qunar, Snowball, Meiyou)',
      'Head of the technical team of EOS genesis block producer',
      'Author of 40 EOS technical articles [list of technical articles](https://github.com/meet-one/documentation/blob/master/meetone-lab-docs.md)',
      'Selected into the EOS Open Source Community Acknowledgments List [list of selected lists](https://steemit.com/eos/@liondani/eos-acknowledgments-making-it-immutable-via-steemit)',
      'EOS Hongkong Hackathon tech mentor',
      'Contributed code to several repositories in the 2020 GitHub Archive Program',
      '10 blockchain technology patents [Patent List](http://www1.soopat.com/Home/Result?SearchWord=%E5%90%B4%E4%BA%9A%E7%9A%87&FMZL=Y&SYXX=Y&WGZL=Y&FMSQ=Y)',
      'Rick',
      'Educated in Xiamen University, Computer Science & MBA',
      'Head of the technical team of Meiyou APP (one of the most famous female health APP in Aisa)',
      'Head of the technical team of EOS wallet (one of the most famous EOS wallets in Asia)'
    ],
    projects: [
      {
        projectId: '2f90342c-55a1-47b8-aacf-bcb114084264',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c9f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ca0'
    },
    id: 'c0d8617b-81d6-47ec-b8a9-2439b1cbabae',
    name: 'bright inventions',
    members: ['Katarzyna Łukasiewicz', 'Kasper Ziemianek', 'Michał Graliński'],
    projects: [
      {
        projectId: 'cf24eadb-65fb-4ea2-b635-f492b34afde0',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ca1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ca2'
    },
    id: 'e6c59138-525a-4e21-9722-5daefb288e2f',
    name: 'dastanbek samatov',
    members: ['Dastanbek Samatov'],
    projects: [
      {
        projectId: '39a27bc3-cee0-4431-ab21-de748da215fe',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ca3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ca4'
    },
    id: 'cbf6346f-81d5-4279-8afb-074674e8b274',
    name: '',
    members: [
      'jasonberger0',
      'Dylan',
      'kericfrank',
      'Team’s experience',
      'jasonberger0  Over 10 years of experiences in Development and Management,real time database products and digital currency transaction platform products expert. Currently focused on Blockchain Development and Cross-chain Technologies.',
      'Dylan holds a master degree from Tsinghua University. He has more than 10 years of experience inlarge-scale computing and algorithm, with many patents such as consensus algorithm and blockchain transaction.',
      'kericfrank: 8+ years development experience, proficient in public chain and cross chain development, proficient in using go and rust, p2p network expert.',
      'Team Code Repos',
      '<https://github.com/idavollnetwork>',
      'Development Roadmap :nut_and_bolt:',
      'Overview',
      'Total Estimated Duration: 4 weeks',
      'Full-time equivalent (FTE):  3',
      'Total Costs: 0.65 btc',
      'Milestone 1',
      'Estimated Duration: 4 weeks',
      'FTE:  3',
      'Costs: 0.65 btc',
      'In this milestone, We will implement Idavoll DAO proof-of-concept.',
      'Number',
      'Deliverable',
      'Specification',
      '0a.',
      'License',
      'Apache 2.0',
      '0b.',
      'Documentation',
      'We will provide both inline documentation of the code and a basic tutorial that explains how a user can import the protocol.',
      '0c.',
      'Testing Guide',
      'This milestone will have unit-test for all modules to ensure functionality. In the guide we will describe how to run these tests.',
      '1.',
      'Idovall Organization  module',
      'This module provide methods to create a DAO with specific parameters, such as the name, the permissions and the internal addresses for your organization. And it is the entry of the other module functions.',
      '2.',
      'Idovall Voting module',
      'Create proposal and set the voting duration, minimum approval and support percentage of your proposal. When a proposal approved, token assignment or funds transfer will execute.',
      '3.',
      'Idovall Token module',
      'Implement Token module to mint new tokens and assign them, and confer voting abilities to holders of the tokens such that one token equals one vote. Minting and assignment is trigger by **Idovall Voting module **.',
      '4.',
      'Idovall Finance module',
      'This module provides tokenholders with access to the funds held by their organization. It supports deposit funds, withdraw funds and transfer funds, after the proposal approvement from ** Idovall Voting module **. The module also shows the current balance as well as the transaction history of the organization.',
      'Future Plans',
      'we will provides a Dapp for everyone to interact with the Idovall network.'
    ],
    projects: [
      {
        projectId: '9bce21dd-19f0-473e-84dd-3bd13467512c',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ca5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ca6'
    },
    id: '81f640cf-bdb9-4369-881c-38fe69cbd3c8',
    name: 'stardust labs inc.',
    members: ['Adit Patel'],
    projects: [
      {
        projectId: 'c4f3913c-b98d-433f-a085-7c6cf4d3a64a',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ca7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ca8'
    },
    id: '15cdce2b-3e94-4247-bb26-daca897880fb',
    name: 'interstellar',
    members: [
      'Name of team leader:',
      'Jean-Luc Leleu',
      'Names of team members:',
      'Nathan Prat',
      'Eliot Leleu',
      'Jean-Louis Hoenen',
      'Aude Bourdouxhe',
      'Philippe Salats (advisor)'
    ],
    projects: [
      {
        projectId: 'c1d4ed22-9a43-441f-9020-98d2b30e53ce',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ca9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44caa'
    },
    id: '4f3f625a-e7b7-4b57-9956-da63a2da3e63',
    name: 'interstellar',
    members: [
      'Name of team leader:',
      'Jean-Luc Leleu',
      'Names of team members:',
      'Nathan Prat',
      'Eliot Leleu',
      'Philippe Salats (advisor)'
    ],
    projects: [
      {
        projectId: 'bfe3e48d-9a86-4a84-b5d2-97e1fff147db',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cab'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cac'
    },
    id: '9d122443-192c-4f7b-b656-1e0a8854e74b',
    name: 'invarch network',
    members: [
      '(Development & Engineers)',
      '[Dakota Barnett](https://www.linkedin.com/in/xcastronaut) - Founder & Head of Development',
      '[Gabriel Facco de Arruda](https://github.com/arrudagates) - Co-Founder & Head of Technology Development',
      '[Kresna Sucandra](https://github.com/SHA888) - Co-Founder & Head of Protocol Development',
      '[Mindaugas Savickas](https://www.linkedin.com/in/savickas) - Co-Founder & Head of Ecosystem Development',
      '[Matheus Braña Iannuzzi Baliones](https://github.com/S0raWasTaken) - Rust Core Engineer',
      '[Brunk Škvorc](https://www.linkedin.com/in/swader) - Technical Advisor (Founder, RMRK)',
      '[Marvin Tong](https://twitter.com/marvin_tong) - Product Advisor (Founder, Phala Network)'
    ],
    projects: [
      {
        projectId: 'f5432bd5-25e1-4c34-90d6-a6600682e4e7',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cad'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cae'
    },
    id: 'da0472ea-4c5d-45dd-90f9-b6adebd42d50',
    name: 'uddug',
    members: [
      '**Tech lead, backend:** Andrew Skurlatov',
      '<https://www.linkedin.com/in/andrew-skurlatov/>',
      '**Head of product:** Mike Manko',
      '<https://www.linkedin.com/in/mikhail-manko-97a491a2/>',
      '**Product design:** Anuar Zhumaev',
      '<https://www.linkedin.com/in/yxorama/>',
      '**DevOps:** Ivan Podcebnev',
      '<https://www.linkedin.com/in/naykip/>',
      '**Data Science:** Constantine Czerniak',
      '<https://www.linkedin.com/in/%D1%81czerniak/>',
      '**Frontend:** Nikita Velko',
      '<https://www.linkedin.com/in/nikichv/>'
    ],
    projects: [
      {
        projectId: '342c3c4d-9217-4d33-b81a-a8d7e852ff07',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44caf'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cb0'
    },
    id: '387a9aad-7430-4d81-a4e6-162e8c156d18',
    name: '',
    members: ['Darko Mačešić', 'Ana Milić-Štrkalj'],
    projects: [
      {
        projectId: 'ea6a6c46-0f92-4334-bb27-b062d3076dcd',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cb1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cb2'
    },
    id: 'df5057d4-5310-4f6f-b73e-16fe718b4042',
    name: 'mobr systems',
    members: [
      'Name of team leader',
      '**Dr. Marcio Moreno**, marcio@mobr.ai, Co-Founder, Research Scientist and CEO at MOBR Systems (https://www.mobr.ai).',
      'Names of team members',
      '**Dr. Rafael Brandao**, rafael@mobr.ai, Co-Founder, Research Scientist and COO at MOBR Systems (https://www.mobr.ai).'
    ],
    projects: [
      {
        projectId: '1e4319e7-eddb-4a2a-a624-447c3f9fb50f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cb3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cb4'
    },
    id: '169acbfd-3530-4fd1-a659-94b9fe5959c1',
    name: '',
    members: [],
    projects: [
      {
        projectId: '3daaf477-328b-4063-b51f-47f25d5e228a',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cb5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cb6'
    },
    id: '9b887c07-cc15-42c1-8c5a-7df220a52b79',
    name: '@scale technologies',
    members: [
      'Name of team leader: Anthony Dong',
      'Names of team members: Andrew Le'
    ],
    projects: [
      {
        projectId: '85fc81e2-028a-4980-8372-ce9302371e30',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cb7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cb8'
    },
    id: 'f912f77b-5085-46ca-8749-72e8fa2f801a',
    name: 'paraspell✨',
    members: [
      'Dušan Morháč - Student, project Founder & Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava',
      'Michael Absolon - Student, XCM SDK & XCM API Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava'
    ],
    projects: [
      {
        projectId: '3d778d6b-d189-4d99-80e3-2492a101aac6',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cb9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cba'
    },
    id: 'eb8f32db-6519-45f7-b2a8-e191ab26cff9',
    name: '',
    members: ['Chan', 'Seabook', 'LYU.L'],
    projects: [
      {
        projectId: '96639321-6da3-4f94-b343-65b14a016d13',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cbb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cbc'
    },
    id: '5e7f632f-e8f4-45df-a8cb-a3cb7bb494fd',
    name: 'webb',
    members: ['Drew Stone', 'Filip Lazovic', 'Shady Khalifa', '1 other member'],
    projects: [
      {
        projectId: '40ebeb52-08f6-4a5b-955b-282cdc1c1037',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cbd'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cbe'
    },
    id: 'cfac497f-b60f-43ec-99bb-3a5ad2e6a481',
    name: 'webb',
    members: [
      'Drew Stone',
      'Filip Lazovic',
      'Shady Khalifa',
      'Ahmed Korrim',
      'Nathan Barnavon'
    ],
    projects: [
      {
        projectId: 'd8815f0e-a7b4-4d36-9ba0-39827e75a1a0',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cbf'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cc0'
    },
    id: '366669a1-d3a4-4b44-871c-a322b8efbd0a',
    name: 'cyril carlier (individual)',
    members: ['Cyril Carlier'],
    projects: [
      {
        projectId: '2ec3eb4a-9ea5-466b-a8df-8bd29c21fc99',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cc1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cc2'
    },
    id: '6647342b-3bc3-40a2-8a5d-785674247e45',
    name: 'mangobox  labs',
    members: [
      '**Jason Zhao**: Team leader, project architect, PM and technical leader. He has over 15 years of experience in Internet technology as a senior developer. He began to know Bitcoin in 2015 and gradually emerged himself in the R&D of blockchain technology.  He started to notice Polkadot in 2021 and decided to focus on the development of the Polkadot ecosystem.',
      '**Frank  Yu:** Full stack IT developer,  10 years of experience in IT,  in command of programming languages such as  PHP,Java, C++.  Looked into the study and development of Ethereum in 2018;  Committed to the Polkadot ecosystem in 2021.',
      '**Owen Hu:** Full stack developer,  smart contract engineer, 8 years of experience in IT development, currently focuses on the R&D of the blockchain technology in Web3.',
      '**Kevin   Luo:** Full stack developer, front-end engineer, 6 years of IT experience,  currently focuses on the R&D of the blockchain technology.',
      '**Alex Li:** Senior designer , 10 years of experience in Internet design, maintains a high standard of design and art.'
    ],
    projects: [
      {
        projectId: 'a2b3d84e-c39b-4dad-8af1-361e84aa2722',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cc3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cc4'
    },
    id: 'f3ee3688-e1ca-4760-8a69-1ada70092d6c',
    name: 'mangobox  labs',
    members: [
      '**Jason Zhao**: Team leader, project architect, PM and technical leader. He has over 15 years of experience in Internet technology as a senior developer. He began to know Bitcoin in 2015 and gradually emerged himself in the R&D of blockchain technology.  He started to notice Polkadot in 2021 and decided to focus on the development of the Polkadot ecosystem.',
      '**Frank  Yu:** Full stack IT developer,  10 years of experience in IT,  in command of programming languages such as  PHP,Java, C++.  Looked into the study and development of Ethereum in 2018;  Committed to the Polkadot ecosystem in 2021.',
      '**Owen Hu:** Full stack developer,  smart contract engineer, 8 years of experience in IT development, currently focuses on the R&D of the blockchain technology in Web3.',
      '**Kevin   Luo:** Full stack developer, front-end engineer, 6 years of IT experience,  currently focuses on the R&D of the blockchain technology.',
      '**Alex Li:** Senior designer , 10 years of experience in Internet design, maintains a high standard of design and art.'
    ],
    projects: [
      {
        projectId: 'a8f2d07f-01f3-4745-9607-38fc6e49d08a',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cc5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cc6'
    },
    id: 'd600a1a8-2c0c-4944-86c0-fb397024639a',
    name: 'my ai',
    members: [
      '**Name of team leader**',
      '  Robert Wesley (CEO)',
      '**Names of team members:**',
      'Robert Wesley (CEO)',
      'Paul Oamen (CTO)',
      'Pius Onobhayedo',
      'John Chimaobi',
      'Samuel Anthony',
      'Boluwatife Oguntoyinbo',
      'Nwele Uchenna',
      'We will be hiring an additional Rust/Ink! developer'
    ],
    projects: [
      {
        projectId: 'c1f15350-b66d-4895-b8ec-7e105929ec9c',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cc7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cc8'
    },
    id: '32d99561-bafe-432d-8400-ad4a47655e13',
    name: 'meta defender team',
    members: [
      'Name of team leader: Alvin, CEO',
      'Names of team members: Angie, Fullstack Engineer & 0xdeadbeef, Fullstack Engineer'
    ],
    projects: [
      {
        projectId: '0ee10928-53c2-4f91-9ada-c373c571150b',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cc9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cca'
    },
    id: 'b592c6a1-772e-47ba-ba55-e1759d151410',
    name: 'chainsafe',
    members: ['Thibaut Sardan @tbaut'],
    projects: [
      {
        projectId: '59db8eb0-50af-47b9-b74d-d78260d022cf',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ccb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ccc'
    },
    id: '16270516-e941-4124-87cb-4af3002b3d52',
    name: '',
    members: [],
    projects: [
      {
        projectId: 'fed94ac3-a9b9-4f52-9d52-ca6aae6d0ef5',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ccd'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cce'
    },
    id: 'ec625d09-e15f-45cd-beaf-e868a7400d89',
    name: 'perpetual altruism',
    members: ['Guillaume Gonnaud', 'Edouard Bessire'],
    projects: [
      {
        projectId: '188fb861-fa77-4daf-98cf-77a1841a7386',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ccf'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cd0'
    },
    id: '4271fdbd-fee8-470e-9e8f-c5b61552214e',
    name: 'chainify',
    members: ['Amir Boziev'],
    projects: [
      {
        projectId: 'b990eae3-8d6a-4ec0-898e-f2421dc1e39a',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cd1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cd2'
    },
    id: '19bb8b5f-475a-43f5-beea-447462926350',
    name: '',
    members: [
      'Pawn',
      'Sam',
      "Team's experience",
      'Pawn: Currently pursuing a PHD degree in cryptography from UCAS. Familiar with most cryptographic technology such as Fully Homomorphic Encryption,  Zero Knowledge Proof and Secure Multi-party Computation.',
      'Sam: Tutor for Blockchain Engineer Lecture Hall of Internet Industry Research Institute of Tsinghua University;  Former Huobi technical expert; proficient in DEFI project development, developer of  KOKOSWAP, Perpexchange, TMK NFT, YFX.',
      'Team Code Repos',
      'https://github.com/pawnz0/NuLink',
      'Development Roadmap :nut_and_bolt:',
      'Overview',
      '**Total Estimated Duration:** 6 month',
      '**Full-time equivalent (FTE):** 2',
      '**Total Costs:** 10,000 DAI.',
      'Milestone 1 Implement Nuproxy Pallet',
      '**Estimated Duration:** 4 month',
      '**FTE:**  2',
      '**Costs:** 5,000 DAI',
      'Number',
      'Deliverable',
      'Specification',
      '0a.',
      'License',
      'Apache 2.0',
      '0b.',
      'Documentation',
      'We will provide both documentation of the code and a basic tutorial that explains how a user can use the pallet.',
      '0c.',
      'Testing Guide',
      'This milestone will have unit-test for each function to ensure functionality. In the guide we will describe how to run these tests.',
      '1.',
      'register_watcher',
      'This function would record the public key of the watcher nodes and would be executed when the Nuproxy pallet first deployed.',
      '2.',
      'UpdateStakers',
      'This function would provide the functionality of updating the information of current stakers and bonding workers of Ursulas network. It will be restricted to watchers.',
      '3.',
      'GetActiveStakers',
      'This function would return a list of active stakers by random sampling.',
      'Milestone 2 Implement Policy Pallet',
      '**Estimated Duration:** 2 month',
      '**FTE:**  2',
      '**Costs:** 5,000 DAI',
      'Number',
      'Deliverable',
      'Specification',
      '0a.',
      'License',
      'Apache 2.0',
      '0b.',
      'Documentation',
      'We will provide both documentation of the code and a basic tutorial that explains how a user can use this pallet.',
      '0c.',
      'Testing Guide',
      'This milestone will have unit-test for each function to ensure functionality. In the guide we will describe how to run these tests.',
      '1.',
      'CreatePolicy',
      'This function would lock the fee for a specific policy for a locking period.',
      '2.',
      'RevokePolicy',
      'This function would revoke a specific policy and refund the unconsumed policy fee depending on the locking period.',
      '3.',
      'Mint',
      'This function would computes and transfers the policy fee to the staker’s account',
      '4.',
      'Withdraw',
      'The staker could call this function to claim the reward fee.',
      'Additional Information :heavy_plus_sign:',
      'We have discussed this project  with the NuCypher core team and got some technical support from the NuCypher team.',
      'We have implemented the watcher nodes  independently and not funded by this proposal. The owner who deployed the Nuproxy pallet could either manually update the information from Ethereum,  or use our watcher node updating it automatically. Here is the (link)[the watcher nodes](https://github.com/NuLink-network/nulink-watcher).',
      'Update & Amendments',
      '2022/02/27',
      'We  underestimated the total work and the time-line has now been exceeded by several months. We have already  submitted our [work](https://github.com/w3f/Grant-Milestone-Delivery/pull/367) and are waiting for review.',
      'This amendment updates the name of the mirror pallet to the Nuproxy pallet,  and the name of the Policy Management pallet to Policy pallet.'
    ],
    projects: [
      {
        projectId: '3a35e701-bf9c-40f6-9722-20e26bbd86bf',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cd3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cd4'
    },
    id: '21940c72-6e76-47a5-bbfa-8058fec0a582',
    name: 'omniverse labs (formerly dante team)',
    members: [
      'Shawn Zheng',
      'GitHub: https://github.com/xiyu1984',
      'Email: xiyuzheng1984@gmail.com',
      'Members:',
      'George Huang',
      'GitHub: https://github.com/virgil2019',
      'Email: hht2015ily@gmail.com',
      'Kay Lin',
      'GitHub: https://github.com/kay404',
      'Email: kay20475@gmail.com'
    ],
    projects: [
      {
        projectId: '2f4859cc-da79-4698-9ac5-a511673d5ae4',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cd5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cd6'
    },
    id: '0c892c97-66c5-44c8-9d08-988b31c1b255',
    name: 'opensquare',
    members: [
      'Yongfeng Li(@wliyongfeng), Full stack developer',
      'Chaojun Huang(@hyifeng), Full stack developer',
      'Wentao Chen(@qiyisi), Full stack developer',
      'Yizhou Xin(@YoshiyukiSakura), Full stack developer',
      'Alcazar(@Popoulosss), Designer',
      'Yaping Wu, BD and execution member',
      'You can see our team with this [link](https://www.opensquare.network/team/).'
    ],
    projects: [
      {
        projectId: 'd4849301-6bb1-42e5-ad31-1e355575ab57',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cd7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cd8'
    },
    id: 'c866c13b-de57-46a9-9480-534edd8aa475',
    name: 'opensquare',
    members: [
      'Yongfeng Li(@wliyongfeng), Full stack developer',
      'Chaojun Huang(@hyifeng), Full stack developer',
      'Wentao Chen(@qiyisi), Full stack developer',
      'Yizhou Xin(@YoshiyukiSakura), Full stack developer',
      'Alcazar(@Popoulosss), Designer',
      'You can see our team [here](https://www.opensquare.network/team/).'
    ],
    projects: [
      {
        projectId: 'f248cfdc-60c9-4c47-9dc3-02a419a38766',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cd9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cda'
    },
    id: '2e124a65-6d8c-41f8-a9e1-522092c7b9a3',
    name: ' paraspell',
    members: [
      'Dušan Morháč - Student, project Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava',
      'Viktor Valaštín - Supervisor, founder of [KodaDot](https://kodadot.xyz/). Faculty of Informatics and Information Technologies STU in Bratislava'
    ],
    projects: [
      {
        projectId: '1cb0ac09-92a3-4699-8b63-6cb009f9841f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cdb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cdc'
    },
    id: '33f857a7-2b72-4e87-90a4-8544900916da',
    name: 'paraspell✨',
    members: [
      'Dušan Morháč - Student, project Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava',
      'Viktor Valaštín - Supervisor, founder of  [KodaDot](https://kodadot.xyz/). Faculty of Informatics and Information Technologies STU in Bratislava'
    ],
    projects: [
      {
        projectId: 'b36fb508-a236-4e16-8c0d-6e61a3643919',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cdd'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cde'
    },
    id: 'da1f0f63-ee21-4961-ba99-d76ea5bb4c8e',
    name: 'paraspell✨',
    members: [
      'Dušan Morháč - Student, project Founder & Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava',
      'Michael Absolon - Student, SDK Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava'
    ],
    projects: [
      {
        projectId: '3dd0ec82-c545-48d6-804c-980bdc7b18e1',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cdf'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ce0'
    },
    id: 'ebb82b90-0f2f-4511-b4a8-34fa9545c659',
    name: 'parallel',
    members: [
      'Name of team leader: Yubo Ruan',
      'Names of team members: Remi Gai, Zhou Yang, Li Pai, Cheng Jiang, Hai Yi'
    ],
    projects: [
      {
        projectId: '7242e5c3-b347-46b2-ac74-260c0463a21e',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ce1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ce2'
    },
    id: '0abfe0e3-0058-42fb-8cc3-827419daaa02',
    name: 'polkadot js plus',
    members: ['Kami Ekbatanifard'],
    projects: [
      {
        projectId: '595ce90b-43a3-4ac2-a2fb-3684f32fc729',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ce3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ce4'
    },
    id: 'e20ef1d9-2263-4047-8087-e669f14361b1',
    name: 'polkadot js plus',
    members: [
      '[Kami Ekbatanifard](https://www.linkedin.com/in/ekbatanifard)',
      '[Morteza Chalaki](https://www.linkedin.com/in/mchalaki)',
      '[Mehran Pourvahab](https://www.linkedin.com/in/mehran-pourvahab)',
      '[Martin Azarbad](https://www.linkedin.com/in/mehranazarbad)',
      '[Amir Ekbatani](https://www.linkedin.com/in/amir-ekbatani-4b7399201)'
    ],
    projects: [
      {
        projectId: 'fb5bfe32-9bee-40e3-b063-cad846724cbd',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ce5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ce6'
    },
    id: '20986386-a623-4b68-ba07-d006560e1257',
    name: 'kami ekbatanifard',
    members: ['Kami Ekbatanifard'],
    projects: [
      {
        projectId: 'cefcdf9c-694a-483e-8f58-b2431674dcf0',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ce7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ce8'
    },
    id: '5c513fe0-3bd6-4592-af61-b41e2d87f588',
    name: '',
    members: [],
    projects: [
      {
        projectId: '25f08aff-1a1a-4df8-8015-855fa16c47be',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ce9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cea'
    },
    id: 'a9db132e-317d-4fae-8658-a6049291e8f4',
    name: 'litentry',
    members: ['Hanwen Cheng', 'Yunjian Bian', 'Eric Zhang'],
    projects: [
      {
        projectId: '7b8ae8ca-b3a1-4cf1-9571-2339875ddee9',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ceb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cec'
    },
    id: '267f260c-78d1-49fd-b449-11c849a68583',
    name: 'jurimetric tecnologia ltda',
    members: [
      'Lohann Ferreira, Lead Blockchain Architect',
      'Leonardo Custodio, Blockchain Engineer',
      'Hanna Coutinho, iOS Developer',
      'Kawaljeet Singh, Flutter Developer',
      'Luiza Adena Engers, Product Manager',
      'Fabio Binder, Blockchain Engineer',
      'Gabriel Okura, Flutter Developer',
      'Bruno Pastre, Senior Flutter Developer'
    ],
    projects: [
      {
        projectId: 'ca162976-98ff-4243-ba77-5d6b80de8c03',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ced'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cee'
    },
    id: 'bea9cdd4-9d43-4d78-84c7-138fa3174923',
    name: '',
    members: ['Michael So', 'Zhongdan Wei'],
    projects: [
      {
        projectId: 'c272eadc-3bde-4c49-822a-cc12afd0acee',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cef'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cf0'
    },
    id: '79cd76eb-3b31-4367-9c8d-2ef611819286',
    name: 'keystone wallet team',
    members: [
      'Name of team leader: Lixin Liu, CEO',
      'Names of team members:',
      'Aaron Chen, CTO',
      'Bobby Wang, Head of BD',
      'Truda Hamzik, Head of Communications',
      'Jimmy cheung, Head of Design',
      'Shaun Guo, Project manager',
      'Bill Lee, Product manager'
    ],
    projects: [
      {
        projectId: '92109ecf-4ca3-4bc8-bcdf-88ebc46091a1',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cf1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cf2'
    },
    id: '82401794-f25f-40b1-886f-d2129210d2a6',
    name: 'ridone technologies',
    members: ['Mor GUEYE: Founder'],
    projects: [
      {
        projectId: '657276a9-478f-4538-8982-f3c0407ee55f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cf3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cf4'
    },
    id: 'cf3b009a-4f13-4bc5-ba4a-4f823503a75d',
    name: 'colorful notion',
    members: [],
    projects: [
      {
        projectId: '6a1cbbcf-5fd2-4d4e-9a30-6cd2369c55d0',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cf5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cf6'
    },
    id: '6391bb50-3a86-4ec6-ab1f-320c25eb1337',
    name: 'valletech ab',
    members: ['Rafael del Valle Lopez', 'David Bellhoff'],
    projects: [
      {
        projectId: '6143afe1-ffd0-4734-8f36-79fb85b8e1fd',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cf7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cf8'
    },
    id: 'b1788d96-2fd3-410e-a5da-9f5510d390e5',
    name: 'primis',
    members: [
      "Primis team has rich experience in the fields of the public chain, infrastructure, and defi. Team members' info will be released after reviewing."
    ],
    projects: [
      {
        projectId: '2fb29119-c11f-46af-8f99-6cd44e65002d',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cf9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cfa'
    },
    id: 'c0e3339e-17df-49d4-b7b4-0ab2a68f1ab6',
    name: 'ocamlmycaml',
    members: ['Kapil Sinha', 'Ayan Bandyopadhyay', 'Bradley Justice'],
    projects: [
      {
        projectId: '7b906364-e235-4ae9-957f-dbb4e86f562f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cfb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cfc'
    },
    id: '5d2ae194-24ea-4a55-bab5-7e325c0f416f',
    name: 'profond ai, corp.',
    members: [
      'CEO & Founder: Adhiguna Mahendra',
      'Product Lead & Founder: Ekki Rinaldi (Ekki)',
      'Full-stack Developer & Founder: Rizky Irfianto (Irfi)',
      'Database Engineer & Founder: Bagas Prakasa',
      'Full-stack Developer: Ade Yusup',
      'Smart Contract Engineer: Amajid Sinar (Jedi)',
      'Business Development: Vincent Salaka'
    ],
    projects: [
      {
        projectId: '286d51c1-a583-4c4e-bd2e-d4df1b97542c',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cfd'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44cfe'
    },
    id: '5b6c998d-2b5e-4f9d-836f-09755fdf04a3',
    name: 'qrucial dao',
    members: [
      'Web3 Architect: six / David Pethes - CTO of QRUCIAL, Founder of CCTF, Polkadot Head Ambassador of Eastern Europe',
      'Runtime Developer: Wigy / - Senior Rust developer, Ex-Parity substrate core developer',
      'Frontend Developer: kmildi / Ildiko Keleti - Senior Web3 Frontend developer'
    ],
    projects: [
      {
        projectId: '6cb7ffc4-bd0a-456f-8e6f-3a5e54a6c3b9',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44cff'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d00'
    },
    id: '415eebd0-df29-4735-85d5-472d04abce6f',
    name: 'qstn',
    members: [
      'Orrin Campbell – QSTN founder, CEO and blockchain architect who will be designing the workflow and user experience **team leader**',
      'Twitter - https://twitter.com/realorrin',
      'Instagram - https://instagram.com/realorrin',
      'Linkedin - https://linkedin.com/in/realorrin',
      'GitHub - https://github.com/@qstnus',
      'Anibal Suriel - QSTN Head of Legal **team member**',
      'Linkedin - https://linkedin.com/in/anibal-suriel-esq',
      'Lafi Raed – QSTN Lead Developer **team member**',
      'GitHub - https://github.com/shadow111',
      'Phillip Coleman - Entreprenuer In Residence **team member**',
      'Linkedin - https://www.linkedin.com/in/phillip-coleman-791b1475'
    ],
    projects: [
      {
        projectId: 'a7113609-c400-4689-a122-821ed1b1b36a',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d01'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d02'
    },
    id: '9ee66d1c-3cc1-4d97-b07b-dc3d1160a4c9',
    name: 'rainbowcity foundation',
    members: [
      'We have an experienced and powerful development team of 11 members. Here, we briefly introduce the members of our development team.',
      'RainbowKun: Team leader, Chief Architect, Product Manager，the overall builder of the Rainbowcity concept. The founder of the Rainbowcity Foundation, a strong believer and supporter of Satoshi Nakamoto and Bitcoin. He is fully committed to the construction of web3 ecology and Bit Civilization.',
      'Ivan Vian: Technical team leader, Full-stack developer, Rust and solidity full-time developer,10 years of technical experience, 5 years of blockchain development experience.',
      'Harris Wong: R&D team leader, Full-stack developer, Rust and solidity full-time developer,8 years of technical experience, 4 years of blockchain development experience.',
      'Alexunder: Full-stack developer, Rust and solidity full-time developer, 6 years of technical experience, 3 years of blockchain development experience.',
      'Dickenson: Full-stack developer, Rust and solidity full-time developer, 5 years of technical experience, 3 years of blockchain development experience.',
      'Sylvanus: Full-stack developer, Rust and solidity full-time developer, Senior front-end development engineer,5 years of technical experience, 2 years of blockchain development experience.',
      'Lawrence: Full-stack developer, Rust and solidity full-time developer ,4 years of technical experience, 2 years of blockchain development experience.',
      'Michael: Full-stack developer, Rust and solidity full-time developer, Senior front-end development engineer,4 years of technical experience, 2 years of blockchain development experience.',
      'Jasper: Assistant Product Manager, assist the architect in the planning and design of blockchain products, with 2 years of product design experience.',
      'Peke: Junior developer, new scholar of blockchain technology,Rust and solidity full-time developer, 2 years of technology development experience, 6 months of blockchain development experience.',
      'Echo: Chief UI designer, front-end designer, chief designer of various products of Rainbowcity. 5 years of senior design experience.'
    ],
    projects: [
      {
        projectId: 'abb97cb1-a24d-42ab-93b1-1013c89269d2',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d03'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d04'
    },
    id: '8c3e655e-42b7-4aea-a996-1ddc1fc439ba',
    name: '',
    members: [
      'Our team has a few part-time developers and their information can be provided in private. We can transfer one or more part-time developer into full-time if grant is received.'
    ],
    projects: [
      {
        projectId: '6bc5b4d2-b861-4a0f-ae58-59d48ce4f161',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d05'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d06'
    },
    id: '62480284-d3a9-4749-985c-b3c158b7a797',
    name: 'redstone network',
    members: ['Bin Guo', 'Li Smith', 'yiwei Shi', 'Leon'],
    projects: [
      {
        projectId: 'a4944206-619f-4418-b6ba-cb0fdfccfba1',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d07'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d08'
    },
    id: '4d8dfba4-2ff5-4195-a332-bf9d8cebb866',
    name: 'relationlabs',
    members: [
      'Jessica Chang  Founder',
      'Yann Ren  CTO',
      'Santry Huang  CMO',
      'Ben Zhang  Chief Software Architect',
      'Joe Guo  CPO'
    ],
    projects: [
      {
        projectId: 'e3b3524f-793d-42b5-a658-20d979242462',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d09'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d0a'
    },
    id: 'c7abaa47-8f74-41b2-bc3c-e39508d037fc',
    name: 'neopower',
    members: [
      '**Brian Sasbon** (Co-Founder & CEO) - [Linkedin](https://www.linkedin.com/in/briansasbon/)',
      '**Pablo Corrado** (Co-Founder & CTO) - [Linkedin](https://www.linkedin.com/in/corradopablom/)',
      '**Hernán Hermida** (CGO) - [Twitter](https://twitter.com/MilsteinmAb)'
    ],
    projects: [
      {
        projectId: '15d8f069-de91-411b-9d8f-20ea83452592',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d0b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d0c'
    },
    id: 'f0af7db9-f54a-4188-adcf-e4738362de1e',
    name: 'bela supernova',
    members: [
      'Sergey Cymbal, MBA, CEO at Bela Supernova d.o.o',
      'Dmitrii Putilov, Blockchain Department Director at Bela Supernova d.o.o',
      'Ilia Shavrin, Full stack software developer at Bela Supernova d.o.o',
      'Anton Shramko, Full stack software developer at Bela Supernova d.o.o',
      'Ksenia Baranova, QA Lead at Bela Supernova d.o.o',
      'Alexey Vexin, Project Manager at Bela Supernova d.o.o',
      'Anton Borisov, DevOps Engineer at Bela Supernova d.o.o'
    ],
    projects: [
      {
        projectId: 'f3cb6ddd-e31c-48c4-b592-c3e6245485c3',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d0d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d0e'
    },
    id: '04433555-f248-4a75-9987-fde9c490e2df',
    name: 'bela supernova',
    members: [
      'Sergey Cymbal, MBA, CEO at Bela Supernova d.o.o',
      'Dmitrii Putilov, Blockchain Department Director at Bela Supernova d.o.o',
      'Ilia Shavrin, Full stack software developer at Bela Supernova d.o.o',
      'Anton Shramko, Full stack software developer at Bela Supernova d.o.o',
      'Ksenia Baranova, QA Lead at Bela Supernova d.o.o',
      'Alexey Vexin, Project Manager at Bela Supernova d.o.o',
      'Anton Borisov, DevOps Engineer at Bela Supernova d.o.o'
    ],
    projects: [
      {
        projectId: 'fcc3f069-db2f-47d7-9d60-a1bc77713e91',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d0f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d10'
    },
    id: '9127ac22-535d-4cb9-b3da-c507d695810f',
    name: '',
    members: [],
    projects: [
      {
        projectId: '8593365b-8181-4cea-9d6f-b1f2e4b96089',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d11'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d12'
    },
    id: '95de978c-dbab-493f-9836-8b93e0d10437',
    name: 'seor',
    members: [
      'Winnie Wen - team leader',
      'Yingxuan Li - full-stack engineer',
      'Huaiyu Wang - full-stack engineer'
    ],
    projects: [
      {
        projectId: 'da695059-43b2-4b69-8ec2-d7171c93b5cf',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d13'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d14'
    },
    id: 'd744f1b7-e457-4b72-9269-ebd67bc72ef2',
    name: 'saas3 lab',
    members: [
      'The core team members are top Ph.Ds in computer science who are technical and experienced.',
      '**Steven** is a Ph.D. in artificial intelligence and vice president of SaaS3 to build dRuntime on p2p network and financing-related works. Currently, he is an blockchain researcher and blockchain developer. He has written computer programs since he was 14 and got many hackathon awards in the past.',
      '**Rocky** is the CTO of SaaS3 undertakes SaaS3 protocol design. Currently, he is the presidential postdoctoral fellow in NTU and chief scientist in Singapore Smart City Project. Previously, he was an AI researcher at UCB. Besides, he is also a visiting lecture professor of NTU, NUS. He is also the winner of over 10 hackathons.',
      '**Nael** is the CPO of SaaS3 to guarantee the high-quality features of dRuntime. He also helps SaaS3 to find more partners to build communities. Besides, he is the founder of Chapa which is an online payment gateway with 30k customers that empowers small merchants and large businesses to accept digital payments from their customers via their APIs. Previously, he was the manager of crypto community manager and market researcher in world-leading companies.',
      '**Israel** is the core developer of SaaS3 and undertakes the development of the creator submission network. Besides, he is the CTO of Chapa. He is the founder of Colimo City. Previously, He was the AI researcher in Google Brain, MILA of Turing Award Winner Yoshua Bengio’s Lab. He has 4 years of experience in AI development.',
      '**Tianyi, Song** is the core developer of SaaS3, and a former dev team manager of SkyCloud Co., Ltd. He is an expert in cloud computing development and has a lot of experience in bridging web2 to web3.'
    ],
    projects: [
      {
        projectId: '28d6a819-8837-4728-9817-2f1197eafa37',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d15'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d16'
    },
    id: 'd96491ff-5a7e-4ede-a5cc-6782840cc738',
    name: 'coinfabrik (nektra s.a)',
    members: [
      'Ariel Wassbein, Head of Reaseach',
      'Valeria Caracciolo, Business Develpoment',
      "CoinFabrik's development and auditing team - when required."
    ],
    projects: [
      {
        projectId: 'd699129e-f546-4d83-ad26-b41a7a61ff81',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d17'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d18'
    },
    id: '9b53a909-611e-474a-af3c-1564990e0a99',
    name: 'coinfabrik (nektra s.a)',
    members: [
      'Ariel Wassbein, Head of Reaseach',
      'Valeria Caracciolo, Business Develpoment',
      "CoinFabrik's development and auditing team - when required."
    ],
    projects: [
      {
        projectId: 'f7dbc8ca-8b81-48da-a001-7016741d1f20',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d19'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d1a'
    },
    id: '125d0268-2a4d-4349-8ea4-26acc81d0a42',
    name: 'antier solutions',
    members: [
      'Ankit Bhatia',
      'Parth Chaudhary',
      'Niketan Saini',
      'Nitin Sharma',
      'Vishant Mittal',
      'Shubham Aswal',
      'Abhishek Dhiman'
    ],
    projects: [
      {
        projectId: '71448214-8383-4199-9d73-a2fa06ed531a',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d1b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d1c'
    },
    id: '9a5f7434-9622-4775-80a8-dddb1d990ce6',
    name: 'reaudito',
    members: [
      'Amiya Behera (Developer)',
      'Soumya Ranjan Behera (Developer)',
      'Mahesh Sahoo (Advisor)'
    ],
    projects: [
      {
        projectId: '2f421638-b13c-41d0-8a01-ef206ca6acf1',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d1d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d1e'
    },
    id: '1f50e6b9-5a2a-4466-8ef3-dd26028c490c',
    name: 'societal labs ltd.',
    members: ['Graeme Fox', 'Tyler Gellatly', 'Max Kudinov'],
    projects: [
      {
        projectId: 'e2443f25-beff-4d41-8568-3cfaa863f2e3',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d1f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d20'
    },
    id: '57d6c037-cd16-44ea-bbd2-6725527ce790',
    name: '',
    members: [],
    projects: [
      {
        projectId: '4721af19-5d25-41b1-b5d6-c1ca08b5c39e',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d21'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d22'
    },
    id: 'bb7956b3-093d-4781-b92d-31d86f50e103',
    name: '',
    members: [
      'Nathan Varty (Full-Time, Founder, CEO)',
      'Žiga Flis (Full-Time, Founder, Senior blockchain Developer & Analyst)',
      'Anas Sayed (Full-Time, Founder, CTO, Development Manager, Architecture, Full Network Stack Implementation)',
      'Alexy Petrunin (Full-Time, Senior Backend Developer)',
      'Dr. Alfie Zhao (Advisor, Hardware Design)',
      'Pierre Laurent (Strategic Advisor, Blockchain and crypto Enthusiast)'
    ],
    projects: [
      {
        projectId: '726fdf8f-b641-4f92-aee2-012bc45180b9',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d23'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d24'
    },
    id: '603f0a7f-a965-4b78-87b9-180d67349823',
    name: '',
    members: [
      'Hyungsuk Kang, team leader',
      'Legal Structure',
      'Standard protocol is being made with Apache 2.0 license. Legal entity is being built in Singapore right now.',
      "Team's experience",
      "Hyungsuk is Plasm network's core developer. He developed Subswap, AMM in substrate, and he wants to extend it to make the next finance in Polkadot ecosytem using XCM module and collateral debt position. He is also kernel and tendermint fellow.",
      'Team Code Repos',
      '<https://github.com/digitalnativeinc/standard-substrate>',
      'Team LinkedIn Profiles',
      '<https://www.linkedin.com/in/hyungsukkang>',
      'Development Roadmap :nut_and_bolt:',
      'Overview',
      'As a synthetic asset protocol,Standard protocol heavily depends on the oracle for maintaining the system. Oracles should be formed in a sustainable way to be motivated for people to provide computing power.',
      'To reward the network participant, Standard protocol proposes new PoS reward system by splitting block rewards from block validators to oracle providers.',
      '**Total Estimated Duration:** 2 months',
      '**Full-time equivalent (FTE):**  1',
      '**Total Costs:** 1000DAI',
      '**Payment Address:** `0xd2234E506862991ADA75f930c6D79B4236e3E265`',
      '**Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/244#issuecomment-1014764739)',
      'Milestone 1 - Middleware for data submission and runtime integration',
      '**Estimated Duration:** 1 month',
      '**FTE:**  1',
      '**Costs:** 500DAI',
      'This milestone focuses on building a oracle provider client middleware which submits off-chain data to the blockchain. An authoritive module for testing connection between oracle provider and the protocol is provided in this phase. Then, Standard will extend the oracle module to distribute reward from session callback connected between `pallet_session` and `pallet_staking`. When oracle provider submits outliers or does not submit values that are out of sync from other oracle providers, a slash can be applied from anyone to report. Outliers are detected with [IQR method](https://online.stat.psu.edu/stat200/lesson/3/3.2).',
      'Oracle provider client',
      'As chainlink and other oracle solution has a middleware or submitting client from off-chain, Standard also has its oracle client. Oracle provider client is actually a bot that uses [polkadot-js api](https://github.com/scs/substrate-api-client/blob/master/tutorials/api-client-tutorial/src/main.rs) to submit information in oracle module in a certain periods(e.g. 2 hour, 4 hour). For example, to send an oracle xt from an oracle client,',
      '// Loads config',
      'import LumenConfig from "@digitalnative/lumen-config";',
      '// Fetch functions for acquiring off-chain data',
      'import fetchData from "@digitalnative/lumen-fetch";',
      '// Submit function for submitting data to on-chain',
      'import submitData from "@digitalnative/lumen-submit";',
      '// Async Apis for polkadot',
      'import { ApiPromise, WsProvider } from "@polkadot/api";',
      '',
      'const runClient = async (dir) => {',
      '  const cron = require("node-cron");',
      '  const config = LumenConfig.default({ dir });',
      '  const { events } = config;',
      '  events.emit("client:start");',
      '  const api = await polkadotApi(config);',
      '  // register cron job to execute in every minute',
      '  cron.schedule("*/90 * * * * *", async function() {',
      '    events.emit("client:next");',
      '    // fetch data',
      '    const data = await fetchData(false, config);',
      '    // Submit data',
      '    await submitData(data, config, api);',
      '  });',
      '  // Declare cron job has been set',
      '  events.emit("client:init");',
      '};',
      '',
      'export default runClient;',
      '',
      'async function polkadotApi(config: LumenConfig) {',
      '  const provider = new WsProvider(config.rpc);',
      '  const definitions = require("@digitalnative/type-definitions/opportunity");',
      '  let types = definitions.types[0].types;',
      '  const api = await new ApiPromise({',
      '    provider,',
      '    types,',
      '  });',
      '  await api.isReady;',
      '  return api;',
      '}',
      '',
      'Here is the overall workflow for the client operation, and add-ons and options are expected to be added in each function in the library.',
      'Unit tests',
      'Standard protocol applies test driven development(TDD) on building runtime modules for the grant.',
      'Here are unit tests that will be done along the development in the runtime module.',
      'Oracle',
      'oracle in milestone 1 should achieve:',
      'Only Root account can register oracle providers for slots to submit off-chain data',
      'If slots are not open for an entity in the storage, a new oracle provider initializes the slot with the oracle provider count.',
      'When the provider is designated for a slot, it can only submit data for a designated slot',
      'If one reports slashing for the slot, runtime validates the slot data with iqr rule and remove provider and set the value as zero if the value violates it.',
      'zero values are excluded and the median is calculated in both even and odd cases',
      'To check this, oracle provider module should have these test functions:',
      '`add_oracle_provider_works`: Oracle should be added by the root account for now until the module includes session callback between `pallet-staking` and `pallet-session` as a impl of `SessionManager`.',
      '`oracle_report_works`: Oracle provider should only be able to submit data only in designated slot, and create new batch if the price data has not been reported yet.',
      '`oracle_slash_works`: when one reports slashing for oracle provider in a slot, the runtime should run iqr rule to find out whether the slot value violates the rule from the collected oracle data batch.',
      '`oracle_excludes_zeros_and_return_median`: Oracle runtime should exclude zero-values since it means the data is empty or not available due to violation. median should be returned from the remainder of filtered batch.',
      '`oracle_excludes_zeros_and_return_median_even`: the purpose is also same with the previous test function, but the batch length is even.',
      'Number',
      'Deliverable',
      'Specification',
      '0a.',
      'License',
      'Apache 2.0',
      '0b.',
      'Documentation',
      'Documentation will introduce how to install the oracle and participate to get block reward',
      '1.',
      'Oracle client',
      'Oracle client to receive information from external sources then submit information regularly to substrate runtime',
      '2.',
      'Modified Oracle module',
      'Oracle module to register operators and batch',
      '3.',
      'Unit test codes',
      'Unit test codes in `tests.rs` in each runtime module',
      '4.',
      'Npm binary',
      'We will provide a npm binary for oracle providers to install and run an oracle client',
      '5.',
      'Dockerfile',
      'Dockerfile for running Standard protocol binary will be provided',
      'Milestone 2 - PoS oracle reward distribution',
      '**Estimated Duration:** 1 month',
      '**FTE:**  1',
      '**Costs:** 500DAI',
      'This milestone focuses on including session callbacks related to sessions in implementations of `SessionManager` trait in `pallet-staking` module, and all related module will be tested with its separate implementation of `SessionManager` connected to `pallet-session` in a mock environment.',
      'Vault',
      'Vault in milestone 2 should have a trait for dependency Injection:',
      'pub trait RebaseCallback {',
      '    fn rebase(); // where it initiates rebase in the session',
      '}',
      '',
      "The dependency injection will take place in the `pallet-staking`'s config as well as the oracle",
      'impl pallet_custom_staking::Config for Runtime{',
      '    ...',
      '    type Rebase = RebaseCallback; // for vault rebase',
      '    type Oracle = OracleCallback; // for oracle callback used as same as staking callbacks',
      '}',
      '',
      "where the it will be included in `pallet-staking` module's `SessionManager` trait implementation in `end_session` function like:",
      '/// In this implementation `new_session(session)` must be called before `end_session(session-1)`',
      '/// i.e. the new session must be planned before the ending of the previous session.',
      '///',
      '/// Once the first new_session is planned, all session must start and then end in order, though',
      '/// some session can lag in between the newest session planned and the latest session started.',
      'impl<T: Config> pallet_session::SessionManager<T::AccountId> for Module<T> {',
      ' fn new_session(new_index: SessionIndex) -> Option<Vec<T::AccountId>> {',
      '  frame_support::debug::native::trace!(',
      '   target: LOG_TARGET,',
      '   "[{}] planning new_session({})",',
      '   <frame_system::Module<T>>::block_number(),',
      '   new_index',
      '  );',
      '  Self::new_session(new_index)',
      ' }',
      ' fn start_session(start_index: SessionIndex) {',
      '  frame_support::debug::native::trace!(',
      '   target: LOG_TARGET,',
      '   "[{}] starting start_session({})",',
      '   <frame_system::Module<T>>::block_number(),',
      '   start_index',
      '  );',
      '  Self::start_session(start_index)',
      ' }',
      ' fn end_session(end_index: SessionIndex) {',
      '  frame_support::debug::native::trace!(',
      '   target: LOG_TARGET,',
      '   "[{}] ending end_session({}) with rebase",',
      '   <frame_system::Module<T>>::block_number(),',
      '   end_index',
      '  );',
      '                T::Rebase::rebase();',
      '  Self::end_session(end_index)',
      ' }',
      '}',
      '',
      'vault in milestone 2 should achieve:',
      'In each era, vault module should bring registered stablecoin price from oracle module with its asset id (1) and rebase its total supply to `(circulating supply) / (oracle price)` in order to satisfy the ratio `(circulating supply) : (oracle price) = (total supply) : (1.0(USD) in decimal configured in the substrate chain)`.',
      "Vault module should burn or mint stablecoin's module account's balance according to rebased balance",
      'Alert community when total supply cannot be decreased anymore to keep the ratio(in case where decreased total supply exceeds circulating supply) in order to propose emergency shutdown or take further actions(e.g. issuing bonds, using community vault from stability fee to stabilize the ratio)',
      'To check this, vault module should have these test functions:',
      '`supply_is_rebased_in_each_era`: Using an oracle module, set an oracle price and start an era so that the vault module can executes rebase mechanism. The total supply of the stablecoin is checked whether it changed to the right amount.',
      '`report_emergency`: check whether vault module reports when the rebased next total supply is less than the circulating supply.',
      'Oracle',
      'oracle will replicate the `pallet-staking` module regarding election of the oracle provider and the reward logic. However, there will be difference in how the elected provider(or validator) is allocated to the slot. The module only accepts the stash account to submit oracle data once `validate()` tx has been finalized.',
      'For example, there will be addition in the `select_and_update_validators` function code',
      '/// Select the new validator set at the end of the era.',
      ' ///',
      ' /// Runs [`try_do_phragmen`] and updates the following storage items:',
      ' /// - [`EraElectionStatus`]: with `None`.',
      ' /// - [`ErasStakers`]: with the new staker set.',
      ' /// - [`ErasStakersClipped`].',
      ' /// - [`ErasValidatorPrefs`].',
      ' /// - [`ErasTotalStake`]: with the new total stake.',
      ' /// - [`SnapshotValidators`] and [`SnapshotNominators`] are both removed.',
      ' ///',
      ' /// Internally, [`QueuedElected`], snapshots and [`QueuedScore`] are also consumed.',
      ' ///',
      ' /// If the election has been successful, It passes the new set upwards.',
      ' ///',
      ' /// This should only be called at the end of an era.',
      ' fn select_and_update_validators(current_era: EraIndex) -> Option<Vec<T::AccountId>> {',
      '  if let Some(ElectionResult::<T::AccountId, BalanceOf<T>> {',
      '   elected_stashes,',
      '   exposures,',
      '   compute,',
      '  }) = Self::try_do_election() {',
      '   // Totally close the election round and data.',
      '   Self::close_election_window();',
      '',
      '   // Populate Stakers and write slot stake.',
      '   let mut total_stake: BalanceOf<T> = Zero::zero();',
      '   exposures.into_iter().for_each(|(stash, exposure)| {',
      '    total_stake = total_stake.saturating_add(exposure.total);',
      '    <ErasStakers<T>>::insert(current_era, &stash, &exposure);',
      '',
      '    let mut exposure_clipped = exposure;',
      '    let clipped_max_len = T::MaxNominatorRewardedPerValidator::get() as usize;',
      '    if exposure_clipped.others.len() > clipped_max_len {',
      '     exposure_clipped.others.sort_by(|a, b| a.value.cmp(&b.value).reverse());',
      '     exposure_clipped.others.truncate(clipped_max_len);',
      '    }',
      '    <ErasStakersClipped<T>>::insert(&current_era, &stash, exposure_clipped);',
      '   });',
      '',
      '   // Insert current era staking information',
      '   <ErasTotalStake<T>>::insert(&current_era, total_stake);',
      '',
      '   // collect the pref of all winners',
      '   for (i, stash) in elected_stashes.iter().enumerate() {',
      '                <Slots<T>>::insert(i, stash.clone()); // allocating slots for elected oracle provider',
      '    let pref = Self::validators(stash);',
      '    <ErasValidatorPrefs<T>>::insert(&current_era, stash, pref);',
      '   }',
      '            ',
      '',
      '   // emit event',
      '   Self::deposit_event(RawEvent::StakingElection(compute));',
      '',
      '   log!(',
      '    info,',
      '    "💸 new validator set of size {:?} has been elected via {:?} for era {:?}",',
      '    elected_stashes.len(),',
      '    compute,',
      '    current_era,',
      '   );',
      '',
      '   Some(elected_stashes)',
      '  } else {',
      '   None',
      '  }',
      ' }',
      '',
      'Also, slash module function should include verifier from milestone 1.',
      '/// Slash the validator for a given amount of balance. This can grow the value',
      ' /// of the slash in the case that the validator has less than `minimum_balance`',
      ' /// active funds. Returns the amount of funds actually slashed.',
      ' ///',
      ' /// Slashes from `active` funds first, and then `unlocking`, starting with the',
      ' /// chunks that are closest to unlocking.',
      ' fn slash(',
      '  &mut self,',
      '  mut value: Balance,',
      '  minimum_balance: Balance,',
      '        slot: SlotIndex,',
      ' ) -> Balance {',
      '  let batch = Prices::get(_id).unwrap();',
      '  let value = batch[_slot as usize];',
      '  let det = Self::determine_outlier(batch, value);',
      '  ensure!(det, Error::<T>::NotOutlier);',
      '  let pre_total = self.total;',
      '  let total = &mut self.total;',
      '  let active = &mut self.active;',
      '',
      '  let slash_out_of = |',
      '   total_remaining: &mut Balance,',
      '   target: &mut Balance,',
      '   value: &mut Balance,',
      '  | {',
      '   let mut slash_from_target = (*value).min(*target);',
      '',
      '   if !slash_from_target.is_zero() {',
      '    *target -= slash_from_target;',
      '',
      "    // don't leave a dust balance in the staking system.",
      '    if *target <= minimum_balance {',
      '     slash_from_target += *target;',
      '     *value += sp_std::mem::replace(target, Zero::zero());',
      '    }',
      '',
      '    *total_remaining = total_remaining.saturating_sub(slash_from_target);',
      '    *value -= slash_from_target;',
      '   }',
      '  };',
      '',
      '  slash_out_of(total, active, &mut value);',
      '',
      '  let i = self.unlocking.iter_mut()',
      '   .map(|chunk| {',
      '    slash_out_of(total, &mut chunk.value, &mut value);',
      '    chunk.value',
      '   })',
      '   .take_while(|value| value.is_zero()) // take all fully-consumed chunks out.',
      '   .count();',
      '',
      '  // kill all drained chunks.',
      '  let _ = self.unlocking.drain(..i);',
      '',
      '  pre_total.saturating_sub(*total)',
      ' }',
      '}',
      '',
      'Unit test',
      "Unit tests are all identical with the staking module's test in that all logics are identical regarding slash, reward and validation.",
      'Number',
      'Deliverable',
      'Specification',
      '0a.',
      'License',
      'Apache 2.0',
      '0c.',
      'Documentation',
      'Documentation will introduce how to nominate',
      '1.',
      'Vault module',
      'Vault module will declare dependancy injection trait to use session callback in `pallet-staking` module and the test code with separate `SessionManager` implementation will be provided',
      '2.',
      'Modified Staking module',
      '`pallet_staking` module which has two config trait for rebase callback and oracle staking callback will be provided',
      '3.',
      'Oracle module',
      'same as staking module including curve integration but difference in slot allocation and separate slashing verifier will be included',
      '4.',
      'Unit test code',
      'Unit test codes in `tests.rs` in each runtime module with separate `SessionManager` implementation',
      '5.',
      'Docker',
      'We will provide a dockerfile to demonstrate the full functionality of Standard protocol chain',
      'Future Plans',
      'Add more prices to add from the oracle (e.g. stock prices, commodities, etc) provider',
      'Full function test on Kusama/Rococo.',
      'Full function test on Polkadot.',
      'Additional Information :heavy_plus_sign:'
    ],
    projects: [
      {
        projectId: '2c75a8fd-732c-4043-ac5c-a0728f654c6f',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d25'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d26'
    },
    id: '7ae6f650-3e83-45b9-9cdd-a43bf976f2c4',
    name: '',
    members: ['Poria - Full-stack Developer'],
    projects: [
      {
        projectId: '5af95fc3-1084-42e1-9667-6c3055073571',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d27'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d28'
    },
    id: '2c6c3123-9b91-459c-a8b1-35bc7af3d66e',
    name: 'genesisdao by deep ink ventures gmbh',
    members: [],
    projects: [
      {
        projectId: '5d274714-c896-49b5-bd07-c2087ec5103a',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d29'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d2a'
    },
    id: '5347ac3d-8ec7-43d4-926c-aed769cd0bf7',
    name: '[subdao labs](https://github.com/subdao-network)',
    members: [
      'Qiang - CTO/Project Lead',
      'Marvin Tong - Product Director',
      'Dajun - System Architect/Substrate Developer',
      'John Xie - Full-stack Developer',
      'Tallone - Full-stack Developer'
    ],
    projects: [
      {
        projectId: 'ddbe1354-c6b3-4545-aeab-b8b33b646318',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d2b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d2c'
    },
    id: 'cb5bf239-eb34-4100-9b2e-76b81b2d95d5',
    name: '',
    members: [],
    projects: [
      {
        projectId: '1cda8d9d-4ef4-4559-ba96-526709dbdc6d',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d2d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d2e'
    },
    id: 'a86c3041-398b-47fb-a2ed-dde2ed23f43c',
    name: '[subdao labs](https://github.com/subdao-network)',
    members: [
      'Qiang - CTO/Project Lead',
      'Marvin Tong - Product Director',
      'Dajun - System Architect/Substrate Developer'
    ],
    projects: [
      {
        projectId: 'c439547e-5159-4752-bd29-e8b075022898',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d2f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d30'
    },
    id: '0fce146c-ba04-4b53-b76f-36c9692b0394',
    name: '[subgame-network](https://github.com/subgame-network)',
    members: [
      'Shanfeng xie - Project Lead/Management & Research',
      'QiangKai - Full-stack Developer',
      'ZheSheng Zhang - Front End Developer'
    ],
    projects: [
      {
        projectId: '0a42d8f5-cc6c-45c6-92b1-1cf58b99727c',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d31'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d32'
    },
    id: 'ee2f5f48-15ba-4996-80ac-edca59546a78',
    name: '[subgame-network](https://github.com/subgame-network)',
    members: [
      'Shanfeng xie - Project Lead/Management & Research',
      'QiangKai - Full-stack Developer',
      'ZheSheng Zhang - Front End Developer'
    ],
    projects: [
      {
        projectId: '7cb6bcd5-40cc-45e3-b5e2-bcb18912d8d9',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d33'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d34'
    },
    id: '7a3ab697-2e9c-41cb-a648-86359af0c4e2',
    name: '[tdsoftware](https://www.tdsoftware.de/)',
    members: [
      'Sascha Dobschal',
      'Anika Oertel',
      'Markus Fitzner',
      'Toni Frotscher',
      'Sosan Neikbeen'
    ],
    projects: [
      {
        projectId: '8088a01f-1356-45b0-97bd-2a9491e72ac6',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d35'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d36'
    },
    id: 'd1f23828-75a7-4370-b6e2-50d605d6577d',
    name: 'oxydev',
    members: [
      'Name of team leader',
      '  Saber Zafarpoor (Product manager & Blockchain Designer)',
      '  Hadi Esna (CTO & Blockchain Designer)',
      'Names of team members\t',
      '  Ahmad Salimi(Software Engineer)',
      '  Alireza Ilami(Data Analyst)',
      '  Sepehr Kianian(Front-End developer & Blockchain developer)',
      '  Amir Sadra Abdolahi(Front-End developer & Blockchain developer)',
      '  Yasaman Shad(Graphic Designer & UX)',
      '  ...(we will hire blockchain researchers and UI developers to enhance the quality)'
    ],
    projects: [
      {
        projectId: '84ef2bb8-42ec-494c-868d-a1f71d7b0165',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d37'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d38'
    },
    id: 'cbb59445-24a3-4de8-8f9b-ffd831aa84d6',
    name: '[limechain](https://github.com/limechain)',
    members: ['Daniel Ivanov', 'Dastanbek Samatov', 'Martin Petkov'],
    projects: [
      {
        projectId: 'ce08ab79-ed27-4fd9-a766-5cd6db6ba9f3',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d39'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d3a'
    },
    id: '06a66874-359b-4bf6-b4b8-526ca9652e8b',
    name: 'eiger',
    members: [
      '**Roberts Ivanovs** ([Github](https://github.com/roberts-ivanovs), [Linkedin](https://www.linkedin.com/in/roberts-ivanovs-3b24b6159/)) is a Rust Software Engineer at Eiger. He has extensive experience using Rust for performance-sensitive backend work, the IoT industry, web development, and Solidity/dApp development.',
      '**Tomek Piotrowski** ([Github](https://github.com/tomekpiotrowski), [Linkedin](https://www.linkedin.com/in/tomasz-piotrowski-17466b4/)) Software Engineer at Eiger, specializing in Rust-based applications. With a strong background in software development, he has spent recent years focusing on the Rust programming language. At Eiger, Tomasz actively contributes to the advancement of Rust-based blockchains and their ecosystems.'
    ],
    projects: [
      {
        projectId: '643df601-50f6-4818-a4bf-cecede51bbcf',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d3b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d3c'
    },
    id: '9c6ad68f-4ec5-4274-871b-b26a6967e8b4',
    name: 'sydtek',
    members: [
      'Justin Goldston, PhD',
      'Justyna Osowska',
      'Jordi Chaffer',
      'Suyeon Han',
      'Assune Cotlage',
      'Joshua Waller',
      'Charles von Goins II'
    ],
    projects: [
      {
        projectId: '6edc6ecc-a705-4d16-b44b-beffeae2241f',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d3d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d3e'
    },
    id: 'f9583e9a-3907-4d9c-9110-3c834fb3a669',
    name: 'syncra',
    members: [
      '**Name of team leader:** Przemysław Paczoski',
      '**Names of team members:** Paweł Kowalewski, Krzysztof Kuczma, Jan Kuczma'
    ],
    projects: [
      {
        projectId: '3b1de630-8d72-4076-8797-d4404a9f6d9f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d3f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d40'
    },
    id: '47ccbd8c-a0c8-45a7-b45f-9a486e388575',
    name: '[nextoken technology](https://github.com/nextokentech)',
    members: [
      'Leo Yu (executive, finance and product)',
      'Fanghao Yang (research, engineering, and technology development)',
      'Oscar Wang (operation and human resource)',
      'Xingqiu Yuan (chief scientist)',
      'Jake Jian (consultant, strategy and data science)',
      'Dan Yin (senior software engineer)'
    ],
    projects: [
      {
        projectId: '96be5cf8-09d3-4f64-8713-b8079daa7d1d',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d41'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d42'
    },
    id: '3c08db53-5c76-46a2-88de-9f4817eac46b',
    name: 'tellor inc',
    members: [
      'Our team consists of 7 developers and 3 non-technical team members.  3 of us are cofounders - Brenda Loya CEO, Nick Fett CTO, and Michael Zemrose CSO.',
      'The developers of Tellor have years of blockchain specific coding experience.'
    ],
    projects: [
      {
        projectId: '74eb2560-6464-44ed-884e-ca65f64a81c2',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d43'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d44'
    },
    id: 'deb7aff6-9c60-484b-bde3-35932a3fffd9',
    name: 'dego-labs',
    members: [
      '[dego-labs](https://github.com/dego-labs)',
      'TeamWebsite',
      '[https://dego.finance/](https://dego.finance/)',
      '[https://www.treasureland.market/](https://www.treasureland.market/)',
      "Team's experience",
      'Manyofourteammatescome from gaming industries with more than 10 years of experience in the industry and, in the year of 2018, officially join us at theblockchain industry. Many Dapps have beenmade oneth, eos,tron,iostsince then and enriched our blockchain developing experience.',
      'Team Code Repos',
      '[https://github.co](https://github.com/dego-labs/dego-nft)[m](https://github.com/dego-labs/dego-nft)[/d](https://github.com/dego-labs/dego-nft)[e](https://github.com/dego-labs/dego-nft)[go-labs/dego-nft](https://github.com/dego-labs/dego-nft)',
      '[http](https://github.com/dego-labs/erc908)[s](https://github.com/dego-labs/erc908)[://github.com/dego-labs/erc908](https://github.com/dego-labs/erc908)'
    ],
    projects: [
      {
        projectId: '75789009-c7e5-4bd1-ac09-6a0f4d2eba7d',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d45'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d46'
    },
    id: 'decde1e9-91ee-403b-bf55-094d2923d28a',
    name: 'umc labs',
    members: ['Gala - CTO/Project Lead', 'Davies - Developer'],
    projects: [
      {
        projectId: 'a504c3dd-ecb6-47d4-867a-bc1049844b4b',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d47'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d48'
    },
    id: 'f2720eec-0f4b-48e0-acba-4e2f8872e9e4',
    name: '[p2p.org](http://p2p.org/) validator',
    members: [
      'Aleksandr Tishin, product manager, https://github.com/avtishin',
      'Anton Zhbanov, tech team lead, https://github.com/base1217',
      'Sergey Radchenko, SRE Engineer and Developer, https://github.com/SergeyRadchenkoP2P',
      'Boris Simonov, SRE Engineer and Developer, https://github.com/xxbbxb',
      'Team Code Repos',
      'Project repo:',
      'https://github.com/p2p-org/polkadot_monitoring_service',
      "Team's experience",
      'The P2P development team, part of the reputable validator and non-custodial staking platform P2P, is the main driving force behind our monitoring solution. P2P is well-known for its expertise in validating Substrate-based networks such as Polkadot, Kusama, Moonbeam, and Moonriver, as well as other networks like Solana (Lido in Solana) and Cosmos (Neutron).',
      'As a team, we have already successfully completed a grant for the development of [Multiblockchain ETL](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/Multiblockchain%20ETL.md), an indexer specifically designed for substrate-based networks. This indexer allows for the efficient indexing of events, extrinsics, blocks, and staking data from the on-chain environment. We actively maintain and update the Multiblockchain ETL indexer, ensuring its reliability and functionality. The code for this project is publicly available on [GitHub](https://github.com/p2p-org/polkadot-profit-transformer).',
      "Given P2P's established expertise and solid reputation in the industry, we are well-equipped to carry out further development of our monitoring tool. Our focus remains on delivering a monitoring solution that brings significant benefits to the community, promoting transparency and empowering validator operators and stakeholders."
    ],
    projects: [
      {
        projectId: '847631dc-05f4-4d7e-88e6-a46be6e7fe73',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d49'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d4a'
    },
    id: '21fe60e1-dfb2-4760-a7c0-5e1771e5fcf3',
    name: 'web3box labs',
    members: [
      'Name of team leader: Web3Box Founder Eric',
      'Names of team members: Web3Box Marketing Director Andrew',
      'More devs would be announced after passing the review'
    ],
    projects: [
      {
        projectId: '787f2611-d8f8-4c87-b998-a5b46c5bf544',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d4b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d4c'
    },
    id: 'f5a21f8f-d79d-4462-be19-657b673f24d3',
    name: 'web3go',
    members: [
      'Hao Ding: VP of Litentry. MSc of University Stuttgart.',
      'Yifei Wu: Substrate lead of Litentry. PhD of Tokyo University.',
      'Han Zhao: Substrate core dev of litentry. MSc of University Stuttgart.',
      'Minqi Wang: Backend and contract developer. Master of University Columbia.',
      'Yunjian Bian: Software Architect of Litentry. Bachelor of University Suzhou.'
    ],
    projects: [
      {
        projectId: '85de4a5b-d099-4bb8-b626-4345b67af8bb',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d4d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d4e'
    },
    id: 'fdb6b7e4-95bc-4da5-aa3e-3c9baecb4953',
    name: 'fennel labs',
    members: [
      'Sean Batzel',
      'Isaac Adams',
      'Ed Hertzog',
      'Jan Eberle',
      'Mateusz Plaza'
    ],
    projects: [
      {
        projectId: '3540ca7c-aaef-4d64-95ad-eab18c23bf3c',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d4f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d50'
    },
    id: 'd8da66d3-8799-47ff-bae7-6c8b089fcb52',
    name: '',
    members: [
      '**Wenzhu liang**',
      '7 years experience in front-end development HTML、CSS、javascript、Vue、React、Nodejs familiar with Rust,substrate development, project management',
      '**Zhijie Jiang**',
      'Rich programming experience, 1 years Solidity development experience familiar with block chain development, master Rust、Substrate.',
      '**Hongtao Ji**',
      '3 Years of rich programming experience, familiar with c/c ,solidity,nodejs,rust,substrate development.',
      '**Danling Xiao**',
      '3 years experience in front-end development HTML、CSS、javascript、Vue familiar with React development',
      '**Ting Chen**',
      '8 years experience in design, rich project experience in block chain finance industry, mature independent design control and innovation ability, good at visual brand design, product design, proficient in photography shop, sketch, illustrator, C4D'
    ],
    projects: [
      {
        projectId: '801e2893-e74e-4e43-b5d5-ca23bcbda6b0',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d51'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d52'
    },
    id: '2886b9a5-7172-4bde-892c-2be75e838502',
    name: 'xcavate',
    members: [
      'Richard Houldsworth – CTO',
      'Alex Ward – COO',
      'Ganish Oli - Substrate Developer',
      'Rene Hürter - Substrate Developer',
      'Neeraj Choubisa - Full Stack Developer',
      'Victor Chukwonoso - UI/UX Designer'
    ],
    projects: [
      {
        projectId: 'd2f2eb3f-de6c-49a2-838a-c037b969896e',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d53'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d54'
    },
    id: '42a4a7b5-7b3d-45a7-b4ae-bdd12cb69f77',
    name: 'bright inventions',
    members: [
      'Michał Graliński - Rust Developer',
      'Kasper Ziemianek - Rust Developer',
      'Katarzyna Łukasiewicz - Project Manager'
    ],
    projects: [
      {
        projectId: '96ddae9a-d138-4a0b-ab8f-7db3e34d478e',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d55'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d56'
    },
    id: 'eab69bd4-ef00-4aa8-892f-12e362ef1a99',
    name: '[zeeve](https://www.zeeve.io)',
    members: [
      'Ghan Vashishtha',
      'Sankalp Sharma',
      'Jasti Sri Radhe Shyam',
      'Antar Basu',
      'Swati Sharma',
      'Gowrish K',
      'Abhishek Kumar'
    ],
    projects: [
      {
        projectId: '6ac33e85-680f-4507-abad-3e7f3a981c9c',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d57'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d58'
    },
    id: 'b3c9e9bf-b812-4a1b-845b-d84ec3f1d9df',
    name: 'zerodao',
    members: ['Daqin Lee', 'Zhidong Chen'],
    projects: [
      {
        projectId: 'c42fcd6b-7bff-4004-a107-60cbc46c885d',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d59'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d5a'
    },
    id: '1974f363-8bbf-477e-a003-bb187abfcb70',
    name: '',
    members: [
      'Igor Gulamov / Applied cryptography, architecture, rust',
      'https://github.com/snjax',
      'igor.gulamov@gmail.com',
      'Igor is responsible for cryptography, architecture, coordination, and team management. Also, Igor is responsible for research and finding out the best way of adapting ZeroPool for Web3.',
      'Alexandra Gulamova / Business development, community, UX, administrative',
      'Non-technical tasks for our interaction requires a separate person. All applications,  reports, coordination questions. Also, it is needed to follow up with the community to adopt and support this project.',
      'Dmitry Vdovin Rust/wasm developer',
      'https://github.com/voidxnull',
      'Dmitry has experience in the development of wasm and rust applications, backend and microservices, interacting with the blockchain.',
      'Rust/wasm developer is full-time, he is responsible for developing wasm part of the client-side application and also there are client-side bases among the tasks. It takes a lot of time and affords.',
      'Samuele Landi Rust/blockchain developer',
      'https://github.com/samuelelandi',
      'Samuele has experience in rust, blockchain, and polkadot development.',
      'Rust/blockchain developer builds relayer and maybe some parts of the pallet, which is needed for cryptography adapting for the final product.',
      'Anton Pegov Frontend developer',
      'https://github.com/antonpegov',
      'Anton has experience in fronted (including fronted for Ethereum DApps).',
      'We need a separate position for the frontend developer because the scope of skills of other team members does not imply strong frontend skills. Anton covers this scope giving time for others to work hard on the codebase.'
    ],
    projects: [
      {
        projectId: '12931c74-f332-4f59-8db7-ece54bf7b695',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d5b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d5c'
    },
    id: '5fd341f9-dac6-406e-8cbb-f3bf83e9eb81',
    name: 'colorful notion',
    members: [],
    projects: [
      {
        projectId: 'da2025ac-105c-434d-a2f6-4fe8c19070d8',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d5d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d5e'
    },
    id: '34478a0b-17b9-45b8-8ec9-92156fd1da27',
    name: '',
    members: [],
    projects: [
      {
        projectId: '41075574-4de3-4c45-af47-adb568000d0c',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d5f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d60'
    },
    id: 'd33a408e-e903-492b-8adc-b3c882780b33',
    name: 'ajuna network team',
    members: [
      'Cedric Decoster ([darkfriend77](https://github.com/darkfriend77))',
      'André Schneider ([metastar77](https://github.com/metastar77))',
      'Sven Scharmentke ([svnscha](https://github.com/svnscha))',
      'Rene Windegger ([rwindegger](https://github.com/rwindegger))',
      'Artists:',
      'Patrik Bundeli ([2much](https://www.instagram.com/2much_ch/))',
      'Tim Kramarz ([timkramarz](https://www.timkramarz.com/))'
    ],
    projects: [
      {
        projectId: '14b8b4fb-40fa-4b62-9a4d-5a1857e24e20',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d61'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d62'
    },
    id: 'f24f5bc7-35bc-4b81-b326-840ebd6360da',
    name: 'anagolay',
    members: ['Adriano Dalpane', 'Daniel Maricic'],
    projects: [
      {
        projectId: 'b7f4e969-16e2-42fe-ab7c-c9873b7dd7fe',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d63'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d64'
    },
    id: 'ff47c1dd-44ae-47ac-a82b-c4ca9967f8cd',
    name: 'anagolay',
    members: ['Daniel Maricic', 'Adriano Dalpane'],
    projects: [
      {
        projectId: 'a332d7e8-1493-4d9e-b36b-9c9f260b02b4',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d65'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d66'
    },
    id: 'e9ae7463-83ab-486b-b0e3-9db288475f56',
    name: 'legal name of your team (e.g. duo)',
    members: ['Name of team leader', 'Names of team members'],
    projects: [
      {
        projectId: '82180c11-26a5-4c98-a2f9-dc4ba25dccd2',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d67'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d68'
    },
    id: 'eb66919e-a5f2-4d0a-bbe7-173f47312185',
    name: 'legal name of your team (e.g. duo)',
    members: ['Name of team leader', 'Names of team members'],
    projects: [
      {
        projectId: 'fc19d36e-1966-4058-bbcd-4d47a5a9495f',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d69'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d6a'
    },
    id: 'ddb1045f-c0c7-4746-862c-c8d60036ec4f',
    name: '',
    members: [
      'Keric: 8+ years development experience, proficient in public chain and cross chain development, proficient in using go and rust, p2p network expert.',
      'Eric: 20 years of experience in protocol stack formulation and development, research work related to big data and blockchain, and robot quantification experience.',
      'Daniel: 11 years of work experience in IoT software development and management, familiar with contract and DAPP development.',
      'Scott: More than 7 years of software development experience, proficient in /Java/Golang/node, etc. engaged in blockchain research and development, familiar with eos/eth.',
      'Andy Ray: 10 years of Internet entrepreneurship experience, 5 years of blockchain industry experience, proficient in the secondary market, economic model design.',
      'Fred: Over 13+ years of Embedded Network Technology Experience in multiple technological systems including Hardware networking, software networking, and server-side applications.',
      "Team's experience",
      'We implemented the POW + DPOS consensus integrated with ethereum, used tendermint to provide finality in blockchain system with golang. Recently, we implemented a rust pos blockchain, it  uses vrf select validators and libp2p network. We have enough experience to solve the centralization problem of Oracle.',
      'Team Code Repos',
      'https://github.com/aresprotocols/ares'
    ],
    projects: [
      {
        projectId: 'a97479d6-815f-485d-93dd-4c75cfed3b3f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d6b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d6c'
    },
    id: '2330d88b-17c8-4b6e-b387-97d8c0e5cfbd',
    name: '',
    members: [],
    projects: [
      {
        projectId: 'e5597d2a-834b-4eef-86e2-96783a7451dc',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d6d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d6e'
    },
    id: '03f7f4dd-72df-4ee8-84d7-ecd1de686af4',
    name: 'asylum',
    members: [
      '**Illia Abrosimov** (Founder and СEO)',
      '**Markian Ivanichok** (Co-founder | СEO of Supercolony)',
      '**Maria Yaremenko** (Co-founder)',
      '**Sven Seven** (Head of Engineering | Supercolony)',
      '**Horacio Lex** (Rust Blockchain Developer | Supercolony)'
    ],
    projects: [
      {
        projectId: '846a4d91-f474-43a5-9a87-2fb39a2208df',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d6f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d70'
    },
    id: '46795a2a-50ad-43fd-a28b-2d77ad65745f',
    name: 'asylum',
    members: [
      '**Illia Abrosimov** (Founder and СEO)',
      '**Markian Ivanichok** (Co-founder | СEO of Supercolony)',
      '**Maria Yaremenko** (Co-founder)',
      '**Sven Seven** (Head of Engineering | Supercolony)',
      '**Horacio Lex** (Rust Blockchain Developer | Supercolony)'
    ],
    projects: [
      {
        projectId: '9b1000e6-104c-4d8d-b048-b8fc60595776',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d71'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d72'
    },
    id: '31d74430-c587-4bd5-babf-4418a625f9c6',
    name: '',
    members: [
      'Iori Zuo: Lead the team, responsible for project coordination and strategic planning.',
      'Steve Li: ui designer.',
      'Jie Li: Senior Software Engineer.',
      'Robert Li: Senior Software Engineer.'
    ],
    projects: [
      {
        projectId: 'bc51e79f-d167-44f8-9312-f1f23f27a427',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d73'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d74'
    },
    id: 'b9605d21-d61c-49e3-a17b-05066ebcaca5',
    name: 'alpha labs fzco',
    members: [
      'Francesco Risitano - Project Lead / Software Engineer',
      'Kin Chan (AKA: Simon Chan) - Software Engineer'
    ],
    projects: [
      {
        projectId: 'fece3857-88d8-467e-91c2-5bcde9061684',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d75'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d76'
    },
    id: '66867548-43c1-4192-9ea1-2269a0bebcd9',
    name: '',
    members: [
      'Full-timers',
      'Ray Lu (Founder, Substrate, Rust, Polkadot Ambassador, full-time)',
      'Justin Pham (CTO, Rust, Substrate, full-time)',
      'Shannon Christie (Technology Manager & Project Lead, Rust, Substrate & Game, full-time)',
      'Daniel Choi (Full-stack developer / test analyst, Rust, Substrate & Game, full-time)',
      'Logan Liu (UX developer, full-time)',
      'Part-timers',
      'Juanita Strydom (Community Manager)',
      'Kai Zhang (Technical Advisory)',
      'Alan Liang (Technical Advisory)'
    ],
    projects: [
      {
        projectId: 'd5b7bec8-9fe1-4c76-a332-fcce678d9f7d',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d77'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d78'
    },
    id: '5b29013f-c6bb-45e5-b69c-113b04992f67',
    name: '',
    members: [],
    projects: [
      {
        projectId: '9815f63a-dc64-45fd-8d86-27ff3e55960e',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d79'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d7a'
    },
    id: 'f5dd1206-8087-40a2-bf17-fa09a0e238c1',
    name: '[blackprint](https://github.com/blackprint)',
    members: [
      '[StefansArya](https://github.com/StefansArya): Fullstack Engineer & Game Developer'
    ],
    projects: [
      {
        projectId: 'b7abdbd2-2eb3-433d-b8da-756873d3030e',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d7b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d7c'
    },
    id: 'c78913fb-d4fd-4d57-87c4-22a6824a5fb0',
    name: 'bldg blox inc',
    members: ['Michael Lee, CEO', 'Sam Billingham, Lead Engineer'],
    projects: [
      {
        projectId: '1e1f67e3-0b08-4ccb-85d1-431805eabb84',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d7d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d7e'
    },
    id: '7fb8015a-5e29-4ce9-a806-e311570a701b',
    name: 'blockchainia',
    members: [
      'Ed Anderson (eca20@pitt.edu)',
      'Will Chastka (wchastka@tepper.cmu.edu)',
      'Matt Dennis (oopmatt@gmail.com)'
    ],
    projects: [
      {
        projectId: '9a4611f7-d12e-4a93-98ef-befab522cfeb',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d7f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d80'
    },
    id: 'e8f35b93-56f4-47a4-9cd5-60f0ab7331f3',
    name: 'bounce',
    members: ['Jack Lu', 'seiya1192'],
    projects: [
      {
        projectId: 'ff13892e-6dc3-4750-be98-b86deffabb9e',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d81'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d82'
    },
    id: 'f5f5ed02-1045-4f6e-baea-11e59f06ffdf',
    name: 'bright inventions',
    members: [
      'Agnieszka Olszewska - Technical Lead, blockchain specialist',
      'Alisa Kashytska - UI/UX design',
      'Szymon Miloch - fullstack developer',
      'Daniel Makurat - fullstack developer, blockchain specialist',
      'Katarzyna Łukasiewicz - Project Manager'
    ],
    projects: [
      {
        projectId: '798b1c5e-abf2-408a-9fc5-b13cf13b6032',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d83'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d84'
    },
    id: '1cac7bd8-f628-4afa-b5ec-c3e25b7929ee',
    name: 'equilibrium',
    members: ['Vaclav Barta', 'Mark Henderson'],
    projects: [
      {
        projectId: '97057b2e-1323-4581-bbc0-fbd3fa61283e',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d85'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d86'
    },
    id: 'f1e55c5c-9e81-4091-9451-a3bc3be68d2f',
    name: 'matthew darnell (individual)',
    members: ['Matthew Darnell'],
    projects: [
      {
        projectId: '0c720875-5c7c-4cf2-828e-3ff4aa108a8e',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d87'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d88'
    },
    id: '80c60181-bb7d-467a-b0e6-8c58c6dd97b5',
    name: '[@agryaznov](https://github.com/agryaznov)',
    members: [
      'Alexander Gryaznov ([@agryaznov](https://github.com/agryaznov))'
    ],
    projects: [
      {
        projectId: '8d641dee-a012-4974-bccb-c8dfeab5ba72',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d89'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d8a'
    },
    id: '37212d01-2c76-44a7-a1b3-31355fc86fc7',
    name: 'canyon labs',
    members: ['Name of team leader: Liu-Cheng Xu'],
    projects: [
      {
        projectId: '94240361-9df8-4ec2-b5f4-4f4bc961147e',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d8b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d8c'
    },
    id: 'fa0bea49-3aac-4336-9a48-1df5bf2dfc8a',
    name: 'k/factory (former centrifuge development team)',
    members: [
      '*Team Lead & Protocol Developer*: Miguel Hervas (mikiquantum)',
      '*Main Protocol Developer*: Cosmin Damian'
    ],
    projects: [
      {
        projectId: 'cf988ef5-c338-4d65-8215-48dc98992fc8',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d8d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d8e'
    },
    id: 'dcc89e7f-8819-487b-a3fd-254af957bf91',
    name: 'cess lab',
    members: ['Teh Sunn Liu', 'Yeou Sunn Liu', 'Ted Zhang'],
    projects: [
      {
        projectId: 'd88e29a2-a9b0-48db-95c7-00aab6ab7587',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d8f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d90'
    },
    id: 'f011571d-19ac-49bf-8f90-86a4c6927478',
    name: 'api market, inc. dba aikon',
    members: [
      'Marc Blinder, CEO',
      'Tray Lewin, CTO',
      'Randy Torres',
      'Basar Celebci',
      'Mamoon Ahmed',
      'Babar Bilal',
      'Daniel Lin',
      'Bill Rusitzky'
    ],
    projects: [
      {
        projectId: 'a001d8db-d651-47ad-b248-c5a36be8545a',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d91'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d92'
    },
    id: '12dc167d-5f7e-481c-9235-c680ffbde359',
    name: 'helikon labs',
    members: [
      '**Team Lead & Full-Stack Developer:** Kutsal Kaan Bilgin',
      '**Product Manager:** Egor Zmaznev',
      '**Project Manager:** Daria Kravchenko',
      '**Backend Developer:** Ivaylo Hubanov',
      '**UI/UX Designer:** [Ksenia Leonteva](https://www.behance.net/markeer)',
      '**3D Designer:** [Lena Sivakova](https://www.behance.net/hypnosphere)'
    ],
    projects: [
      {
        projectId: 'cc3a2d6f-bddb-464d-b100-d4d612399fd7',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d93'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d94'
    },
    id: 'e6765eef-d5eb-4071-bf9b-66ea8902bb16',
    name: 'cheersland labs',
    members: [
      'Peter Lim - Team Leader and Blockchain Developer',
      'Joesph Cheung - Product Manager and Designer',
      'Janna Ding - Head of Growth and User Experience Designer',
      'Kerstin Darick - Full-stack Developer and Design Engineer'
    ],
    projects: [
      {
        projectId: 'e08bf9ef-156f-449a-a3c7-2355a1d8efc8',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d95'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d96'
    },
    id: '6bac466b-70f8-4435-8dfe-0bc72b9bb119',
    name: 'skyekiwi team',
    members: ['Song Zhou', 'Zoe Sun', 'Fontend Developer team at SkyeKiwi'],
    projects: [
      {
        projectId: '24fce83d-18b4-48a6-a39d-67c3ce88c2d0',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d97'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d98'
    },
    id: '47ad8a7f-0291-4bef-99d6-50c7330bff81',
    name: '',
    members: [
      '**Dev team members**',
      'Gregory Shabalov - co-founder, CTO',
      'Pavel Khivintsev - Lead Backend Developer',
      'Petr Lapin - Lead Frontend Developer',
      'Iurii Dorofeev - Lead Mobile Developer',
      'Nikita Pashkov - DevOps Engineer',
      'Yeskendir Sarinov - Backend Developer',
      'Grigori Sargsyan - Frontend Developer',
      'Sofia Peremotina - QA Engineer',
      '**Other team members**',
      'Alex Falko - co-founder, CFO',
      'Anton Pavlutsky - co-founder, CEO',
      'Dmitrii Shehovtsov - Head of Research',
      'Rina Spasenkova - CMO',
      'Vlad Gorlov - Community Lead',
      'Margo Omelchenko - Lead Designer'
    ],
    projects: [
      {
        projectId: 'c7c2d92a-6674-46d0-bac1-072c4c3fb013',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d99'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d9a'
    },
    id: '51937d4b-d5c4-4192-8608-756b901d1f18',
    name: 'clover team',
    members: [
      'Burak Keceli - Tecnical Lead',
      'Chris Li - Strategy Lead',
      'Norelle Ng - Operations',
      'Chris Williamson - Co-strategy Lead',
      'Barek Sekandari - Merketing Lead',
      'Marina Danylyuk - Chief Legal Advisor'
    ],
    projects: [
      {
        projectId: 'd94e755c-b8cf-45fc-8c91-5b9fe20a283c',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d9b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d9c'
    },
    id: '575349da-a505-4536-b1ea-c280c6ce30f6',
    name: 'togethercrew',
    members: [],
    projects: [
      {
        projectId: '1dcc50eb-1b84-49d5-903e-ea5eab59407d',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d9d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44d9e'
    },
    id: 'fb4f74ab-3964-4170-bfe8-3f0ed603b53f',
    name: 'gloslab',
    members: ['Sebastian Miasojed', 'Karol Kokoszka'],
    projects: [
      {
        projectId: 'c4b2a5f8-49ea-4c5b-9ffd-2cd2a788ccca',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44d9f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44da0'
    },
    id: 'b1c806fd-f701-40a5-957d-a5a55c632492',
    name: 'coong team',
    members: [
      'Thang X. Vu - Leader / Lead Developer',
      'Tung Vu - Frontend Developer'
    ],
    projects: [
      {
        projectId: 'b070a4e7-5554-4fa5-a43f-3a0f7f88d2ea',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44da1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44da2'
    },
    id: 'fa529de0-e4c6-4a2e-89d5-738cd56e35c5',
    name: 'blockcoders',
    members: ['Jose Ramirez', 'Fernando Sirni', 'Ruben Gutierrez'],
    projects: [
      {
        projectId: 'e8811281-6d64-4f1b-911f-dc2d88d7637f',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44da3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44da4'
    },
    id: '79ec2732-9189-4296-85fe-a8a26442dee1',
    name: 'dodorare, inc.',
    members: [
      'David Knyshenko, Blockchain/Full stack developer and Team Leader',
      'Oleksii Knyshenko, Mobile/Backend developer',
      'Kulmurzin Adil, Android developer',
      'Daniil Anikin, Mobile/System developer',
      'Rodrigo Oliveira, Game/Mobile developer'
    ],
    projects: [
      {
        projectId: '2f69ead3-0209-403c-86ed-7f51fc582d5b',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44da5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44da6'
    },
    id: '3ef0534b-f50d-4354-966b-649b80dd0660',
    name: '10clouds sp. z o.o.',
    members: [
      'Product Delivery Manager - Jedrzej Wencka',
      'Tech Lead - Aleksander Krasnicki',
      'React - Maciej Topor',
      'Design Lead - Krzysztof Juszczyk',
      'UX & Product Designer - Paweł Poterała'
    ],
    projects: [
      {
        projectId: '2f8f0fd2-6485-46ac-97e1-5f6889005008',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44da7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44da8'
    },
    id: '66b75e10-8fd3-4c59-a2f3-ac22c3d761e6',
    name: 'ideal labs',
    members: ['Tony Riemer', 'Carlos Montoya'],
    projects: [
      {
        projectId: '041b8b49-dfcb-442b-9b89-f3dd1ba2eb92',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44da9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44daa'
    },
    id: 'e70ecdc4-aad9-40ea-a741-061a3a315fe7',
    name: 'cryptolab',
    members: [
      "Yu-Kai Tseng [GitHub](https://github.com/yktseng) has a master's degree in Computer Science. He also had 9-year working experience in developing Industrial Network Management Softwares/Services and is now a freelancer. Yu-kai is familiar with backend service development and had experience in leading large distributed system design and development.",
      'Yao-Hsin Chen [GitHub](https://github.com/iisaint) has a Ph.D. in Computer Science focusing on information security. He is a big believer in blockchain and is a co-founder of a blockchain-based solar technology company in Taiwan. Currently, he is organizing a small start-up to deliver services in the Polkadot ecosystem.'
    ],
    projects: [
      {
        projectId: '6bb836b0-e97a-4828-b88f-4ab9cdb7d70f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dab'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dac'
    },
    id: '4c4c6f64-687e-4ac7-95aa-c7a27a105cab',
    name: 'equilibrium',
    members: [
      'Alex Melikhov: Founder & CEO',
      'Peter Sergeev: Sr. Project Manager Tech Team',
      'Veniamin Khrapov: Tech Lead',
      'Pavel Gavrilushkin: Tech Lead'
    ],
    projects: [
      {
        projectId: '07bf2e35-a792-48fe-ae83-87a61d8c71fc',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dad'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dae'
    },
    id: 'aecc1ff4-37fb-4403-8f9c-10a789f4cea6',
    name: 'decentradot',
    members: [
      'Arthur Hoeke (team leader, full-stack developer) [linkedIn](https://www.linkedin.com/in/arthur-hoeke-170691103/)',
      'Johan Hoeke (UNIX SysAdmin) [linkedIn](https://nl.linkedin.com/in/johanhoeke)'
    ],
    projects: [
      {
        projectId: 'e85cc76c-7366-4421-8467-fbf3f14643bb',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44daf'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44db0'
    },
    id: 'fecc17d5-c5e2-4e00-b02c-793024ece1f8',
    name: 'asyoume inc (点道为址科技有限公司)',
    members: [
      'Erica - Product Manager',
      'Bai L - Blockchain Developer',
      'Vicent - Data-science Manerger',
      'Wilson Lin - Market Operator'
    ],
    projects: [
      {
        projectId: 'edbe438d-ebc9-4e57-afe2-8845e3e4e080',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44db1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44db2'
    },
    id: '6776975d-28cb-4d9d-bc53-f7d064f614ce',
    name: 'daos-org',
    members: [
      'JimYam',
      'wetalice',
      'Zifan Zhang',
      'You Lam',
      "Team's experience",
      'JimYam has been engaged in blockchain chain development for 5 years and is passionate about blockchain industry innovation. Currently, he is the main developer of LISTEN parallel chain team. Having worked in Tencent for 3 years, he has unique insights into social products. He has been following polkadot ecological development since Substrate1.0.',
      'wetalice Graduated from top5 universities in China, good at economics and game theory. Currently he is the lead developer for the KICO team.',
      'Zifan Zhang has worked for NetEase and did front-end development for 6 years. Currently, he has his own entrepreneurial team in Singapore.',
      'You Lam is test engineer who has been working in the industry for 9 years.'
    ],
    projects: [
      {
        projectId: '0907984b-4e99-414b-8353-04cd34adcd90',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44db3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44db4'
    },
    id: 'f13d5fc6-269b-446d-96b1-7463003bdb7e',
    name: '',
    members: ['Alex Xu', 'Hilbert Zhou'],
    projects: [
      {
        projectId: '7944234e-eef4-41f0-b369-d863860dbb88',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44db5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44db6'
    },
    id: '97642062-90c3-4a5b-9b41-81c68f57e962',
    name: 'dauth',
    members: [
      'Name of team leader: Dean Yan',
      'Names of team members: Michael A. Hanono, Scott Zhang'
    ],
    projects: [
      {
        projectId: '014018b8-c0cc-4ef9-80cd-7204a25fc148',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44db7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44db8'
    },
    id: '73c9568c-ddc0-494f-94c1-83bed43bb1ff',
    name: 'twinp',
    members: [
      'MSc Eljo Prifti - Substrate/Rust developer with proven experience. Contributor to substrate open source repositories.',
      'Eng Gerti Prifti - Substrate/Rust developer with proven experience'
    ],
    projects: [
      {
        projectId: '0adf7b68-4511-4ca6-80f8-71d6473b36dd',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44db9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dba'
    },
    id: '2efe8c66-0ec0-449b-aad4-7c7f75d40267',
    name: '',
    members: [],
    projects: [
      {
        projectId: 'e1cf8e47-a033-4a58-93b3-7996a6da2556',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dbb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dbc'
    },
    id: '6b061665-11d5-4697-9b76-52c00172bcf5',
    name: '',
    members: ['Hui Liu', 'Zhiwu Liu', 'Zhuang Jin', 'Yang Liu', 'Fei Yang'],
    projects: [
      {
        projectId: '9ac79eca-2359-4aff-9d14-f34367a7c8d6',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dbd'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dbe'
    },
    id: '78a925f4-84cd-4bf9-9e10-9bc3e35cb18e',
    name: '',
    members: [
      'Yahor Tsaryk - CTO, Project Lead, Blockchain Developer',
      'Alex Shkor - Product director, Blockchain Architect',
      'Alexey Kulik - System Architect',
      'Euheny Bondarovich - Full-stack Developer'
    ],
    projects: [
      {
        projectId: '75a0a609-c376-4d3b-8379-cb9c2c0ac342',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dbf'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dc0'
    },
    id: '60123da5-4879-40c6-b368-058b28bbf5be',
    name: 'lumena',
    members: [
      'Fabrice CROISEAUX',
      'Michel ONFRAY',
      'Antoine DETANTE',
      'Franck LEGARDEUR'
    ],
    projects: [
      {
        projectId: '9471fcdd-f158-498b-bfd7-85aeda846922',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dc1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dc2'
    },
    id: '3852f088-d2b6-49fc-ad71-97b74b203383',
    name: 'dora factory',
    members: [
      'Dora Factory & DoraHacks Dev Team -- a team of developers who has built HackerLink.io/en, now hosting quadratic funding grants, bounties, and hackathons for BSC, Filecoin, HECO, Solana, etc. The team also implemented a quadratic funding Substrate pallet (<https://github.com/w3f/Grant-Milestone-Delivery/pull/104>).'
    ],
    projects: [
      {
        projectId: '857250d1-9997-4156-a559-f25c6a723dc8',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dc3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dc4'
    },
    id: '1602a2fe-ee80-46d4-b923-a7ea4ab07743',
    name: 'dora factory',
    members: [
      'Dora Factory & DoraHacks Dev Community -- a community of developers who has built HackerLink.io/en, now hosting quadratic funding grants, bounties, and hackathons for EVM ecosystems, Polygon, BSC, Filecoin, Solana, and Dora Factory itself (https://hackerlink.io/grant/dora-factory/). The team also implemented a quadratic funding Substrate pallet (https://github.com/w3f/Grant-Milestone-Delivery/pull/104), a Moloch pallet, and a DAO-as-a-Service Substrate chain to host dGov applications within the Polkadot / Substrate ecosystem.'
    ],
    projects: [
      {
        projectId: '71237fab-7727-46d4-918b-914584b18415',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dc5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dc6'
    },
    id: 'bf196977-577a-443a-8f11-124320f59033',
    name: 'dorahacks',
    members: [
      'DoraHacks Dev Team -- a team of developers who has built HackerLink.io/en and implemented the first quadratic funding smart contract on BSC.'
    ],
    projects: [
      {
        projectId: 'eee609c8-599b-4b0f-a692-0d55cba9bb3b',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dc7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dc8'
    },
    id: 'e1eb1d6b-19fe-4220-8c1f-ddb1cb63f3ac',
    name: 'davanti',
    members: ['Jonathan', 'John'],
    projects: [
      {
        projectId: 'ff0016af-1534-496f-abbf-f487c8523749',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dc9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dca'
    },
    id: '5770b8a6-033f-4aa9-b76f-950037034fcf',
    name: '',
    members: [
      '[**Amit Singh**](https://www.linkedin.com/in/startupamit/) [ Product Manager ]',
      '[**Roshit Omanakuttan**](https://www.linkedin.com/in/roshit/) [ Technical Architect ]',
      '[**Loakesh Indiran**](https://www.linkedin.com/in/loakesh-indiran-8a2282140) [ Full Stack Developer ]',
      '[**Tejas Gaware**](http://www.linkedin.com/in/tejas-vijay-1430a3190) [ Backend Developer ]',
      '[**Rajat Petwal**](https://www.linkedin.com/in/rajat-petwal-947440197/) [ Backend Developer ]'
    ],
    projects: [
      {
        projectId: '93b6df9e-23ef-4114-9e70-1faab51b3873',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dcb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dcc'
    },
    id: 'bc0421b3-0819-4091-a9bb-ccec09b4d7bb',
    name: '',
    members: [
      '[**Amit Singh**](https://www.linkedin.com/in/startupamit/) [ Product Manager ]',
      '[**Roshit Omanakuttan**](https://www.linkedin.com/in/roshit/) [ Technical Architect ]',
      '[**Varun Gyanchandani**](https://www.linkedin.com/in/varunsays/) [ Backend Lead ]',
      '[**Loakesh Indiran**](https://www.linkedin.com/in/loakesh-indiran-8a2282140) [ Full Stack Developer ]',
      '[**Tejas Gaware**](http://www.linkedin.com/in/tejas-vijay-1430a3190) [ Backend Developer ]',
      '[**Praneeth Ratnagiri**](https://www.linkedin.com/in/praneeth-ratnagiri-772a43174/) [ Backend Developer ]'
    ],
    projects: [
      {
        projectId: '762be3a6-b500-4c36-a0b5-40a3e43990f5',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dcd'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dce'
    },
    id: '80d40a8a-4945-4897-b935-5082e67d26e7',
    name: '',
    members: [
      'Amit Singh (product manager)',
      'Roshit Omanakuttan (technical architect)',
      'Varun Gyanchandani (backend lead)',
      'Loakesh Indiran (full stack dev)',
      'Siddharth Teli (backend dev)',
      'Bharath Kumar (tester)',
      'Smita Ashok (tech content writer)'
    ],
    projects: [
      {
        projectId: '562f175f-8cbd-405d-9d6c-a751eb2b6307',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dcf'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dd0'
    },
    id: '583bb75b-beb0-427c-9f08-e57deef039c4',
    name: 'dotmog team',
    members: [
      'Cedric Decoster ([darkfriend77](https://github.com/darkfriend77))',
      'Rene Windegger ([rwindegger](https://github.com/rwindegger))',
      'André Schneider ([metastar77](https://github.com/metastar77))',
      'Artists:',
      'Patrik Bundeli ([2much](https://www.instagram.com/2much_ch/))',
      'Tim Kramarz ([timkramarz](https://www.timkramarz.com/))'
    ],
    projects: [
      {
        projectId: '6679bd78-9eb4-4d29-8281-f3abfe8aeb7a',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dd1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dd2'
    },
    id: '5cb2f7b0-0271-48c8-961c-606e79862f1f',
    name: 'eightfish',
    members: ['Daogang Tang (Mike Tang)', 'Keqin Tao (Hacken)'],
    projects: [
      {
        projectId: '39bda2e0-542d-480e-b560-5ef75e826cb6',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dd3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dd4'
    },
    id: '06639f95-9270-4556-9b55-b7ace94271b8',
    name: 'web3 labs ltd',
    members: [],
    projects: [
      {
        projectId: '6190fdff-1c9c-4c72-a69b-87c75963ead8',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dd5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dd6'
    },
    id: '2b3cbef1-9e61-4afc-871b-e8fead6d109f',
    name: 'web3 labs ltd',
    members: [],
    projects: [
      {
        projectId: 'ade0c83a-88bf-4be4-82dd-d12265a48bc1',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dd7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dd8'
    },
    id: '5ffc6c23-4df3-4d7c-a23d-0431f0ec9b51',
    name: 'twinp',
    members: [
      'MSc Eljo Prifti - Rust developer and Rust community enthusiast.',
      'Ing Gerti Prifti - Rust developer'
    ],
    projects: [
      {
        projectId: '6402b4e0-fde2-426b-9bd9-d7abdf5f4c1d',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dd9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dda'
    },
    id: '34514992-06e5-44e8-b4bd-6115cc6725e4',
    name: 'evanesco labs',
    members: [
      'Name of team leader: Kim Pfeiffer',
      'Names of team members David Pen, Lily Lin,Willam Wang'
    ],
    projects: [
      {
        projectId: '16791895-86f9-43d8-9855-1c69ad600900',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ddb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ddc'
    },
    id: 'ee69d279-d8e1-49a9-aefa-aad48ba02b31',
    name: '',
    members: [],
    projects: [
      {
        projectId: 'e9467424-1fe0-4e72-a906-87f121ddcf07',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ddd'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dde'
    },
    id: '64f00c35-8663-4257-85b0-1c8b2ec0655d',
    name: '',
    members: [],
    projects: [
      {
        projectId: '83e5516c-059e-4afb-bdaf-5ead19998522',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ddf'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44de0'
    },
    id: 'a2d72050-6e2e-4a5d-9cea-7b31552e4b33',
    name: 'fs',
    members: [
      'Name of team leader: Ilhan  Ünlü',
      'Names of team members: Mahir Özdemir, Kazunobu Ndong, Stephen Meyo Mba, Thibaut Segura and Oliver Lim'
    ],
    projects: [
      {
        projectId: '14d3514c-60e6-4bbd-af17-be93d1786b75',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44de1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44de2'
    },
    id: '923c05de-4dbb-4236-ae47-6f8f8776e1f4',
    name: 'dodorare, inc.',
    members: [],
    projects: [
      {
        projectId: 'cd67ab16-643d-42de-82e6-834d5aa3876a',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44de3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44de4'
    },
    id: '27597bdb-afd8-460e-8d62-a7772720154b',
    name: 'nikita orlov pr',
    members: ['Nikita Orlov'],
    projects: [
      {
        projectId: '6c6e149d-3e25-4afc-a1a2-77ace2dce64f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44de5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44de6'
    },
    id: 'ee9cf6a9-aae3-4866-bb6f-b9d1fa596dc5',
    name: 'fidi',
    members: [
      'Roman Dovgopol — CTO, Architect',
      'Shaun Saylor — CEO, Product',
      'Anton Ryabov — Eng Lead, Developer',
      'Kirill Suvorov — Frontend Lead, Web/Mobile',
      'Finn Marten — Design Lead'
    ],
    projects: [
      {
        projectId: 'f4b729dc-5093-43a6-95b9-8ad11775d364',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44de7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44de8'
    },
    id: 'd2e17381-5e5a-4be8-af69-9e30480df49b',
    name: '',
    members: ['Elshan Dzhafarov', 'Anastasiya Strashnikova'],
    projects: [
      {
        projectId: '32192e03-1fc2-4581-b265-98801e3aa74e',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44de9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dea'
    },
    id: 'c274adbd-d4a2-4900-a30f-ab72fcecf2a9',
    name: 'galaxy.do',
    members: [],
    projects: [
      {
        projectId: 'ef263083-8ea9-4d0d-929d-4a2222b1e774',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44deb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dec'
    },
    id: '35cc667e-f879-45f7-8eac-247130513e72',
    name: 'zaniyar jahany',
    members: ['Zaniyar Jahany'],
    projects: [
      {
        projectId: '594dfd7f-d5f7-4d58-a26a-cc3bcc22df0b',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ded'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dee'
    },
    id: 'fe84cb44-3ee6-4399-ba3c-dcb6ba0bbb91',
    name: '',
    members: [],
    projects: [
      {
        projectId: '83b5f811-0bdc-49a4-8c06-b0d40c2ffb3f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44def'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44df0'
    },
    id: '422003dd-8726-44d5-ba9b-4ceca426ee65',
    name: '',
    members: [],
    projects: [
      {
        projectId: '4c76ee58-f5d4-4d17-9034-38974ad6086c',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44df1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44df2'
    },
    id: 'c5408101-5bb3-4e83-aa3a-d9440a022138',
    name: '[hamster](https://github.com/orgs/hamster-shared)',
    members: ['Teng Liang', 'Haijiang Mo', 'Jianguo Sun', 'Zhiwei Li'],
    projects: [
      {
        projectId: '2afdcf2c-508c-403d-ac08-dc73895cb558',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44df3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44df4'
    },
    id: 'dc197b79-384c-485a-924d-5f705f7355e7',
    name: 'helixstreet',
    members: ['Thomas Deisen'],
    projects: [
      {
        projectId: 'fdcfb2d8-8a1f-48cd-a924-60939e72ffd8',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44df5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44df6'
    },
    id: '2e632ab6-2f70-4503-ba21-912e8d3b2043',
    name: 'lee',
    members: ['Lester'],
    projects: [
      {
        projectId: '883d45b9-f1a0-4bcf-a4b7-faae7ff21a5f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44df7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44df8'
    },
    id: '4afa9570-828e-405e-9ac1-cd87c82006cc',
    name: '',
    members: [],
    projects: [
      {
        projectId: '8399b12e-0779-469d-9ccd-c9144583b197',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44df9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dfa'
    },
    id: 'fbb8b9dd-f102-4554-9177-48dbd3fc7c0c',
    name: 'jonathan brown',
    members: ['Jonathan Brown'],
    projects: [
      {
        projectId: '598cbb2e-66e7-45dc-929d-4cd369ff1a20',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dfb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dfc'
    },
    id: '09ca441d-6ffc-4260-b3aa-bbf36b323788',
    name: 'zondax ag',
    members: [
      '1 x Researcher',
      '2 x Rust / C++ Engineers',
      '1 x Project Manager'
    ],
    projects: [
      {
        projectId: '94f0d2a4-1e5e-4247-8878-ade7a100d8a3',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dfd'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44dfe'
    },
    id: 'aa01ea05-1f26-4088-8ee0-c284436814c4',
    name: 'elamin ltd',
    members: ['Sam Elamin', 'Aala Sharfi', 'Kanthan Segeran'],
    projects: [
      {
        projectId: '2a715213-b813-4461-8590-7e7f8dc83e40',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44dff'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e00'
    },
    id: '60635066-b8dd-4d9a-ae42-e6b8bb5ea04a',
    name: 'david semakula',
    members: [
      'David Semakula [davidsemakula](https://github.com/davidsemakula)'
    ],
    projects: [
      {
        projectId: 'b5f40d44-b4b4-4b03-ab0e-72e4c6186525',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e01'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e02'
    },
    id: '201f0831-4e73-4ca1-8642-19cc3ce226e3',
    name: 'ink boxes team',
    members: [
      '@nerdsince98',
      'Legal Structure',
      '**Registered Legal Entity:** Not yet registered',
      "Team's experience",
      '@nerdsince98: Built a centralized exchange and sold it as whitelabel solutions to clients. Rust instructor. Wrote Ink based smart contracts in the past: https://gitlab.com/nerdsince98/learning-ink/',
      'Team Code Repos',
      'https://github.com/avirajkhare00/ink-boxes',
      'Development Roadmap :nut_and_bolt:',
      'Overview',
      'Grant level',
      'Level 1: Up to $10,000, 2 approvals',
      'Development Roadmap :nut_and_bolt:',
      '**Total Estimated Duration:** 4 weeks',
      '**Total Costs:** 5,000 USD',
      'Milestone 1',
      '**Estimated Duration:** 2 weeks',
      '**Costs:** 3,500 USD',
      'Number',
      'Deliverable',
      'Specification',
      '0a.',
      'Apache License 2.0',
      'All code will be published under Apache 2.0',
      '0b.',
      'Documentation',
      'We will provide both inline documentation of the code.',
      '0c.',
      "Testing and it's Guide",
      'Core functions will be fully covered by comprehensive unit tests written in Jest and UI tests in Cypress to ensure functionality and robustness. In the guide, we will describe how to run these tests.',
      '0d.',
      'Docker',
      'We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.',
      '0e.',
      'Articles',
      'We will publish a series of articles on how to contribute and create new boxes.',
      '0.',
      'Creation of Boxes',
      'We will create boxes in a GitHub repo like NFT-Marketplace, Decentralized Ecommerce platform, ERC-721 with UI functionalities, ERC-20 with UI functionalities. Complete list will be provided in the GitHub repo README and coming soon section of the website.',
      'Milestone 2',
      '**Estimated Duration:** 2 weeks',
      '**Costs:** 1,500 USD',
      'Number',
      'Deliverable',
      'Specification',
      '0a.',
      'Apache License 2.0',
      'All code will be published under Apache 2.0',
      '0b.',
      'Documentation',
      'We will provide both inline documentation of the code and a basic tutorial that explains how to develop a new box.',
      '0c.',
      "Testing and it's Guide",
      'Core functions will be fully covered by comprehensive unit tests written in Rust to ensure functionality and robustness. In the guide, we will describe how to run these tests.',
      '0d.',
      'Docker',
      'We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.',
      '0e.',
      'Articles',
      'We will publish a series of tutorials on how to contribute to website.',
      '0.',
      'Creation of website.',
      'We will create a website where anyone can download the box in zip format and can upload the same. Website will accept the GitHub link of the box. If anyone tries to download the box, GitHub release of the box will be downloaded.',
      'Additional Information :heavy_plus_sign:'
    ],
    projects: [
      {
        projectId: 'd1af1392-3115-4219-9bf6-0ddb026bfb24',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e03'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e04'
    },
    id: '5df9616b-b209-487a-bf3f-ab91a6cac66e',
    name: 'blockcoders',
    members: ['Jose Ramirez', 'Damián Fixel', 'Fernando Sirni'],
    projects: [
      {
        projectId: '014f92a5-8ec8-4a7c-844c-9e54a9bf7326',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e05'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e06'
    },
    id: 'f9633315-cec3-4d11-bb9d-3ff962859b00',
    name: 'talentica software',
    members: [
      'Debasish Ray Chawdhuri - Blockchain and Cryptography Researcher',
      'Pankaj Mendki -Blockchain expert',
      'Nikhil Desai - Blockchain Developer https://github.com/Nikhil-Desai-Talentica',
      'Amit Singh - Blockchain Developer https://github.com/iamit-singh'
    ],
    projects: [
      {
        projectId: 'f9fa5331-7d0a-4859-b3b1-9bd685e9cf01',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e07'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e08'
    },
    id: '4a17e75b-3252-4f4e-b594-79b4350eadf2',
    name: 'talentica software',
    members: [],
    projects: [
      {
        projectId: '19665922-ee4a-4792-8d4d-6d9bcbf24b8a',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e09'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e0a'
    },
    id: '62f8cfdf-b839-4e0d-8e70-cd0675a2bfa3',
    name: '[zeeve](https://www.zeeve.io)',
    members: ['Ghan Vashishtha', 'Sankalp Sharma', 'Jasti Sri Radhe Shyam'],
    projects: [
      {
        projectId: 'b60abe54-8cff-4faf-804b-8e7181f7cf71',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e0b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e0c'
    },
    id: '508c2e51-80fd-41ec-8825-0cdba300893b',
    name: 'ink contracts wizard team',
    members: ['Aviraj Khare'],
    projects: [
      {
        projectId: '271cca05-4236-4a5b-95de-e7538544e9f6',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e0d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e0e'
    },
    id: '5a73bbc8-6cba-463b-9bdc-7ef2f04fb632',
    name: '[tdsoftware](https://www.tdsoftware.de/)',
    members: [],
    projects: [
      {
        projectId: '17b068c2-b796-49c8-830a-d1a917bbf9de',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e0f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e10'
    },
    id: 'c98dedbf-22af-4da6-bab3-46fbf035253a',
    name: 'iridium',
    members: ['Tony Riemer'],
    projects: [
      {
        projectId: '1c299ed4-5a56-49ca-8048-792def814d38',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e11'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e12'
    },
    id: '78ae14aa-811c-4b1c-b4f0-59c871df743a',
    name: 'ideal labs',
    members: [
      'Tony Riemer: co-founder/engineer',
      'Tom Richard: engineer',
      'Sebastian Spitzer: co-founder',
      'Brian Thamm: co-founder'
    ],
    projects: [
      {
        projectId: 'e66d5906-90cf-4d11-b6e9-3acfaca78534',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e13'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e14'
    },
    id: '5bacf460-3c00-4b0a-b809-281dfa37fb1f',
    name: 'polytope labs',
    members: [
      'Leads: Seun Lanlege, David Salami',
      'Members: Damilare Akinlose, Femi Bankole, Jesse Chejieh'
    ],
    projects: [
      {
        projectId: '98d732e4-8727-41b6-a823-63de6ceca950',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e15'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e16'
    },
    id: '7775c09d-f024-4ffc-bb97-cda5531f9e2a',
    name: '',
    members: [],
    projects: [
      {
        projectId: '34dee288-1fba-4faa-ae23-a0f1f6c16a98',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e17'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e18'
    },
    id: '6b05873d-c6aa-43ef-acb5-91fa076136f7',
    name: 'keysafe',
    members: [
      'Name of team leader: Dean Yan',
      'Names of team members: Mingshi Song, Yan Jiang'
    ],
    projects: [
      {
        projectId: 'd252478b-d3ca-45d2-b18e-8077af210051',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e19'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e1a'
    },
    id: 'af028637-1d9e-42a0-883b-8d6e0ac3ea06',
    name: 'klevoya',
    members: [
      'Team Lead: Moti Tabulo',
      'Fuzzer Developer: David Morgan',
      'Blockchain Engineer: Christoph Michel'
    ],
    projects: [
      {
        projectId: '35d028f3-ee9d-4b15-a072-5c47bbf3bb9e',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e1b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e1c'
    },
    id: 'f732d51a-bd1b-4cbb-9e19-b04ee1802e93',
    name: '',
    members: [
      'Name of team leader: Ariel Ho',
      'Names of team members:  Shengmu Liu, John Wu, Yuqing Zhao, Jayden Yee'
    ],
    projects: [
      {
        projectId: 'c541b8ea-1f83-486f-bc2a-e67e1e2a6156',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e1d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e1e'
    },
    id: 'a100315b-e81d-4923-8a6f-d55fc1b97a59',
    name: '',
    members: [],
    projects: [
      {
        projectId: 'eaace5b4-c3d1-4743-95d1-39fae0e9963c',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e1f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e20'
    },
    id: 'd35f5913-ae60-4857-bb34-d0c63d89753b',
    name: 'leetcoin',
    members: ['Ali Serag', 'Alberto Cevallos', 'Bolat Khojayev'],
    projects: [
      {
        projectId: '249d9a0f-13e8-4c15-a5a8-195d637466d6',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e21'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e22'
    },
    id: '5220674c-cc3e-4132-92ed-9d69aa1c01c2',
    name: 'liberland llc, based in hongkong.',
    members: [],
    projects: [
      {
        projectId: '74548715-bcca-4a98-b025-e02024eb88f7',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e23'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e24'
    },
    id: 'e23e91b5-9a3e-47c9-b83e-bbc6f9816890',
    name: 'virto network',
    members: [
      '**Team lead and architect** Daniel Olano  ',
      '**Lead economist and game theory expert** Qian Che  ',
      '**Runtime Developer** Stanly Johnson  ',
      '**Developer and Marketplace builder** David Barinas  ',
      '**Rust Developer** Kenji Phang  ',
      '**Rust Developer** Gabriela Azcona'
    ],
    projects: [
      {
        projectId: 'b546cd21-f6b0-4c78-8937-170e6e73b69e',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e25'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e26'
    },
    id: '6d8fe1a1-a34e-4054-961a-1cebe1b9f598',
    name: 'logion',
    members: [
      'David Schmitz - Community Leader (Tech and Legal), Substrate Runtime Developer, Polkadot Head Ambassador, logion founder, Metaverse (NFG)',
      'Gérard Dethier - Distributed & critical system expert, Backend Software architect, logion co-founder',
      'Benoit Devos - Mission critical projects, Frontend Software architect, Senior Software developer, logion co-founder',
      'Elie Auvray - Product Officer, Open source & privacy lead, logion co-founder'
    ],
    projects: [
      {
        projectId: '417500f7-c319-49df-8ea7-11e702d0a04a',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e27'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e28'
    },
    id: '674191af-9c3d-4e54-966b-4b8d68e0ab69',
    name: '',
    members: [],
    projects: [
      {
        projectId: '9dffc5e9-02d8-4067-9416-a1fee3c09c7a',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e29'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e2a'
    },
    id: '10f052a7-98b8-4e23-a8f0-a5b81ce32116',
    name: '',
    members: [
      '**Shumo Chu, Co-Founder**.',
      '**Victor Ji, Co-Founder**.',
      '**Kenny Li, Product Lead**.',
      '**Kevin Gislason, Full-stack Engineer**.',
      '**Georgi Zlatarev, Infrastructure Engineer**.',
      '**Jammie Deng, Infrastructure Engineer**.',
      '**Gabriela Brown, Full-stack Engineer**.',
      '**Brandon Gomes, Cryptographic Engineer**.',
      '**Rob Thijssen, Devop Engineer**.',
      "Detailed experience see **Team's experience section**."
    ],
    projects: [
      {
        projectId: 'd549119d-a478-47cd-94c9-302389593097',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e2b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e2c'
    },
    id: 'ea88ff9f-eacf-4239-a449-ef375fc4f4df',
    name: '',
    members: [
      'Name of team leader:  Minh Doan',
      'Names of team members:',
      'Tran Thanh Vu',
      'Vu Viet Tai',
      'Nguyen Anh Huy',
      'Nguyen Manh Dat',
      'Thien Tuong',
      'Bui Tran Huy Hoang'
    ],
    projects: [
      {
        projectId: '4c9a2dc2-552f-4afa-917b-cf492f7fa5c5',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e2d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e2e'
    },
    id: 'abd4f559-65a6-48c9-b8e1-017a2fe5ea85',
    name: '',
    members: [],
    projects: [
      {
        projectId: '8439407b-69a5-432e-9a8b-b4a07ee2c4e7',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e2f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e30'
    },
    id: '53a56812-fde2-402f-bb87-7444eb4c8d52',
    name: '',
    members: [
      'Daniel Leping, @dileping on GitHub, CEO',
      'Yehor Popovych, @ypopovych on GitHub, CTO'
    ],
    projects: [
      {
        projectId: 'f25a4730-4d4f-4fd0-85f6-0f45acdd2d92',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e31'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e32'
    },
    id: '4c557a4e-a1bd-4a7f-a58a-450094e83fe0',
    name: '',
    members: [
      '[Wan Bei](https://github.com/woeom), [Hong Tao](https://github.com/carlhong)',
      'Legal Structure',
      'Shanghai Yitaiyuan Tech'
    ],
    projects: [
      {
        projectId: '9070686c-4fe3-436d-8625-216f5048ded8',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e33'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e34'
    },
    id: 'dabf7284-73d2-481d-a95e-da6d323f2368',
    name: 'mybank labs',
    members: [],
    projects: [
      {
        projectId: 'be49908a-8956-40c7-a4b9-94924202337e',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e35'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e36'
    },
    id: 'c34c6842-32b7-4621-8c5b-1578b7b8cdc4',
    name: 'hashed systems (max gravitt)',
    members: [
      'Max Gravitt - Architect/Lead and Proposal Author',
      'Sebastian Montero - Blockchain Engineer',
      'Abel Yanez - Blockchain Engineer',
      'Alejandro Garcia - UI Developer',
      'Other team members as needed',
      'Among the other Substrate experience, Max and Sebastian have also completed the [Substrate Runtime Developer Academy](https://www.industryconnect.org/substrate-runtime-developer-academy/).'
    ],
    projects: [
      {
        projectId: 'f96cf43d-caf6-4a81-bcb8-c24724ad75f5',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e37'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e38'
    },
    id: '9e800e93-6504-490d-add6-6e7556d6e1bc',
    name: 'standard protocol',
    members: [
      '(Development & Engineers)',
      '[Hyungsuk Kang](https://www.linkedin.com/in/hyungsukkang) - Founder & Head of Development'
    ],
    projects: [
      {
        projectId: 'fadc6080-1ceb-4ab6-97df-c72118d3a6e7',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e39'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e3a'
    },
    id: 'bffc602c-fb07-4f03-950a-e97152fe9163',
    name: 'dmitrii koshelev',
    members: [
      'Name of team leader',
      'Dmitrii Koshelev',
      'Names of team members',
      'My colleague who is a professional Rust programmer. He prefers to be anonymous.'
    ],
    projects: [
      {
        projectId: 'dba4fa6e-d29b-4d61-aae1-4164da498a33',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e3b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e3c'
    },
    id: 'cbd1e634-a37b-4562-95d6-938ebf83df1a',
    name: 'newomega',
    members: [
      'Wiktor Starczewski',
      'Contributors',
      'Michal Stanczak (Visual Design)'
    ],
    projects: [
      {
        projectId: '5e5e8bad-33a6-4d52-ae45-96f600c0c486',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e3d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e3e'
    },
    id: 'aeff1e03-7310-4274-be52-35f9cd5c96ef',
    name: 'newomega',
    members: ['Wiktor Starczewski'],
    projects: [
      {
        projectId: '8d671c5f-faf1-43bb-8650-d29a599b9a09',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e3f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e40'
    },
    id: 'b7470f32-3eb3-4ed9-be38-3959661e9af8',
    name: '',
    members: [
      'Michael Huntington: Senior Software Engineer.',
      'Michael Rochester: Project Manager and Software Project Implementation'
    ],
    projects: [
      {
        projectId: 'ec900da6-f55e-4d2a-84b1-f8fa81564f7c',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e41'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e42'
    },
    id: 'cf800934-64d5-4932-b03b-2550f714a1b2',
    name: 'uniscan',
    members: [
      'Kyle Gu: product manager',
      'Tuminfei: architecture and blockchain consultant',
      'Aki Wu: full-stack developer'
    ],
    projects: [
      {
        projectId: 'c388bbd4-7f6f-43e9-a861-efa1737157d2',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e43'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e44'
    },
    id: '6be5ca90-d5e6-4c0c-9458-04c5760508ff',
    name: '',
    members: [],
    projects: [
      {
        projectId: '5c893a5a-ec6f-4730-a4f7-c9b47183e6b0',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e45'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e46'
    },
    id: '66b58e42-8479-47d0-b607-5a7938c5155a',
    name: 'so/da zone',
    members: ['Marc Fornós', 'Xueying Wang'],
    projects: [
      {
        projectId: '03b2ab02-b07d-4782-ae8e-3eae62849b1e',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e47'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e48'
    },
    id: '8193d738-0777-4a61-a783-66d11de8e7b0',
    name: 'odyssey b.v.',
    members: [
      'Odyssey  has over 30 people working on Momentum and is still growing. Odyssey works in tracks with dedicated team members. The Token Track Team will be primarily responsible for building the Substrate Pallets.',
      'OVERALL ARCHITECT: Anton Starikov (CTO)',
      '**TOKEN TRACK TEAM**',
      'TRACK LEAD: Dave Hoogendoorn',
      'RUST DEVELOPER: Denis Cavalli',
      'WEB3ANALYST: Tim Jansen',
      '*All team members are solely dedicated to the token Track.*'
    ],
    projects: [
      {
        projectId: 'b0271787-bb46-477d-98d1-141334be19cb',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e49'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e4a'
    },
    id: '257c71de-649a-4899-8c07-e899b0e177a3',
    name: 'bela supernova',
    members: [
      'Gregor Knafelc, CEO at BitIns Ltd.',
      'Andrej Muzevic, member of the Board at Bela Supernova d.o.o',
      'Sergey Cymbal, MBA, CEO at Bela Supernova d.o.o',
      'Sergey Zolotukhin, CTO at Bela Supernova d.o.o',
      'Dmitrii Putilov, Blockchain Department Director at Bela Supernova d.o.o',
      'Dmitrii Volodin, COO at Bela Supernova d.o.o',
      'Ilia Shavrin, Full stack software developer at Bela Supernova d.o.o',
      'Anton Shramko, Full stack software developer at Bela Supernova d.o.o',
      'Ksenia Baranova, QA Lead at Bela Supernova d.o.o',
      'Alexey Vexin, Project Manager at Bela Supernova d.o.o',
      'Anton Borisov, DevOps Engineer at Bela Supernova d.o.o'
    ],
    projects: [
      {
        projectId: '7cc2bd29-a676-46b0-aadd-9f7471668394',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e4b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e4c'
    },
    id: '9bac71fe-aa2a-4584-84ca-08b11012c0d4',
    name: 'phala network',
    members: [
      'Hang Yin: Lead & Software Engineer',
      'Jun Jiang: Project Manager & Software Architect'
    ],
    projects: [
      {
        projectId: 'f0d8cdad-a2b0-45d0-ad45-9f6eeb053bae',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e4d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e4e'
    },
    id: '6a42db0f-43b7-4dbd-8983-6f03d24452df',
    name: 'polkadrys labs',
    members: [
      'Luca Auet',
      'Ezequiel Golub',
      'Gabriel González',
      'Tomas Rawski'
    ],
    projects: [
      {
        projectId: '1bc6f716-5054-4772-9ac5-b404fa0042a8',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e4f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e50'
    },
    id: '7bc11849-86dd-4e6e-8bc6-a6fc179228d1',
    name: '[727.ventures](https://github.com/727-ventures)',
    members: [
      '**Markian Ivanichok** (CEO | 727.ventures)  ',
      '**Fedor Lebed** (Head of Operations | 727.ventures)  ',
      '**Green Baneling** (Blockchain Core Rust Engineer | 727.ventures)  ',
      '**Dominik Krížo** (Head of Engineering | 727.ventures)',
      '**Varex Silver** (Blockchain developer | 727.ventures)',
      '**Artem Lech** (Blockchain developer | 727.ventures)',
      '**Nameless Endless** (Blockchain developer | 727.ventures)',
      '**Maria Nevska** (Marketing specialist | 727.ventures)'
    ],
    projects: [
      {
        projectId: '82dc6918-52ee-456c-8c7e-ef63a4514128',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e51'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e52'
    },
    id: 'beb75dbd-4c0e-41d0-85b5-3bbfd9ea04e9',
    name: '[supercolony](https://github.com/supercolony-net)',
    members: [
      '**Markian Ivanichok** (Founder & Blockchain Engineer)  ',
      '**Ian Arden** (Advisor)  ',
      '**Green Baneling** (Blockchain Core Rust Engineer)  ',
      '**Sven Seven** (Fullstack Rust Engineer)  ',
      '**Pierre Ossun** (Rust Engineer)  ',
      '**Dmitry Kryshtal** (Marketing)  ',
      '**Varg Vikernes** (Blockchain Rust Engineer)  ',
      '**Vasyl Novak** (Researcher)  ',
      '**Lera Laricheva** (Designer)'
    ],
    projects: [
      {
        projectId: '51627e30-2f40-40c7-837e-e030bde65d99',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e53'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e54'
    },
    id: '3fc7a6cd-914f-4b50-b874-dec6a9ae1c7e',
    name: '[supercolony](https://github.com/supercolony-net)',
    members: [
      '**Markian Ivanichok** (Founder & Blockchain Engineer)  ',
      '**Ian Arden** (Advisor)  ',
      '**Hartej Sawhney** (Advisor)  ',
      '**Dmitry Kryshtal** (Marketing and BD)  ',
      '**Green Baneling** (Blockchain Core Rust Engineer)  ',
      '**Sven Seven** (Fullstack Rust Engineer)  ',
      '**Varg Vikernes** (Blockchain Rust Engineer)  ',
      '**Vasyl Novak** (Researcher)  ',
      '**Lera Laricheva** (Designer)'
    ],
    projects: [
      {
        projectId: 'ff8ef049-46f2-4d7f-87e4-c8663790ffc9',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e55'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e56'
    },
    id: 'f5c6b82f-ff08-4235-83b2-78991cbb8209',
    name: 'open rollup',
    members: ['Chris Cen'],
    projects: [
      {
        projectId: '8c7194e2-fa4a-4d0c-af2c-837b202a628f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e57'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e58'
    },
    id: 'adaf6711-de45-422d-b5c1-25728375c29b',
    name: '',
    members: ['Sam Lee', 'yang zhou', 'Jack', 'Simon Wang', 'Frank'],
    projects: [
      {
        projectId: '8903dc28-f5de-401f-872a-4785d1c1706e',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e59'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e5a'
    },
    id: 'f8c9e81e-a62d-41bc-8f51-e8416675857a',
    name: 'the bacon beacon',
    members: ['Bacon', 'Ham'],
    projects: [
      {
        projectId: 'cb560eb7-abbe-4273-9c17-fa51cac6ee1e',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e5b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e5c'
    },
    id: 'e7466b1b-4e72-4c7e-a281-fb2cd15710ac',
    name: '',
    members: [
      'Name of team leader: Filip Pajic',
      'Names of team members: Vuksan Simunovic, Filip Pajic, Andrej Rakic.'
    ],
    projects: [
      {
        projectId: '9cc7a666-5c50-4d7a-94d1-d5d6ccc9410f',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e5d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e5e'
    },
    id: 'ba65db18-f632-4587-8886-00efebc708e3',
    name: 'decentration',
    members: [
      '*Name of team leader:* Ramsey Ajram',
      '*Names of team members:* Timothée Delabrouille, Nathan Gardet, Jan Kraus, Eljo Prfiti, Richard Wells'
    ],
    projects: [
      {
        projectId: '63f0ea6b-436d-4b16-8a5b-79eaddd80fba',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e5f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e60'
    },
    id: '003ba7ad-e870-4102-995b-e1a2b9223f4f',
    name: 'simply vc',
    members: [
      '**Team lead and full stack developer**: Dylan Galea',
      '**Full stack developer**: Guilherme Zimmermann',
      '**Full stack developer**: Daniel Cherrett',
      '**Full stack developer**: Francesco Borg Bonello',
      '**Full stack developer**: Ríder Cantuária',
      '**Product owner**: Christian Falzon'
    ],
    projects: [
      {
        projectId: '8ad4db68-27df-4ccb-a75b-77e7a0e72d4a',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e61'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e62'
    },
    id: '07a47c9e-0230-4ba8-b776-72e5f1c1902a',
    name: '',
    members: [],
    projects: [
      {
        projectId: '6f2c57d6-fc32-4a04-808a-21b430cb5f74',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e63'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e64'
    },
    id: 'cbc9c66a-edc5-434f-b0ba-b8c295a13254',
    name: 'the parami team',
    members: [
      'Lucas WU, Team Leader',
      'Dorian, Blockchain Architect',
      'Yanping YANG, Full-stack Developer',
      'Alex, Product Director'
    ],
    projects: [
      {
        projectId: 'e88b1015-5a7b-481a-8c23-ffa7d807796a',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e65'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e66'
    },
    id: 'ccc0a56f-6f98-4866-8f6f-c51b061fc0d4',
    name: '[727.ventures](https://github.com/727-ventures)',
    members: [
      '**Markian Ivanichok** (СEO of 727.ventures)',
      '**Dominik Krížo** (Head of Engineering | 727.ventures)',
      '**Ivan Leshchenko** (Blockchain Developer | 727.ventures)',
      '**Nameless Endless** (Blockchain Developer | 727.ventures)',
      '**Varex Silver** (Blockchain Developer | 727.ventures)',
      '**Artem Lech** (Blockchain Developer | 727.ventures)',
      '**Matviy Matsipura** (Designer | 727.ventures)'
    ],
    projects: [
      {
        projectId: '1c9368df-68a2-483a-a296-f17e90ef2c52',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e67'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e68'
    },
    id: '556450a2-06f7-4219-9e2e-af53dbea524e',
    name: '[perun](https://perun.network)@[polycrypt](https://polycry.pt)',
    members: [
      'The PolyCrypt/Perun team consists of leading academic researchers in the off-chain space and experienced software developers of blockchain and cryptographic software. The team members include:',
      '**Prof. Sebastian Faust** (Co-founder, research lead) is a full professor at the Computer Science department of Technical University of Darmstadt, where he leads the applied cryptography and blockchain lab. He has published more than 60 academic papers in cryptography and blockchain technologies at leading venues for research in IT Security and Cryptography. He frequently serves in program committees of prestigious conferences including Eurocrypt, IEEE S&P and NDSS. For his work he received multiple awards including the Eurocrypt’14 best paper award and the DFG/FNP Copernicus prize 2020. His main scientific contributions to the blockchain space are the co-invention of the concept of Proofs of Space (on which the cryptocurrency Chia is based), the first formal analysis of BIP32 wallets, and extensive work on off-chain protocols. The latter includes the development of the Perun off-chain protocols published in a series of works at IEEE S&P, Eurocrypt and ACM CCS. These publications form the mathematical foundations for the Perun software development project that is currently funded by a BMBF grant for founding high-tech companies in the IT Security space. Sebastian Faust leads research at PolyCrypt and the protocols used in go-perun are based on his work.',
      '**Hendrik Amler** (Co-founder, CEO, team and project management, @tinnendo)',
      '**Dr. Matthias Geihs** (Software architect, researcher, @matthiasgeihs) currently leads the development of the go-perun library. He holds a PhD in Computer Science from TU Darmstadt and previously worked as an IT Security Specialist at Deutsche Börse Group.',
      '**Steffen Rattay** (Core Developer, @RmbRT)',
      '**Norbert Dzikowski** (Core Developer, @ndzik)',
      '**Philipp Lehwalder** (Developer, @cryptphil)',
      'The Ajuna Network team consists of experienced software developers of blockchain and gaming software. The team members include:',
      '**Cedric Decoster** (Co-founder, CEO) Cédric has been a software engineer and solution architect for over 20 years and worked on enterprise applications in the Swiss banking sector. In his spare time, he has worked passionately on various blockchain and gaming projects for years. Cédric holds a bachelor’s degree in computer science.',
      '**André Schneider** (Co-founder, COO) André is a computer scientist who worked for the past 20 years in consulting, business analytics and finance positions in the Swiss banking and consulting sector. Next to his work, André is a passionate game developer and gamer. He holds degrees in computer science and banking & finance.',
      '**Nicholas Douzinas** (Co-founder, business development) Nicholas is an experienced entrepreneur and business development executive. After working at Deutsche Bank and GSK, Nicholas transitioned to the startup world and founded (crypto) companies on his own. He holds master’s degrees from Cass Business School and Imperial College London.',
      '**Eric Lim** (Senior Developer, Substrate, @cowboy-bebug)',
      '**Andy Bell** (Senior Developer, Substrate, @andyjsbell)',
      '**Jean Seong Bjorn Choe** (Senior Developer, C#/C++, @rnilva)',
      '**Dimitris Paxinos** (Senior Developer, C#/C++, @dimitrispaxinos)'
    ],
    projects: [
      {
        projectId: '278bad52-54e1-466b-97f6-64bf3f88ddb8',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e69'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e6a'
    },
    id: '75185f1a-a2ed-40ef-875c-8fb6cbbefbaa',
    name: 'polycrypt/perun',
    members: [
      'The PolyCrypt/Perun team consists of leading academic researchers in the off-chain space and experienced software developers of blockchain and cryptographic software. The team members include:',
      '**Prof. Sebastian Faust** _(Co-founder, research lead)_ is a full professor at the Computer Science department of Technical University of Darmstadt, where he leads the applied cryptography and blockchain lab. He has published more than 60 academic papers in cryptography and blockchain technologies at leading venues for research in IT Security and Cryptography. He frequently serves in program committees of prestigious conferences including Eurocrypt, IEEE S&P and NDSS. For his work he received multiple awards including the Eurocrypt’14 best paper award and the DFG/FNP Copernicus prize 2020. His main scientific contributions to the blockchain space are the co-invention of the concept of Proofs of Space (on which the cryptocurrency Chia is based), the first formal analysis of BIP32 wallets, and extensive work on off-chain protocols. The latter includes the development of the Perun off-chain protocols published in a series of works at IEEE S&P, Eurocrypt and ACM CCS. These publications form the mathematical foundations for the Perun software development project that is currently funded by a BMBF grant for founding high-tech companies in the IT Security space. Sebastian Faust leads research at PolyCrypt and the protocols used in _go-perun_ are based on his work.',
      '**Sebastian Stammler** _(Co-founder, Co-CEO, technical lead, @sebastianst)_ is the technical lead at PolyCrypt. He has studied mathematics at TU Darmstadt and the University of Cambridge and has subsequently worked as a mathematician in quantitative finance at Ernst & Young in Frankfurt, Germany. He then joined a software development startup for one year, finally starting a PhD in computer science at TU Darmstadt in the field of secure multi-party computation, which he is about to complete. While at TU Darmstadt, he joined the Perun team in 2019 to lead the initial development of the `go-perun` framework, which then saw its first release in December 2019.',
      '**Dr. Matthias Geihs** _(software architect, researcher, @matthiasgeihs)_ currently leads the development of the _go-perun_ library. He holds a PhD in Computer Science from TU Darmstadt and previously worked as an IT Security Specialist at Deutsche Börse Group.',
      '**Hendrik Amler** _(Co-founder, Co-CEO, team management, @tinnendo)_',
      '**Steffen Rattay** _(Developer, @RmbRT)_',
      '**Oliver Tale-Yazdi** _(Developer, @ggwpez)_',
      '**Norbert Dzikowski** _(Developer, @ndzik)_',
      '**Philipp Lehwalder** _(Developer, @cryptphil)_',
      '**Sasan Safai** _(Co-founder, business development)_',
      '**Prof. Stefan Dziembowski** _(Co-inventor of Perun, Head of Cryptography Research Group at University of Warsaw)_'
    ],
    projects: [
      {
        projectId: '23f44a8c-ca6e-4651-92ad-51e318a9c614',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e6b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e6c'
    },
    id: '720eaa33-fe16-43dd-b4fe-16e37111d136',
    name: 'perun@polycrypt',
    members: [
      'The PolyCrypt/Perun team consists of leading academic researchers in the off-chain space and experienced software developers of blockchain and cryptographic software. The team members include:',
      '**Prof. Sebastian Faust** _(Co-founder, research lead)_ is a full professor at the Computer Science department of Technical University of Darmstadt, where he leads the applied cryptography and blockchain lab. He has published more than 60 academic papers in cryptography and blockchain technologies at leading venues for research in IT Security and Cryptography. He frequently serves in program committees of prestigious conferences including Eurocrypt, IEEE S&P and NDSS. For his work he received multiple awards including the Eurocrypt’14 best paper award and the DFG/FNP Copernicus prize 2020. His main scientific contributions to the blockchain space are the co-invention of the concept of Proofs of Space (on which the cryptocurrency Chia is based), the first formal analysis of BIP32 wallets, and extensive work on off-chain protocols. The latter includes the development of the Perun off-chain protocols published in a series of works at IEEE S&P, Eurocrypt and ACM CCS. These publications form the mathematical foundations for the Perun software development project that is currently funded by a BMBF grant for founding high-tech companies in the IT Security space. Sebastian Faust leads research at PolyCrypt and the protocols used in _go-perun_ are based on his work.',
      '**Sebastian Stammler** _(Co-founder, Co-CEO, technical lead, @sebastianst)_ is the technical lead at PolyCrypt. He has studied mathematics at TU Darmstadt and the University of Cambridge and has subsequently worked as a mathematician in quantitative finance at Ernst & Young in Frankfurt, Germany. He then joined a software development startup for one year, finally starting a PhD in computer science at TU Darmstadt in the field of secure multi-party computation, which he is about to complete. While at TU Darmstadt, he joined the Perun team in 2019 to lead the initial development of the `go-perun` framework, which then saw its first release in December 2019.',
      '**Dr. Matthias Geihs** _(software architect, researcher, @matthiasgeihs)_ currently leads the development of the _go-perun_ library. He holds a PhD in Computer Science from TU Darmstadt and previously worked as an IT Security Specialist at Deutsche Börse Group.',
      '**Hendrik Amler** _(Co-founder, Co-CEO, team management, @tinnendo)_',
      '**Steffen Rattay** _(Developer, @RmbRT)_',
      '**Oliver Tale-Yazdi** _(Developer, @ggwpez)_',
      '**Norbert Dzikowski** _(Developer, @ndzik)_',
      '**Philipp Lehwalder** _(Developer, @cryptphil)_',
      '**Sasan Safai** _(Co-founder, business development)_',
      '**Prof. Stefan Dziembowski** _(Co-inventor of Perun, Head of Cryptography Research Group at University of Warsaw)_'
    ],
    projects: [
      {
        projectId: 'ce378b3b-e048-40ae-91e4-79ee4653ce43',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e6d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e6e'
    },
    id: 'c5a1e79d-c31d-4b55-8121-1e499da32f2f',
    name: '',
    members: [
      'Suruchi Gupta (Founder & CEO)',
      'Jinesh Doshi (Engineering head)',
      'Leo Anbarasan M (Tech Lead/ Lead developer)'
    ],
    projects: [
      {
        projectId: 'e1a8e3c5-443d-4470-bcb5-2a8cc2286ca1',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e6f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e70'
    },
    id: 'd9454405-d3c8-4be5-9813-400fd2113376',
    name: '[gmajor](https://github.com/gmajor-encrypt)',
    members: ['gmajor'],
    projects: [
      {
        projectId: 'dddcd694-c33e-4ac6-b792-c05b5ca12651',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e71'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e72'
    },
    id: '351b52de-59e1-49b9-b1a9-0d8e2e09f4a0',
    name: '[gmajor](https://github.com/gmajor-encrypt)',
    members: ['gmajor'],
    projects: [
      {
        projectId: 'e4461226-db5b-4e14-ad5e-0bad78363e02',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e73'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e74'
    },
    id: 'e0497e7d-62cc-48c2-a8be-cd77d5e2559e',
    name: '[gmajor](https://github.com/gmajor-encrypt)',
    members: ['gmajor'],
    projects: [
      {
        projectId: '28cadde6-b6dd-429a-9cb8-e8da6ae3d449',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e75'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e76'
    },
    id: '7cb18b9a-a99e-41c3-870c-a0464cbeefe0',
    name: 'nitor infotech',
    members: [
      'Tejbahadur Singh ( tejbahadur.singh@nitorinfotech.com )',
      'Kapil Joshi ( Kapil.joshi@nitorinfotech.com )',
      'Neha Reddy ( neha.reddy@nitorinfotech.com )',
      'Arati Bongale ( arati.bongale@nitorinfotech.com )'
    ],
    projects: [
      {
        projectId: 'df56338d-d210-426e-91fe-cee567613785',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e77'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e78'
    },
    id: '26b77392-7d18-4c66-9d3f-ee329a748c4e',
    name: 'valibre',
    members: [
      '**Team Lead** Daniel Olano  ',
      '**Runtime Developer** Stanly Johnson  ',
      '**Communications & Business Development** Samantha Robertson'
    ],
    projects: [
      {
        projectId: '7b9f9d88-1fe6-44e8-b601-3162f4af0053',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e79'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e7a'
    },
    id: 'b1fef205-6bed-462c-b615-2b60da20cf8c',
    name: 'cyril carlier',
    members: ['Cyril Carlier'],
    projects: [
      {
        projectId: '332a5e4c-3578-44e3-9834-5c427a16f48e',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e7b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e7c'
    },
    id: 'ac0e7690-c0f5-4310-9fa6-f5eb54d4fd67',
    name: '',
    members: [
      'Vivek Prasannan (Btech Computer Engineering) is passionate about Decentralized computing and has been actively following the crypto/blockchain community since 2013. He has researched and worked on a new [BSIP](https://github.com/bitshares/bsips/pull/119)  for Bitshares that will enable off-chain activities that can be settled transparently on the blockchain, and implicitly enables the creation of savings accounts for the users that are locked a certain time period to enhance fund security. He has successfully exited two startups in cloud computing, infrastructure support, and fintech space.',
      'Experience: C++, RUST & Substrate Framework',
      'Gautham J, a 3rd-year B.Tech undergrad student at National Institute of Technology, Calicut, India. He has been at the forefront of distributed ledger technology by launching his own version of a consensus algorithm known as Pebble using Lamport’s vector clocks which is still in progress. The team received a blockchain innovation award from the BFSI sector by Banking Frontier. He has also co-authored an academic paper for Supply Chain management and predictions using machine learning models and ethereum network which is currently being peer-reviewed.',
      'Experienced in GoLang, RUST, Python, C++, and Substrate Framework.',
      'Deepansh Singh, a 4th-year  B.Tech undergrad student at National Institute of Technology, Calicut, India. worked with multiple early-stage startups for developing business strategies and exited after making those startups a success. One of the startups that he worked got the Best Startup award in the National Institute of Technology Startup Conclave. He is also part of the Innovation Council for universities in Kerala under the Government of India. He along with Gautham received an award for their innovative consensus algorithm that enables high throughput transactions in permissionless networks.'
    ],
    projects: [
      {
        projectId: '2699e8b0-a7a4-44df-af21-91288d76cf1a',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e7d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e7e'
    },
    id: 'f36e68d7-cf4a-4657-bb35-7605404eb682',
    name: 'protofire',
    members: [
      'The project will be led by Diego Torres, protofires field CTO',
      'Our Developer will be Henry Palacios',
      'And the UI/UX expert is Agustin Longoni'
    ],
    projects: [
      {
        projectId: '42495be8-f0af-4c77-9b52-6eb4773035d4',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e7f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e80'
    },
    id: '11d6d692-1c9f-44a3-96b8-15736dad1a60',
    name: '',
    members: [],
    projects: [
      {
        projectId: '076113f3-a7be-4eb2-b21c-0b1eeb1ebfd6',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e81'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e82'
    },
    id: '2855dbe6-c54a-4b19-bbd8-24dc9f929591',
    name: 'chainsafe',
    members: ['Thibaut Sardan @tbaut'],
    projects: [
      {
        projectId: 'd8d56a39-0f90-42e6-b6ba-6cafb37c4b19',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e83'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e84'
    },
    id: '24ef0a4b-715d-4f40-9f9c-a826cfb129ae',
    name: 'na',
    members: [
      'Name of team leader:',
      'Anwesh Nayak (@muddlebee)',
      'Names of team members:',
      'Arnav Nayak',
      'Dikhyant Krishna'
    ],
    projects: [
      {
        projectId: 'ad2beea0-e5a9-483a-9969-d15bde712312',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e85'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e86'
    },
    id: '61505820-95f9-4580-a297-db8818f8fd92',
    name: '',
    members: [],
    projects: [
      {
        projectId: '1e4f625b-b191-40dd-9ef4-ac6a846d78ee',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e87'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e88'
    },
    id: 'cda98ae2-fbe7-4ba4-b15e-6156e161d605',
    name: '',
    members: [],
    projects: [
      {
        projectId: '72161555-1f64-452f-b408-f4ababf67fee',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e89'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e8a'
    },
    id: '7f145f2f-abaa-4e59-b6b8-dec26ceba6a7',
    name: 'ezcode',
    members: [
      'CEO: Pavel Popov',
      'Full-stack Developer: Alex A.',
      'Bubble developer: Alexandru M.',
      'Support: Andrew'
    ],
    projects: [
      {
        projectId: '6ee8a4f1-16a0-4c33-b9bd-1fccea677177',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e8b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e8c'
    },
    id: 'c583d647-6142-4350-87d5-0493e6288b8d',
    name: 'justmert',
    members: ['Mert Köklü - Project Owner'],
    projects: [
      {
        projectId: '3b03fba5-70d3-4ead-8256-96967f3503c0',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e8d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e8e'
    },
    id: 'd53daf5b-bbef-4587-88e8-e6dfbf99b34a',
    name: 'nathan schwermann',
    members: ['Nathan Schwermann'],
    projects: [
      {
        projectId: '3875a211-b24a-48ce-93af-0ec66150f8eb',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e8f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e90'
    },
    id: '5d2ee528-8b14-45ee-b5c6-65d3d93c564e',
    name: 'ramp defi',
    members: [
      '**Lawrence Lim**',
      'Project Lead for RAMP DEFI, a leading DeFi protocol providing cross-chain liquid staking solutions.',
      'Head of International Growth at IOST, a layer 1 blockchain protocol.',
      'Global Sales at TradeGecko, an inventory management software company acquired by Intuit.',
      'Corporate finance and private banking in global financial institutions including JP Morgan, BNP Paribas and KPMG.',
      'LinkedIn: https://www.linkedin.com/in/lawrencelimhz/',
      '**Loh Zheng Rong**',
      'Global Marketing Lead for RAMP DEFI overseeing overall project marketing execution and team operations.',
      'Investments and blockchain advisory at Merkle Ventures.',
      'COO of Toucan, Payments aggregator platform in S.E.A region.',
      'LinkedIn: https://www.linkedin.com/in/lohzhengrong/',
      '**Jade Wang**',
      'Greater China Marketing Lead for RAMP DEFI, focusing on China market growth and development.',
      'International Marketing Manager for IOST, a layer 1 blockchain protocol with headquarters in Beijing.',
      '**Caspar Oostendorp**',
      'Technical Lead for RAMP DEFI overseeing technical R&D, multi-chain protocol deployments and multi-chain node operations.',
      'Co-founder of BlockDevs Asia, a community of DLT/Blockchain tech devs.',
      'Co-founder of Oost & Voort, specializing in cloud and blockchain solutions.',
      'LinkedIn: https://www.linkedin.com/in/caspar-oostendorp-7bb82873/',
      '**Anu Nair**',
      'Blockchain Lead for RAMP DEFI overseeing product R&D, multi-chain protocol integrations and smart contracts development.',
      'Senior blockchain developer at Propine, a digital asset custodian regulated by the Monetary Authority of Singapore.',
      'Senior software engineer in leading software companies including Oracle and Manthan.',
      'LinkedIn: https://www.linkedin.com/in/anu-b-nair-0551763a/',
      '**Jeannette Zhang**',
      'Operations Lead overseeing business operations and finance.',
      'Strategy and Finance Manager at Hashed.Labs, a blockchain incubator in partnership with the Singapore government.',
      'Senior Auditor at Deloitte overseeing audit engagements.',
      'LinkedIn: https://www.linkedin.com/in/jeanettez/',
      "Team's Experience",
      'Polkakeeper is conceptualized by RAMP DEFI, a leading DeFi project specializing in cross-chain staked liquidity solutions. The team members collectively have commercial experiences in scaling up decentralized projects and node operations, and have deep technical expertise in blockchain protocol developments in various programming languages including Solidity, Javascript and Python.',
      'RAMP helps users unlock the value of non-ERC20 assets by collateralizing them into fungible liquidity and bridging this liquidity into Ethereum. As of today, RAMP had already created integrations across Ethereum, IOST, Tomochain and Tezos, with more integrations under active development.',
      'RAMP is already building cross-chain keeper solutions, and its suite of DeFi products for staked liquidity and value assurance can similarly be customized and launched for the Polkadot network.',
      'App link: https://app.rampdefi.com/#/',
      'RAMP Vaults TVL: 15.4 Million USDT value',
      'https://app.rampdefi.com/#/vault',
      '![](https://rampdefi.com/polkakeeper/digitalassets/vaults.png)',
      'RAMP DEFI rStake: Cross-chain integrated stake farming with native assets',
      'https://app.rampdefi.com/#/stake/iost',
      'https://app.rampdefi.com/#/stake/tomo',
      'https://app.rampdefi.com/#/stake/tezos',
      '![](https://rampdefi.com/polkakeeper/digitalassets/rstake.png)',
      '**Integration Partners for RAMP DEFI include:**',
      'IOST | TOMOCHAIN | SOLANA | ELROND | NULS | MOONSTAKE | INJECTIVE PROTOCOL | CRUST | STONE FINANCE | ALLIANCE BLOCK',
      'Team Code Repos',
      'https://github.com/RAMP-DEFI',
      'https://github.com/RAMP-DEFI/RAMP_IOST',
      'https://github.com/RAMP-DEFI/RAMP_TOMOCHAIN',
      '[https://github.com/RAMP-DEFI/RAMP\\_VERSION\\_TEZOS](https://github.com/RAMP-DEFI/RAMP_VERSION_TEZOS)',
      '[https://github.com/RAMP-DEFI/RAMP\\_REWARDS\\_MANAGER](https://github.com/RAMP-DEFI/RAMP_REWARDS_MANAGER)',
      'https://github.com/RAMP-DEFI/RAMP_API',
      '[https://github.com/RAMP-DEFI/RAMP\\_WEB\\_MAIN](https://github.com/RAMP-DEFI/RAMP_WEB_MAIN)',
      'https://github.com/RAMP-DEFI/RAMP_wRAMP',
      'https://github.com/RAMP-DEFI/RAMP_IOSTSWAP',
      '[https://github.com/RAMP-DEFI/RAMP\\_Public\\_Sale](https://github.com/RAMP-DEFI/RAMP_Public_Sale)',
      '[https://github.com/RAMP-DEFI/RAMP\\_ERC\\_CLAIM_DAPP](https://github.com/RAMP-DEFI/RAMP_ERC_CLAIM_DAPP)',
      '[https://github.com/RAMP-DEFI/RAMP\\_SECURITY\\_AUDITS_REWARDS](https://github.com/RAMP-DEFI/RAMP_SECURITY_AUDITS_REWARDS)',
      '[https://github.com/RAMP-DEFI/RAMP\\_SECURITY\\_AUDITS_IOST](https://github.com/RAMP-DEFI/RAMP_SECURITY_AUDITS_IOST)',
      '[https://github.com/RAMP-DEFI/RAMP\\_SECURITY\\_AUDITS_TOMOCHAIN](https://github.com/RAMP-DEFI/RAMP_SECURITY_AUDITS_TOMOCHAIN)'
    ],
    projects: [
      {
        projectId: 'ca85f2a5-f14b-4934-9e39-eefbceedf106',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e91'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e92'
    },
    id: '2d34ba48-417c-48a1-b788-2ca6223870d6',
    name: 'polkamusic',
    members: [
      'Phalgun Shenoy',
      'John Fortner',
      'Suraj Kumar',
      'Pranshu Rastogi'
    ],
    projects: [
      {
        projectId: 'da18b084-44fb-48ff-b79c-5aefd36b56d0',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e93'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e94'
    },
    id: '3353e4c2-22bf-42aa-a9f1-119f73ba38bc',
    name: 'aviraj khare',
    members: ['Aviraj Khare'],
    projects: [
      {
        projectId: '4fef1984-503f-4ab6-9308-1c959e716bfd',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e95'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e96'
    },
    id: 'f2840fb9-e0a7-473a-98d2-26c1263ce018',
    name: '',
    members: ['Nicolas Ochem'],
    projects: [
      {
        projectId: '10302e5e-37d4-4863-8ac5-d4d774ce4a0f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e97'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e98'
    },
    id: '32a9edd5-bbcc-4568-85bb-62d115348f0f',
    name: 'polkastarter',
    members: [
      'Daniel Stockhaus',
      'Tiago Martins',
      'Rui Teixeira',
      'Miguel Almeida',
      'Henrique Caiano'
    ],
    projects: [
      {
        projectId: '4f4210f4-8281-4b58-985f-b38b3741f93d',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e99'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e9a'
    },
    id: '82326498-0098-4601-9431-778a8d8f27e3',
    name: '',
    members: [],
    projects: [
      {
        projectId: 'ef825cf0-5eb9-4103-877b-71b9cc2bd454',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e9b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e9c'
    },
    id: 'a9caab89-3077-4a0d-940d-f7cf10e05da9',
    name: 'polket',
    members: [
      '**Zhiquan Mai**: CEO. He once served as the development leader of cryptocurrency wallet system of [Bitbank](https://www.bitbank.com/). In his spare time, he has developed some open-source iOS projects, such as [Bitcoin Multisig wallet](https://github.com/zhiquan911/chance_btc_wallet) and [CHKLineChart](https://github.com/zhiquan911/CHKLineChart). Now he is responsible for the development of openwallet framework, which supports more than 70+ blockchain protocols.',
      '**Jianqiang Chen**: System development engineer. Now he is responsible for the development of the openwallet developer platform, which provides APIs to help developers quickly build cryptocurrency wallet applications.',
      '**Dongxing Liang**: System architect engineer. Now he is responsible for the back-end development of the openwallet.link enterprise-level digital-assets management system, and provides more than 70+ main chain assets and token asset custody services for digital financial companies.',
      '**Yinghao Fan**: Front-end engineer. He is now responsible for the front-end of openwallet related applications, such as the back-end of enterprise asset management, wallet applications, etc.',
      '**Shuchao He**: Cryptographic algorithm engineer. He is now responsible for the development of the underlying cryptographic library of openwallet, and supports the implementation of cryptographic algorithms such as ECC, Hash, and transaction verification for mainstream blockchains.'
    ],
    projects: [
      {
        projectId: 'a0843d25-ab17-411b-ac0b-0c36e4cee0e7',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e9d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44e9e'
    },
    id: 'a80d7f35-6206-4ead-9e3f-af937c16a6ff',
    name: 'dfinance (wings stiftung).',
    members: [
      'Oleg Gaidukov - CTO.',
      'Boris Povod - R&D Lead and Blockchain developer.',
      'Alexander Kozlovsky - Rust developer and Rust community enthusiast.',
      'Dmitry Yakushev - Rust developer.',
      'Vitaly Rudko - Dev Ops.'
    ],
    projects: [
      {
        projectId: '32aac671-ef68-44fd-a219-b0483ccf8e2e',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44e9f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ea0'
    },
    id: '5d02d5f2-5fac-4219-b55b-9a09f9b1bb47',
    name: 'uniwrap/1001 group',
    members: [
      'Xinyue Yang - Team Lead',
      'Leo Yang - Team technical Lead',
      'Alex - Team fullstack technical engineer'
    ],
    projects: [
      {
        projectId: '87fbea14-c496-4b82-96f3-28c6457ab34f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ea1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ea2'
    },
    id: '7dde9c28-49f3-4954-ae80-b273a2d60401',
    name: 'hugobyte ai labs private limited',
    members: [
      'Dr. C. Pethuru Raj Ph.D - Principal Advisor, Chief Architect and Vice-President, Site Reliability Engineering (SRE) Division - Reliance Jio Platforms Ltd.',
      'Muhammed Irfan K - Team Lead, Fullstack Developer, CTO & Co-Founder - HugoByte AI Labs',
      'Hanumantappa Budihal - Solutions Architect, DevOps - HugoByte AI Labs',
      'We will be hiring one Rust Developer'
    ],
    projects: [
      {
        projectId: '91f2219e-b031-4291-9312-a4ceab3532dd',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ea3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ea4'
    },
    id: '890822f2-bd88-4b59-b985-8bc1dbe18093',
    name: 'hugobyte ai labs private limited',
    members: [
      'Muhammed Irfan K - CTO & Co-Founder - HugoByte AI Labs',
      'Hanumantappa Budihal - CIO, Project Manager & Solutions Architect, DevOps - HugoByte AI Labs',
      'Shreyas Kura Subramanya - Development Team Lead - HugoByte AI Labs',
      'Shanith KK - Systems Developer - HugoByte AI Labs',
      'Amogha Sudarshan - Project Analyst - HugoByte AI Labs',
      'Immanuel Stanley - Junior Blockchain Tester - HugoByte AI Labs'
    ],
    projects: [
      {
        projectId: '4859943c-7465-40a1-8e96-46d74453ab27',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ea5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ea6'
    },
    id: 'c8376a2b-dd77-4abf-8205-dfe634110059',
    name: 'acala',
    members: [
      'Architect: Bryan Chen',
      'Product Manager: Bette Chen',
      'Runtime Developer: Shaun Wang',
      'Full-stack Developer: Nantian Duan',
      'Full-stack Developer: Ermal Kaleci'
    ],
    projects: [
      {
        projectId: 'c0fed4e1-b512-419d-978c-518a9fed7520',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ea7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ea8'
    },
    id: 'd041f63d-6dea-492f-b011-7a38a04e5b21',
    name: 'applied blockchain ltd',
    members: [
      'Adi Ben-Ari',
      'Francesco Canessa, Andrew Campbell, Shawn Derouard, Mario Gemoll, Thomas Brooks, Shay Har-Zion'
    ],
    projects: [
      {
        projectId: '937131e1-ebca-4353-8180-b76a42c268b7',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ea9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44eaa'
    },
    id: 'f036cb69-02e6-4800-9599-6198b48afdaa',
    name: '',
    members: [
      'Chris Taylor (Prosopo)',
      'Jack Tanner (Gimly)',
      'Blockchain Developer (_Pending_)',
      'Jesse Szepieniec (Gimly)',
      'Caspar Roelofs (Gimly)'
    ],
    projects: [
      {
        projectId: '459544c1-d979-43cc-9a86-2787f9dfa244',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44eab'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44eac'
    },
    id: 'a633f796-5b60-4422-bf17-eb3e6b4f4d0f',
    name: 'omnibtc',
    members: [
      '*Name of team leader:* Tianling',
      '*Names of team members:* Jianbing Zhao, AAweidai, LiMing Sun'
    ],
    projects: [
      {
        projectId: '6a862939-44e2-4527-9a27-ba1c48a11e03',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ead'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44eae'
    },
    id: 'c81d8805-c99c-4a8d-86a1-cb1515cd41ba',
    name: '',
    members: [
      'Name of team leader: Chris Li',
      'Names of team members: Xingyou Chen, Zhongwei Shi, Kangbin Ge'
    ],
    projects: [
      {
        projectId: 'c9b48e94-bb00-4a2f-878d-d52016442db7',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44eaf'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44eb0'
    },
    id: '17b6d7d2-5b77-42e4-afa9-5d017f806a49',
    name: 'bqp',
    members: [],
    projects: [
      {
        projectId: 'b4844edc-c330-4f70-a953-c130c080d40c',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44eb1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44eb2'
    },
    id: 'a8b284ee-7908-426c-bb8c-d5ce35fb8e5c',
    name: 'uni-arts',
    members: [
      'Xuxiaohu: full-stack developer',
      'Tuminfei: architecture and blockchain consultant'
    ],
    projects: [
      {
        projectId: '6bf27acd-7472-4fb9-9e1b-0052f86797f0',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44eb3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44eb4'
    },
    id: '40e0dcf8-37e2-428b-862c-21075ce1ec68',
    name: '[limechain](https://github.com/limechain)',
    members: ['Daniel Ivanov', 'Radosvet Mihtarski', 'failfmi'],
    projects: [
      {
        projectId: 'f8a4e170-8f31-4093-a92e-ac9676a8af55',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44eb5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44eb6'
    },
    id: 'a4b8bfcd-9dd0-470f-98bf-fc5ebf75fefc',
    name: '[limechain](https://github.com/limechain)',
    members: ['Daniel Ivanov', 'Georgi Spasov', 'Viktor Todorov'],
    projects: [
      {
        projectId: '6b49a7fd-ba2b-4cfa-ac5e-922332631474',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44eb7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44eb8'
    },
    id: '090941fb-e767-4195-952b-882cab1d8937',
    name: 'runtime verification, inc.',
    members: [
      'Team Lead: Yan Liu',
      'Team Members: Christiano Braga, Everett Hildenbrandt'
    ],
    projects: [
      {
        projectId: 'd082a48b-0127-43af-8ae0-22a3e740c2e7',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44eb9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44eba'
    },
    id: '15e885e0-953c-47fc-a2a3-83ba0c80e3b6',
    name: '',
    members: ['David Lancashire', 'Richard Parris', 'Clayton Rabenda'],
    projects: [
      {
        projectId: '250ebd05-4327-4c64-b7a9-beb8d2533de4',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ebb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ebc'
    },
    id: '60a569bc-5363-4908-a56a-1545464cc9f7',
    name: 'tradelink',
    members: [
      'Sander Bogdanov, CBDO at TRADELINK TECHNOLOGIES OÜ;',
      'Andrey Lugovskoy, CTO and senior fullstack software developer at TRADELINK TECHNOLOGIES OÜ;',
      'Joseph (Afriyie) Attakorah, middle frontend developer at TRADELINK TECHNOLOGIES OÜ;',
      'Alena Balakina, lead QA at TRADELINK TECHNOLOGIES OÜ.'
    ],
    projects: [
      {
        projectId: '9785f6e5-f81f-49b2-a2ff-2a8f3919cbd0',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ebd'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ebe'
    },
    id: '02ad03b8-b8c0-4d77-8223-3d6a8ac4bd5b',
    name: 'supercomputing systems ag (scs)',
    members: [
      'Sabine Proll: Project Lead',
      'Bigna Härdi: Developer',
      'Edith Chevrier: Developer',
      'Thomas Niederberger: Developer'
    ],
    projects: [
      {
        projectId: '29dbe527-a34a-43d1-8b0c-a76b97140e8f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ebf'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ec0'
    },
    id: '0f2a9659-9533-49f0-bf1a-1883b552b732',
    name: '[gmajor](https://github.com/gmajor-encrypt)',
    members: ['gmajor'],
    projects: [
      {
        projectId: 'db1b09c6-c471-41ff-b7ae-8ef88f07a7bb',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ec1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ec2'
    },
    id: 'f4bba46c-7818-4bbc-bb22-3643e7e15380',
    name: '',
    members: [],
    projects: [
      {
        projectId: 'e9d79e35-0722-4b47-a20d-4eacac4485fd',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ec3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ec4'
    },
    id: '01bc25cd-f1c8-47af-a895-b6d311dfd326',
    name: 'sequester',
    members: [
      'Brendan Edelson - Full Stack Developer',
      'Ethan Brown - Full Stack Developer'
    ],
    projects: [
      {
        projectId: '8b35fe79-60e3-4a43-8d81-e5dcf895909d',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ec5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ec6'
    },
    id: 'a15a2a03-c45a-4637-8360-9a1a3543f428',
    name: 'setheum labs',
    members: ['Muhammad-Jibril B.A.'],
    projects: [
      {
        projectId: 'e5565c6c-8d28-456d-a0f3-008516ee8ce2',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ec7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ec8'
    },
    id: 'a3c355bf-dfe8-42ce-afac-b973abf8a6f3',
    name: '',
    members: [
      'Muhammad-Jibril Bashir Abba (Founder, CEO, Full Stack Developer)',
      'Valentine Oragbakosi (CTO, Core Rust Developer)',
      'Hamza Yasin (Senior Blockchain Developer)',
      'Junaid Mushtaq (Lead Blockchain Developer)',
      'Suleiman Mustapha (Front-end Developer)',
      'Al-Mustapha Mustapha (UX/UI Designer)',
      'Khadija Bashir Galadanchi (HR & Management)',
      'Bashir A. Galadanci (Enterprise Banking)',
      'Bashir Adamu (Accounting & Finance)',
      'Dr. Rislanudeen Muhammad, PhD Economics (Advisor - informal)'
    ],
    projects: [
      {
        projectId: 'aadc5b6f-e41c-4813-8a96-487ad63b6057',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ec9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44eca'
    },
    id: 'eb3534de-296b-47e4-b46d-353f1c0c65f6',
    name: '',
    members: [
      '**Zoujun Chen:** Co-Founder. He once worked for the Fortune 500 Amphenol Group. He entered the blockchain industry in 2013. He is the main person in charge of multiple blockchain projects and has many years of industry experience.',
      '**Mingchang Lin:** Co-Founder. Cryptographic System Engineer once worked for Baidu, and participated in the development of multiple blockchain projects since 2014.',
      '**Ling Cai:** Head of commerce and marketing. He once worked in a first-line exchange company.',
      '**Xinan Li:** A traffic expert, with in-depth understanding and practical experience in Internet industry traffic, and very familiar with traffic promotion methods.',
      '**Zhuliang Li:** A financial expert. He once worked for Ping An Bank of China (one of the largest commercial banks in China). He is familiar with the design of financial products, the simulation and calculation of financial models, and financial risk control.',
      '**Hehong Wu:** Front-end engineer, has in-depth research on various front-end technologies.',
      "  Guang Xiao: Senior UI designer, once worked in China's first-line game development company：NetDragon and Nasdaq:NTES.",
      'We also have several developers from the member companies of Polkadot China Technology Alliance who contributed code to the shadow network.'
    ],
    projects: [
      {
        projectId: 'e9fbe503-f742-48b1-87ad-3d95a690500b',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ecb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ecc'
    },
    id: '1ab226c1-c74d-4fae-9677-6cbc478bf3cf',
    name: 'standard protocol',
    members: [
      '(Development & Engineers)',
      '[Hyungsuk Kang](https://www.linkedin.com/in/hyungsukkang) - Founder & Head of Development'
    ],
    projects: [
      {
        projectId: '35340eb0-05fa-4c26-a78f-123716eb1feb',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ecd'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ece'
    },
    id: '62cadebf-adb0-4682-b432-04aa4148fc70',
    name: 'web3 labs ltd',
    members: [],
    projects: [
      {
        projectId: 'fa38dfc9-6fa1-4d4e-8c13-ede1adb90f56',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ecf'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ed0'
    },
    id: '3acc47af-dbdc-49fe-aaf4-2f372e810982',
    name: 'skyekiwi team',
    members: [
      'Song Zhou ( Developer ) <https://github.com/RoyTimes>',
      'Zoe Sun ( Designer/COO )',
      '... More to be hired'
    ],
    projects: [
      {
        projectId: 'd9e5cc0b-926b-4bea-9118-061d1ff3e9e9',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ed1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ed2'
    },
    id: '337f41a5-c8a4-467a-883b-5b1642f0018d',
    name: 'skyekiwi team',
    members: [
      'Song Zhou (Full stack developer) <https://github.com/RoyTimes>',
      'Zoe Sun (Lead Designer)',
      '... More to be hired'
    ],
    projects: [
      {
        projectId: '243cea0a-c5a7-4458-9d3c-e66f4cff74f4',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ed3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ed4'
    },
    id: 'e2db6578-b36f-4db5-811e-b26cc379876c',
    name: 'skynet labs',
    members: [
      '**Leader**: David Vorick, _CEO | Skynet Labs_',
      '**Skynet Labs Team Members** including:',
      'Chris Schinnerl',
      'Peter-Jan Brone',
      'Matthew Sevey',
      'Daniel Helm',
      'Marcin Swieczkowski',
      '**Skynet Labs Community Contributors**:',
      'TBD',
      '**Polkadot Ecosystem Collaborators**:',
      'TBD'
    ],
    projects: [
      {
        projectId: '65e65883-da3c-4520-948b-75df273d49f4',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ed5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ed6'
    },
    id: 'a5f80cd9-dc1d-4de0-9104-78fb4c53bbd3',
    name: 'slonigiraf',
    members: ['Reshetov Denis. Founder, Rust/JavaScript developer.'],
    projects: [
      {
        projectId: '5cdf790c-76ab-4fbc-8f13-39a594c828da',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ed7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ed8'
    },
    id: '3c7abd87-37f7-4ec2-8232-7628a7d647ab',
    name: 'hack-ink',
    members: ['Xavier Lau'],
    projects: [
      {
        projectId: 'ea356ca8-dcb0-4cfd-b6c6-5d60267a3076',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ed9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44eda'
    },
    id: '0655ce28-6666-40f2-954a-3e3f934dfc5a',
    name: 'hypha hashed partners',
    members: [],
    projects: [
      {
        projectId: '7ba9e7c9-1a20-40ca-a3b3-e064e960adca',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44edb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44edc'
    },
    id: '6221b852-5a5c-46eb-bcb6-4a30779b6d0d',
    name: 'societal labs ltd.',
    members: [
      'Graeme Fox',
      'Tyler Gellatly',
      'Oleh Kalenyk',
      'Alibek Sansyzbayev'
    ],
    projects: [
      {
        projectId: '26b393f5-1d71-4c2b-83d7-a8b3256e5915',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44edd'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ede'
    },
    id: '3910ab40-71f8-42b6-afc1-07972691e993',
    name: 'societal labs ltd.',
    members: [
      'Graeme Fox',
      'Tyler Gellatly',
      'Oleh Kalenyk',
      'Alibek Sansyzbayev'
    ],
    projects: [
      {
        projectId: 'b9056b94-59a2-4eb1-a593-f30e8a9256d7',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44edf'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ee0'
    },
    id: '0cf4ea12-363a-412c-b8c3-d6016f38d6ea',
    name: '[727.ventures](https://github.com/727-ventures)',
    members: [
      '**Markian Ivanichok** (СEO of 727.ventures)',
      '**Fedor Lebed** (Head of Operations | 727.ventures)',
      '**Nameless Endless** (Blockchain Developer | 727.ventures)',
      '**Dominik Krížo** (Blockchain Developer | 727.ventures)',
      '**Green Baneling** (Blockchain Core Rust Engineer | 727.ventures)'
    ],
    projects: [
      {
        projectId: '50ca644c-c16e-4777-a55f-9091bd44818e',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ee1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ee2'
    },
    id: '7bd91917-067e-4fd3-85cc-851b46c7e45b',
    name: '[supercolony](https://github.com/supercolony-net)',
    members: [
      '**Markian Ivanichok** (СEO of Supercolony)',
      '**Toma Sadova** (Product Owner | Supercolony)',
      '**Sven Seven** (Head of Engineering | Supercolony)',
      '**Dominik Krížo** (Blockchain Developer | Supercolony)',
      '**Green Baneling** (Blockchain Core Rust Engineer)'
    ],
    projects: [
      {
        projectId: '5eb8dec5-5377-4477-8068-e5d5484a03b2',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ee3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ee4'
    },
    id: '4c4b79ca-2434-44e0-961b-62126ab34a39',
    name: 'polytope labs',
    members: ['Seun Lanlege,', 'Sam Omidiora, Femi Bankole'],
    projects: [
      {
        projectId: '11ea9393-f041-4419-bf48-64a8e2086c5d',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ee5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ee6'
    },
    id: '2bfc61c1-e0ef-486d-9dfb-64f7630f6aca',
    name: 'itering',
    members: [
      'Denny, denny.wang@itering.io',
      'Echo, echo.hu@itering.io',
      'Aki, aki.wu@itering.io',
      'Nada, nada.fu@darwiniadao.xyz'
    ],
    projects: [
      {
        projectId: '154a727d-fd54-40f7-b3b3-e870d64ff314',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ee7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ee8'
    },
    id: '47deefe8-59ba-4495-83e9-60701281d772',
    name: 'pendulum',
    members: [
      'Meinhard Benn, Chairman',
      'Dr. Torsten Stüber, CTO',
      'Gonza Montiel, Full stack engineer'
    ],
    projects: [
      {
        projectId: 'aa98480c-9d47-47c1-8c53-dfa9dd9a424b',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ee9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44eea'
    },
    id: 'd9fe72b7-acb8-42a9-b62f-ee456fe1282d',
    name: '',
    members: [
      'Jeremiah Wagstaff (team leader)',
      'Nazar Mokrynskyi (lead engineer)'
    ],
    projects: [
      {
        projectId: '8fa54b72-e990-42c3-9a73-cf0740fdd236',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44eeb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44eec'
    },
    id: '537a655b-a4e7-4446-9536-b3ab0015e5cb',
    name: '',
    members: [],
    projects: [
      {
        projectId: 'b460b151-5300-45c1-bcfc-88e61b75b0bf',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44eed'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44eee'
    },
    id: '3616245f-fa7f-4317-bbde-217ed5f0acc3',
    name: 'nuts finance',
    members: ['Daniel Tang, Co-founder', 'Terry Lam, Co-founder'],
    projects: [
      {
        projectId: '67e3e833-80cf-4377-8fe7-ea0e6597ba47',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44eef'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ef0'
    },
    id: '0a2757c4-9e50-4bf0-8d04-c6021c9b4a76',
    name: 'jackson harris iii',
    members: [
      'Jackson Harris [Linkedin](https://www.linkedin.com/in/jacksonharris3/) [GitHub](https://github.com/jackson-harris-iii)'
    ],
    projects: [
      {
        projectId: 'b4b88892-63ed-4083-b780-03d4a838ec31',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ef1'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ef2'
    },
    id: 'c33e88df-3c21-4d58-8839-0118a5ffef7e',
    name: 'stardust labs inc.',
    members: ['Team Lead: Adit Patel', 'Team Member: Theresa Garcia'],
    projects: [
      {
        projectId: '5138101d-d9cb-44e2-8108-a369d5d87c71',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ef3'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ef4'
    },
    id: 'a8cd16f3-af09-4a38-a9ae-03377e9138bc',
    name: '',
    members: [
      'Dr. Xiao Zhang - CEO/Project Lead/Blockchain Researcher',
      'Ming Chow - System Architect/Substrate Developer',
      'Xinran Chen - Substrate Developer',
      'Jinjiao Yin - Full-stack developer',
      'Linjun Lu - DevOps'
    ],
    projects: [
      {
        projectId: '37111a14-e300-41c5-afa5-c70c5cf9cfa5',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ef5'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ef6'
    },
    id: '44b49199-d6f9-4b1d-a6d9-85d29f317b81',
    name: 'stonedefi',
    members: [
      'Calvin Zhou',
      'Tony Chew',
      'Raphael Yu',
      'Website',
      'https://stonedefi.io',
      'Legal Structure',
      'Individual',
      "Team's experience",
      'Calvin is the Head of Engineering of RockX, he has worked on large-scale production systems for more than a decade, including  a secure payment gateway with tens of millions customers across Southeast Asian countries and a high performance cryptocurrency trading platform using NodeJS, Java, MongoDB, and RabbitMQ. Currently, he leads a team to build the RockX digital asset services platform on blockchain, which is written in Golang and NodeJS, and running on Kubernetes.',
      'Tony is a Senior Software Developer from RockX, he has worked in blockchain, fintech, adtech and cybersecurity industries for the past 13 years. His full stack development experience consists of UI / UX, frontend, backend development and server side deployment. At RockX, he is building a new digital asset platform and the languages he uses day to day are React, Redux, MySQL, MongoDB, NodeJS, Python & GoLang',
      'Raphael has 8 years IT industry experience and 3 years blockchain experience. Expertise in the technologies of smart contract and defi project and familiar with the major developer ecosystem. Have experience of leading several Ethereum Dapps engineering projects.',
      'Team Code Repos',
      'Team LinkedIn Profiles',
      'https://www.linkedin.com/in/calvin-zhou-3b249517/',
      'https://sg.linkedin.com/in/tonychew1986',
      'Development Roadmap :nut_and_bolt:',
      'Overview',
      '**Total Estimated Duration:** 3 weeks',
      '**Full-time equivalent (FTE):**  3 FTE',
      '**Total Costs:** 0.3 BTC',
      'Milestone 1 -  Liquid staked DOT token',
      "In the grant program, the Stone Team aims to provide liquidity of staked tokens on Polkadot ecosystem, and the special LP token which bounds to staked assets, like DOT token. We are aware that there are multiple teams are actively working on Polkadot ecosystem and more exciting projects on the roadmap, we'll focus on DOT-bound staked assets like aDOT first for the milestone 1",
      "We'll also provide an easy-to-use web based UI that connects to the chrome based DOT wallet, and user can buy/sell the index using their DOT tokens easily, this UI will be part of https://stonedefi.io",
      'Number',
      'Deliverable',
      'Specification',
      '0a.',
      'License',
      'Apache 2.0',
      '0b.',
      'Documentation',
      'We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works.',
      '0c.',
      'Testing Guide',
      'The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests',
      '0d.',
      'Article/Tutorial',
      'Publish tutorials and documentation in different channels, e.g. Stone Medium and other social media platforms',
      '1.',
      'UI/UX for Stone Platform',
      'Update and add a new UI component that allow user to buy/sell stone index using different crypto assets, DOT for milestone 1',
      '2.',
      'Indexed basket management',
      'An indexed basket management module is a set of Substrate pallet which allows creation and update the indexed basket, as well as mint and burn index token function',
      '3.',
      'DEX integration',
      'We will build the DEX trade function on top of another Polkadot Program [PolkaDex](https://github.com/Polkadex-Substrate/Polkadex/tree/master)',
      'Future Plans',
      'Upon the completion of Milestone 1, the team will potentially add more functions like:',
      'Introduce the governance token for the governance purpose',
      'Allow user to create their own indexed basket using the governance token they earned, and get rewards of trading fees',
      "Stone Index will be part of Stone Platform, and this grant program is the very first attempt of extent to Polkadot ecosystem in Stone Platform. The Stone team will continuously add more valuable instruments, and the team is aware that more and more teams and projects are rushing into Polkadot ecosystem, so we'll keep an eye on the new initiatives, and onboard those legitimate assets once they are ready",
      'Additional Information :heavy_plus_sign:',
      'RockX(https://rockx.com) founded by veterans and hardcore developers in Blockchain space, Rockx has been developing critical tools and applications for various Blockchains. RockX team is actively involved in building a better blockchain community and won quite some grants last year, the 2 examples are:',
      'Algorand IDE(https://algorand.rockx.com/)',
      'Oasis Web Wallet(https://oasis-wallet.rockx.com).'
    ],
    projects: [
      {
        projectId: '3a25fbfb-2531-4da4-8dad-18d8322a53ee',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ef7'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ef8'
    },
    id: 'db8341d5-84b0-428e-be56-ae16b38f95cc',
    name: 'hack-ink',
    members: ['Xavier Lau'],
    projects: [
      {
        projectId: '1b089114-173f-41ed-8955-a2fdccd9ec55',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44ef9'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44efa'
    },
    id: '55940963-d710-4ebb-9849-e5f892c1febd',
    name: 'subauction',
    members: [
      'Jindrich Zeleny (Blockchain dev @ HydraDX)',
      'Valery Gantchev (Blockchain dev @ HydraDX)'
    ],
    projects: [
      {
        projectId: '41a82d58-ce83-4f1e-b6f1-8f500d78701c',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44efb'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44efc'
    },
    id: '7d78bfab-57b8-4a15-908f-d24856e80e11',
    name: '',
    members: [],
    projects: [
      {
        projectId: 'cc11f2b5-999a-4e26-a98a-cee5fbf64d42',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44efd'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44efe'
    },
    id: 'ea64e33f-99c5-4655-8d53-918dfc87a83e',
    name: '',
    members: [
      'Sam Zou: Project manager',
      'Ian He: Team leader',
      'Jay Ji: Fullstack developer',
      'Partime members',
      'James Bayly: Marketing and Partnerships'
    ],
    projects: [
      {
        projectId: '5b2aac0d-0e1e-4a04-801a-e7b8fd636462',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44eff'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f00'
    },
    id: 'b978ac0d-1ccb-4ac0-9d5b-a160641d8f9e',
    name: 'subrelay',
    members: ['Chi Tran - Team Leader', 'Anh Thi Chieu', 'Bu Le'],
    projects: [
      {
        projectId: 'd85b3fec-46ce-4134-b895-b8f71da02906',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f01'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f02'
    },
    id: 'e4f30b94-f72f-4854-95f0-4f0754de399a',
    name: '',
    members: [
      'Symon Ho: Fullstack developer Leading consensus R&D and engineering in multichain system. Prior to that, developer of openstack project,  engaged in performance tools and  monitoring  system for cloud platform.',
      'Ice Min: 10+ years experience in c/c++ development, real time database products and digital currency transaction platform products expert. Developer of BitCoin and Ethereum wallet.'
    ],
    projects: [
      {
        projectId: '90d44895-42bf-4d13-abc3-d5f7853048a5',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f03'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f04'
    },
    id: '5572ec2f-de68-4d37-940e-b23cf6df0279',
    name: 'cess lab',
    members: [
      'Teh Sunn Liu',
      'Shaka Lavigne',
      'Elden Young',
      'Yeou Sunn Liu',
      'Ted Zhang'
    ],
    projects: [
      {
        projectId: 'd6144903-3979-43cf-9b71-627ac078c6d1',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f05'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f06'
    },
    id: 'a58ef603-8847-41b5-b428-8ff48c662d45',
    name: 'https://github.com/shard-labs',
    members: [
      'Jakov Buratovic (https://www.linkedin.com/in/jakov-buratovic/)',
      'Miljan Milidrag (https://www.linkedin.com/in/miljan-milidrag/)'
    ],
    projects: [
      {
        projectId: '93ce1272-b0b8-4a86-b794-dc9bc8dc500a',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f07'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f08'
    },
    id: '934f5dd4-b79f-4d1a-9a05-d0ead8795aea',
    name: 'aband-network',
    members: ['Octavei', 'keymi'],
    projects: [
      {
        projectId: '9e20d2b5-1ef5-43da-8a88-ae28ebf1c7d7',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f09'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f0a'
    },
    id: '2dc49e1a-7498-4abf-971b-4c775ff1e326',
    name: 'rusty crewmates',
    members: ['Timothée Delabrouille', 'Charlie Armstrong'],
    projects: [
      {
        projectId: '3e4507f4-1c3a-4dba-9112-945d72128a79',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f0b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f0c'
    },
    id: '837aecc8-fda5-4722-814a-9855e1014b33',
    name: 'seals',
    members: [
      'Vadim Nabiev, Team Leader',
      'Arame Bandari, Product Manager',
      'Vahram Kobelyan, Senior Developer',
      'Plamen Uzunov, Senior Java developer',
      'Teodor Georgiev, Software developer'
    ],
    projects: [
      {
        projectId: '84337db9-1a82-4a92-8940-e625a80d3343',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f0d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f0e'
    },
    id: 'c4acdb54-1d20-4ace-9b8f-ea6b8f72316b',
    name: 'chainsafe',
    members: [
      'Matthias Seitz - Team Lead',
      'Tianyi Zhang',
      'Willes Lau',
      'Willem Olding'
    ],
    projects: [
      {
        projectId: '43a58704-20d7-4602-84b5-feea6f397e72',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f0f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f10'
    },
    id: '8650b9da-4024-4e5f-bbff-4a7d96a6ba17',
    name: '',
    members: [],
    projects: [
      {
        projectId: '40d3d863-ae8a-4514-a01a-192625fbba93',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f11'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f12'
    },
    id: 'd97dd49e-2926-4984-9c6c-713234ce006e',
    name: 'helikon labs',
    members: ['Kutsal Kaan Bilgin'],
    projects: [
      {
        projectId: '5113afd1-aa8d-4924-b077-f8aa7322c6e4',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f13'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f14'
    },
    id: '7337478c-0f65-4dbc-a235-b1926091e069',
    name: '',
    members: [],
    projects: [
      {
        projectId: 'aefce1ce-56fc-491f-8e3c-4e08a6f0e953',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f15'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f16'
    },
    id: 'bd7ea62a-fd20-46cf-aa19-7a7b532abad2',
    name: 'sukhavati labs',
    members: ['Sukhavati Dev Team'],
    projects: [
      {
        projectId: '83c9cb06-7016-4f38-ba28-35254d9c4807',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f17'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f18'
    },
    id: '42e94b90-9004-4ed6-8b20-60e3244e75d8',
    name: 'sunrise protocol',
    members: [
      'John and Geoff will be the major contributors for this phase of Sunrise Protocol',
      'John Whitton: Sunrise Protocol Founder',
      'Geoff: Sunrise Protocol Core Protocol Engineer and Solution Architect',
      'Additional team members will be announced shortly and contributing to this and other components of Sunrise Protocol'
    ],
    projects: [
      {
        projectId: '63b58cc5-447e-4f57-9b01-8caf6514ef91',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f19'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f1a'
    },
    id: '64ca01c1-620d-4569-8684-b98b33d43558',
    name: '',
    members: [
      '[Amar Singh](https://github.com/4meta5)',
      '[David Craven](https://github.com/dvc94ch)',
      '[Shady Khalifa](https://github.com/shekohex)'
    ],
    projects: [
      {
        projectId: '93e4ee7b-63b4-4b78-a3ff-2f646385bcdf',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f1b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f1c'
    },
    id: '1e0987bd-1eb1-4de7-9c09-26e96af31a35',
    name: '',
    members: [],
    projects: [
      {
        projectId: 'f57952fe-5c17-480b-b38f-06c1ae4d9bea',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f1d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f1e'
    },
    id: '1793506b-cd8d-4c67-a185-8941c112a36d',
    name: 'decentration',
    members: [
      '*Name of team leader:* Ramsey Ajram',
      '*Names of team members:* Tsubasa Mori, Nathan Gardet Derc'
    ],
    projects: [
      {
        projectId: '26762709-5d18-431c-97aa-b8ec41eede7c',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f1f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f20'
    },
    id: '8333fa19-3345-4b53-a028-2f55321f598d',
    name: 'nuts finance',
    members: [
      'Daniel Tang, Co-founder',
      'Terry Lam, Co-founder',
      'Shengda Ding, Co-founder'
    ],
    projects: [
      {
        projectId: '26a5c0e9-a3b1-4304-94d0-172f784ff3d1',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f21'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f22'
    },
    id: '389d55c5-ea52-4191-9678-95a18efa9ae9',
    name: 'mark van de vyver [phd(dist)](https://www.student.uwa.edu.au/course/award-verification-service?family=van+de+vyver&family_partial=on&given=mark&search=search)',
    members: [
      'Mark Van de Vyver [PhD(Dist)](https://www.student.uwa.edu.au/course/award-verification-service?family=van+de+vyver&family_partial=on&given=mark&search=Search)'
    ],
    projects: [
      {
        projectId: '234dc77b-4145-4170-8aa9-9c17d7efb191',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f23'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f24'
    },
    id: '29c60d6a-0b66-496e-8255-f0522db410d0',
    name: '',
    members: [
      'Jason Devlin (team leader/ CEO)',
      'Chris Erker (CTO)',
      'Alec Ghazarian (CIO)'
    ],
    projects: [
      {
        projectId: 'eb18b17a-324c-4f1a-881a-fa3507fc877f',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f25'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f26'
    },
    id: 'bb62d8fc-ffa7-441d-95bb-fd1178846743',
    name: 'off-narrative labs',
    members: [
      'Joshy Orndorff https://github.com/JoshOrndorff',
      'Andrew Burger https://github.com/coax1d'
    ],
    projects: [
      {
        projectId: '04abd78c-4dd8-47d8-a096-912361a479ed',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f27'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f28'
    },
    id: '10dd3c61-b418-4c40-8309-8e6cd7042c5d',
    name: '[727.ventures](https://github.com/727-ventures)',
    members: [
      '**Markian Ivanichok** (СEO of 727.ventures)',
      '**Fedor Lebed** (Head of Operations | 727.ventures)',
      '**Dominik Krížo** (Head of Engineering | 727.ventures)',
      '**Varex Silver** (Blockchain developer | 727.ventures)',
      '**Artem Lech** (Blockchain developer | 727.ventures)'
    ],
    projects: [
      {
        projectId: 'b345bc1a-64ec-4d97-9d2c-f7314e4d47e4',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f29'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f2a'
    },
    id: '33346e9d-97e6-4f95-84b5-ff897e5ae678',
    name: '[727.ventures](https://github.com/727-ventures)',
    members: [
      '**Markian Ivanichok** (СEO of 727.ventures)',
      '**Fedor Lebed** (Head of Operations | 727.ventures)',
      '**Green Baneling** (Blockchain Core Rust Engineer | 727.ventures)',
      '**Varex Silver** (Blockchain developer | 727.ventures)',
      '**Artem Lech** (Blockchain developer | 727.ventures)'
    ],
    projects: [
      {
        projectId: '3182154b-5643-44ee-8ba7-12d23e0b200a',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f2b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f2c'
    },
    id: '6ea646a9-b02d-435c-828b-a1669adc8f6e',
    name: '[supercolony](https://github.com/supercolony-net)',
    members: [
      '**Markian Ivanichok** (СEO of Supercolony)',
      '**Toma Sadova** (Product Owner | Supercolony)',
      '**Green Baneling** (Blockchain Core Rust Engineer | Supercolony)',
      '**Alex Seleznov** (Front-End Developer | Supercolony)',
      '**Varex Silver** (Blockchain developer | Supercolony)'
    ],
    projects: [
      {
        projectId: '313a2378-6692-47ec-81eb-e82b1007abbd',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f2d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f2e'
    },
    id: '903e1329-9047-4da3-ad34-b359dfc3edcd',
    name: 'uke',
    members: ['Bader Youssef - Team Lead, Architect, and Fullstack Developer.'],
    projects: [
      {
        projectId: '82f1cf9e-c50c-4a9a-90d9-543631e41262',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f2f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f30'
    },
    id: '65fc6124-1dc3-4ed4-9cf7-c266e7a5bb77',
    name: 'uke',
    members: ['Bader Youssef - Team Lead, Architect, and Fullstack Developer.'],
    projects: [
      {
        projectId: '78c823d4-f578-462f-8edd-096c35b32817',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f31'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f32'
    },
    id: '5f3bbe2f-aa6b-47f8-a22c-f824af9dfc53',
    name: 'blaize.tech',
    members: [
      'Mark Tsyrulnyk - Blockchain Solutions Architect at blaize.tech, CTO at momo.finance',
      'Oleksandr Bortnik - Senior DevOps at blaize.tech'
    ],
    projects: [
      {
        projectId: '42243031-d293-4827-8c13-5bc3c4853567',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f33'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f34'
    },
    id: '85450bf2-4b85-4eb1-adcc-67bebdfdd236',
    name: 'universaldot foundation (https://universaldot.foundation)',
    members: [
      'Igor Stojanov (Team Leader)',
      'Wendell Muntslag van Amzink (Team Member)',
      'Slave Atanasov (Team Member)'
    ],
    projects: [
      {
        projectId: '9948e3c2-6b8f-4732-844d-d39703ee1ecc',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f35'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f36'
    },
    id: '0f2589d7-4c75-48cf-81a4-95e38d8f8f09',
    name: 'universaldot foundation',
    members: ['Igor Stojanov (Team Lead)', 'Slave Atanasov', 'Vivek Pandya'],
    projects: [
      {
        projectId: 'bc16a449-10e9-4965-8505-89b322bf0f32',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f37'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f38'
    },
    id: 'c9e62b38-7ba3-4bd3-b1e1-a152cc594e05',
    name: 'fractal',
    members: [
      '[Hugo Peixoto](https://github.com/hugopeixoto/)',
      '[Júlio Santos](https://github.com/juliosantos/)'
    ],
    projects: [
      {
        projectId: 'a6150811-7b12-496a-9c76-6caf23faacba',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f39'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f3a'
    },
    id: 'bdb8fb1c-b2ae-4840-9729-e4c2d194691b',
    name: 'hypelabs inc.',
    members: [
      'Carlos Lei Santos, CEO',
      'André Francisco, CTO',
      'Damaris Valero, Global Business Development',
      "Aldrin D'Souza, Product Manager",
      'Karolina Stawinska, Head of Partnerships'
    ],
    projects: [
      {
        projectId: '46e89653-1a0f-4e65-972c-97f63c9ad568',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f3b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f3c'
    },
    id: '8f5e1970-8a93-4567-a42f-2decf0828ac1',
    name: '[comrade coop](https://comrade.coop/)',
    members: [
      'Team leader: Bozhidar Marinov',
      'Team: Salih Houadef',
      'Advisors: Todor Kolev, Branimir Angelov'
    ],
    projects: [
      {
        projectId: '008d9b4e-bdea-46d3-90ce-2b54c14a5fa8',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f3d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f3e'
    },
    id: '3598fcad-7975-4e4b-ba42-a4ff5f481b11',
    name: 'optymalizacja ai grzegorz miebs',
    members: ['Grzegorz Miebs'],
    projects: [
      {
        projectId: 'a572238e-d746-49a0-a672-20d88abc3400',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f3f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f40'
    },
    id: 'b606d580-f6bc-466b-b8e2-fbc2a39e1219',
    name: 'veridise',
    members: ['Yu Feng', 'Jon Stephens', 'Ben Mariano'],
    projects: [
      {
        projectId: 'ce566049-1182-41d5-900e-0b63add252a4',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f41'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f42'
    },
    id: '6f1c2aba-bcd3-4533-9bc7-1082fdb99036',
    name: 'popular coding',
    members: [
      'Name of team leader',
      'Patrick Gryczka',
      'Names of team members',
      'GinSiu Cheng',
      'Maciej Zielonka',
      'Joseph Murawski'
    ],
    projects: [
      {
        projectId: 'cc80a8b3-55fd-42d2-bdc1-7ab1da0e66df',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f43'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f44'
    },
    id: '6af1b5e0-17c8-4972-b2cd-12f769a02e5b',
    name: 'team vera',
    members: ['Denis Lam', 'Michael Arbach'],
    projects: [
      {
        projectId: '3d047236-1a79-41cb-a59e-55c62a16d6d0',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f45'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f46'
    },
    id: '790efc22-87e7-43e4-9ba3-51f3f3196c35',
    name: 'verida pte ltd',
    members: [
      'Chris Were (CEO, Co-founder, Solution Architect)',
      'Nick Lothian (Head of Product)',
      'Yolanda Sam (Grant / Delivery Manager)'
    ],
    projects: [
      {
        projectId: 'b111897a-e334-4c76-8266-1d15d5fdbbfe',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f47'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f48'
    },
    id: '60b1a665-b1f4-454e-965f-d3fa0b1ce12e',
    name: "song's research group at pennsylvania state university",
    members: [
      'Name of team leader: Linhai Song',
      'Names of team members: Linhai Song, Yiying Zhang, Ziyi Zhang'
    ],
    projects: [
      {
        projectId: '5da8710b-1710-4320-9390-d4dc3b6824d1',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f49'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f4a'
    },
    id: '86d2e167-fcf0-41ea-be85-1639d7f3f472',
    name: 'wunderbar network',
    members: ['Dan Henton', 'Mila Dymnikova', 'Miloš Ranđelović'],
    projects: [
      {
        projectId: '60bb36b7-4724-4c6a-8e0a-bbb5d0833617',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f4b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f4c'
    },
    id: '75c45e13-7109-4e9f-a218-b5b0ceaadf1e',
    name: 'walt.id',
    members: [
      'Dominik Beron (Founder/CEO) - Business Lead',
      'Phil Potisk (Founder/CTO) - Tech Lead',
      'Severin Stampler',
      'Kevin Burgmann',
      'Walid Khemiri',
      'Mike Plotean',
      'Tamino Baumann',
      'Fatima Beron',
      'Raphael Baumann'
    ],
    projects: [
      {
        projectId: '0411ff8c-9da0-4387-a3a5-9551d60393a5',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f4d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f4e'
    },
    id: '120324c1-ff23-4596-8af1-daf6489d60c6',
    name: 'common orbit llc',
    members: [
      '**Team lead:** [Brian Anderson](https://github.com/brson)',
      '**Team member:** [Aimee Zhu](https://github.com/aimeedeer)'
    ],
    projects: [
      {
        projectId: 'f3d6dc6a-9df2-471b-ba5b-76d383e0b4ab',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f4f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f50'
    },
    id: 'c8bcb31c-2f5e-4f17-ae12-2754c3c0a70e',
    name: '',
    members: [],
    projects: [
      {
        projectId: 'ee8182e7-eaff-4d64-adf0-77624ba25eb6',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f51'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f52'
    },
    id: 'a0cd2373-9c9e-46cb-bd56-4374a371aea9',
    name: 'second state',
    members: [
      'Michael Yuan is the technical co-founder of Second State and ParaState. He is also the author of the book Building Blockchain Apps published by Addison-Wesley in 2019.',
      'Vincent Lin is the lead developer of the Substrate Ewasm Pallet based on WasmEdge. The pallet allows WasmEdge to act as an in-chain VM for Ethereum flavor WebAssembly smart contracts.',
      'Tim McCallum is a developer’s advocate. He creates developer content, such as demos, tutorials, articles, videos, and podcasts, for blockchain developers.',
      'Antonio Yang is the lead developer of the Rust SewUp crate, which enables Rust developers to create Ethereum flavored WebAssembly application compliant to the EVMC interface.'
    ],
    projects: [
      {
        projectId: 'e2d63dd2-89bd-4713-9a4a-b1a1ec3d8101',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f53'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f54'
    },
    id: 'c3409a3c-e6dc-4aa6-8fa2-80a9f23bfa16',
    name: '',
    members: [],
    projects: [
      {
        projectId: 'ab34c8da-3e05-40b7-a79c-136a7c2928c2',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f55'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f56'
    },
    id: 'ee116d69-b31f-4706-b15b-4f20f38e3453',
    name: 'web registry dao',
    members: [
      'Curtis Wilkerson',
      'Nabil Abdellaoui',
      'Reda Bendiar',
      'John Candido',
      'Doug Astor',
      'Thomas Cantrell'
    ],
    projects: [
      {
        projectId: 'dad03ca7-97d8-4c24-8f2d-b6ba4cb589d2',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f57'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f58'
    },
    id: '7f94025a-7b71-4bda-9f92-08b39084f122',
    name: 'duo',
    members: [],
    projects: [
      {
        projectId: 'd5e608a8-10d2-4fcc-b53a-2cca8369aece',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f59'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f5a'
    },
    id: '70ca7254-41d5-4c33-8e49-f643f6da306f',
    name: 't3rn',
    members: ['Maciej Baj (team lead)', 't3rn team members: 7 developers'],
    projects: [
      {
        projectId: 'ac9107f5-9e38-418b-b61a-37a9c0e5c09c',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f5b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f5c'
    },
    id: '4b7d669e-7c72-42ff-aa70-a862b0a4c85e',
    name: 'scio labs (azero.id)',
    members: [
      'Name of team leader',
      'Dennis Zollmann',
      'Names of team members',
      'Mike Schneider',
      'Nimish Agrawal'
    ],
    projects: [
      {
        projectId: 'e6c9a88a-8bc1-4dbd-bd22-c35e01e7dc8d',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f5d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f5e'
    },
    id: '9174b225-90eb-408b-99b2-1dce3c983ff0',
    name: 'blockcoders',
    members: ['Jose Ramirez', 'Fernando Sirni', 'Ruben Gutierrez'],
    projects: [
      {
        projectId: 'bb8b2fc6-7e85-4378-b08c-df283b3536fd',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f5f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f60'
    },
    id: '8393d851-7320-47c5-bfcc-3822b3a8983b',
    name: '[gmajor](https://github.com/gmajor-encrypt)',
    members: ['gmajor'],
    projects: [
      {
        projectId: 'e3cb3086-0497-48f4-8ca1-d7242dbae502',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f61'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f62'
    },
    id: '69ae99e6-6c94-4fc1-9a13-aaf7a7e10d33',
    name: 'acala',
    members: [
      'Shaun Wang (Lead Developer)',
      'Bryan Chen (Architect)',
      'Bette Chen (Product Manager)'
    ],
    projects: [
      {
        projectId: 'da550417-e5ed-42e1-b8f9-110aa7d2136c',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f63'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f64'
    },
    id: 'c17426d5-f62f-4284-925e-a2fef6b3af7b',
    name: '[yatima inc](https://github.com/yatima-inc/yatima).',
    members: [
      'Name of team leader: John Burnham',
      'Names of team members',
      'Gabriel Barreto',
      'Anders Sorby',
      'Sam Burnham',
      'Caden Haustein'
    ],
    projects: [
      {
        projectId: '45d453b9-03c0-49fd-89f4-9cecfe9fd833',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f65'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f66'
    },
    id: 'e8bcbedb-5a27-44c0-9155-b380101d48ae',
    name: '',
    members: [
      'David Rhodus: Project lead and developer',
      'Max Rosenburg: Developer'
    ],
    projects: [
      {
        projectId: 'b38a0982-0916-4492-8b7a-e6459dd8d3c2',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f67'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f68'
    },
    id: 'c358d3f7-70ec-4a26-9822-7884620cef1e',
    name: 'find signal pte. ltd.',
    members: ['Saumya Karan', 'Sahil Nanda', 'Prastut Kumar'],
    projects: [
      {
        projectId: 'e2a6f352-d182-4046-a22d-b66ff424bea1',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f69'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f6a'
    },
    id: '2ef3967a-39ae-4f7c-bc67-342ebf123299',
    name: 'zenlink',
    members: [
      'Hui Guo(Leo Guo), Team Leader',
      'Tianling, Principal Blockchain Expert',
      'Jianbin Zhao, Senior Backend Engineer',
      'Rui Shi, Senior Backend Engineer',
      'Hui Yuan, Senior Product Manager'
    ],
    projects: [
      {
        projectId: '87ffc88a-2786-442a-b0c7-1bc6b67f2197',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f6b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f6c'
    },
    id: 'fd2fa511-7f43-4efb-a7ef-3e40f72e79c8',
    name: 'zenlink',
    members: [
      'Hui Guo(Leo Guo), Team Leader',
      'Tianling, Principal Blockchain Expert',
      'Jianbin Zhao, Senior Backend Engineer',
      'Rui Shi, Senior Backend Engineer',
      'Hui Yuan, Senior Product Manager'
    ],
    projects: [
      {
        projectId: '0af7748b-ea10-465d-ae9b-a11270f6306a',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f6d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f6e'
    },
    id: '367995bf-e9cf-4301-8980-571b10dbe44f',
    name: '',
    members: [
      'Guo hui(Leo Guo), team leader',
      'Tianling, principal blockchain expert'
    ],
    projects: [
      {
        projectId: '5bd28b3b-996c-4043-861f-a0192320c379',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f6f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f70'
    },
    id: '07398be8-3214-49b7-a43c-168c7468e6de',
    name: 'zero network',
    members: ['Ash Whitehat', 'Kirill Karbushev'],
    projects: [
      {
        projectId: '3b81aad1-2a7a-443f-8918-e616e5a2a378',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f71'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f72'
    },
    id: 'e7fb0a3c-88a8-420f-95b9-987601ca40a4',
    name: 'plasm network (shinsaku ashizawa, sota watanabe)',
    members: ['Shinsaku Ashizawa', 'Alexsandr Krrupenkin', 'Sota Watanabe'],
    projects: [
      {
        projectId: '05f628d3-3e01-4093-bcde-f03723f76f67',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f73'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f74'
    },
    id: 'dfb3c973-9c5e-40e5-9abb-87e1040012b4',
    name: '',
    members: ['Shinsaku Ashizawa', 'Alexsandr Krrupenkin', 'Sota Watanabe'],
    projects: [
      {
        projectId: 'ac9b26e1-3bc0-4b69-a36b-a4474986d707',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f75'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f76'
    },
    id: 'ad10d390-4ff4-480c-9783-f1a1384ed042',
    name: 'zkverse',
    members: [
      'Name of team leader: Bun - Rust/substrate developer, mainly insterested in cryptography and blockchain',
      'Name of team member: Aaron'
    ],
    projects: [
      {
        projectId: 'bdcfc2c7-273c-4987-b8ab-c5c21ffecc1f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f77'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44f78'
    },
    id: 'bca105fc-8d8a-4813-81b8-1db766edf632',
    name: 'zkwasm rollups transfer',
    members: ['Ash Whitehat', 'Kirill Karbushev'],
    projects: [
      {
        projectId: 'a5c274d8-9db7-427f-a901-b839e21117cf',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44f79'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64d4c790a72b3c12ab815280'
    },
    id: '9bb32676-b112-44d6-a83b-a04ef1d636f4',
    name: 'afloat inc.',
    members: [
      'Louise Reed - CEO and founder',
      'Max Gravitt - Architect',
      'Jose Maria Gayosso - UI Developer',
      'Erick Casanova - Blockchain Engineer',
      'Abel Yanez - Substrate Developer'
    ],
    projects: [
      {
        projectId: '97c47dee-7bec-44e8-800b-e432d0cc4b50',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c4f'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64d4c803b5258a4fc13badc3'
    },
    id: 'ed60b7e2-1ecc-4f32-9cdb-6627e0f8e153',
    name: 'afloat inc.',
    members: [
      'Han Zhao - Core Dev and PM of Litentry Parachain Team. University of Stuttgart',
      "Yvonne Xie - Digital Marketing Lead. King's College London",
      'Shihao Zhao - Full Stack Dev of Litentry. University of Toronto',
      'Hao Ding - VP of Litentry, Founder of Web3Go. University of Stuttgart',
      'Dr. John Wu - Core Dev of Litentry Parachain Team. The University of Tokyo'
    ],
    projects: [
      {
        projectId: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c4d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64d4c9c3918e3e2d11463f52'
    },
    id: '5363f60e-70bf-4784-82e1-a7b9cb860af2',
    name: 'afloat inc.',
    members: [
      'Nick Hsu, Blockchain Expert and Team Leader',
      'Gang Chan, Full Stack Developer',
      'Gieno Miao, Crypto Expert and Blockchain Architect'
    ],
    projects: [
      {
        projectId: '891da133-0660-4951-b10e-313dff18431a',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c51'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64d4c9f38198eb432b145f00'
    },
    id: '61044baa-a9f5-4681-9f6a-bec5e7d2e386',
    name: 'afloat inc.',
    members: ['Zhongqiang Fu, individual developer.'],
    projects: [
      {
        projectId: '8d0a63b9-879b-4fe2-8de1-b44402812c2f',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c53'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64d4ca47bcfcaf1a2bc8cd2f'
    },
    id: 'bd98c5f3-7972-46a8-a5ee-b18c0bfd0684',
    name: 'afloat inc.',
    members: ['Toney - CTO/Project Lead', 'Junjun - Full-stack Developer'],
    projects: [
      {
        projectId: '3818a9bf-50a7-478c-9022-0d53c2b478e2',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c55'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64d4ca8d7698da640bceec64'
    },
    id: '49839e04-c5d3-4227-b9d6-84c88146ebd6',
    name: 'afloat inc.',
    members: [
      'Mr. Brian Nguyen (founder, engineer)',
      'There are another 4 key members in the company including:',
      'Mrs. Phuong Hoang - CMO',
      'Mr. Frankie Kao - Art Director and team of 5 designers',
      'Mr. Long Nguyen - Full-stack developer',
      'Mr. Albert Tran - Smart Contract & Back-end Developer',
      'Mr. Tuan Vu - DevOp',
      'Mr. Thien Nguyen - Front-end Developer',
      'Mr. Nam Hoang - Blockchain Developer',
      'Mr. Tung Nguyen - Back-end and Blockchain Developer',
      'Other part-time testers and designers.'
    ],
    projects: [
      {
        projectId: '00d42c2f-187e-41a9-8e50-aa540f7704de',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c57'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64d4caf40b17a68a6eab489e'
    },
    id: '055b61f7-6a6d-49ff-8162-e11a2c10f16b',
    name: 'afloat inc.',
    members: ['Tolga Yaycı'],
    projects: [
      {
        projectId: '40d73c34-52ca-4f9c-8981-0a8b3dec046e',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c59'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64d4ceb425f5c590e1f63ac8'
    },
    id: 'c0e07d1a-8cc2-40c2-9602-8a83065c4234',
    name: 'afloat inc.',
    members: ['Witter Lee', 'Chak Zhou', 'Andy An'],
    projects: [
      {
        projectId: '259dd6e5-fbb1-4e4d-ab87-8a4f715ef189',
        status: 'complete',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c5b'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '64d4cf923d1a19bad95c7051'
    },
    id: '36acc3f3-4b6a-4a40-8b03-8e1d598a6b17',
    name: 'afloat inc.',
    members: [
      '**Clink Li**：[Linkdin](https://www.linkedin.com/in/clink-li-aa1ba418a/)',
      '**Chris Su** : [Github](https://github.com/chrissoso)',
      '**Wei Jiang** : [Github](https://github.com/GleipnirJ)',
      '**Roger Luo** : [Github](https://github.com/luojie1024)',
      '**Chen Chen** : [Github](https://github.com/cchen1101)',
      '**Peihuang Guo** : [Github](https://github.com/Disperito)',
      '**Chengyang Lin** : [Github](https://github.com/linchengyang1116)'
    ],
    projects: [
      {
        projectId: '8212dcf1-11c7-4a0e-a676-14ad63b89a07',
        status: 'active',
        _id: {
          $oid: '64ccf06cbe6ae66a4ec44c5d'
        }
      }
    ],
    __v: 0
  }
];

export const ProjectsData: any = [
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ab4'
    },
    id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
    user_github_id: null,
    file_name: 'admeta.md',
    start_date: {
      $date: '2021-12-15T10:19:48.000Z'
    },
    html_url:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/AdMeta.md',
    payment_details: '0x1d346c4f0732674a1fc69b4bafba854f53353c35 (erc20 usdt)',
    md_content:
      "# AdMeta\n\n- **Team Name:** AdMeta\n- **Payment Address:** 0x1D346c4F0732674a1fc69b4bAFBa854F53353C35 (ERC20 USDT)\n- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2\n\n## Project Overview :page_facing_up:\n\n### Overview\n\nAdvertising in Metaverse\n\nAdMeta is a Metaverse advertisement platform that focuses on privacy-preserving. AdMeta uses a TEE-based DID service to identify target groups for advertisers, and with the usage of TEE, AdMeta guarantees not to collect any user data. AdMeta builds multiple forms of ad assets (e.g. billboards, wall paintings) in Metaverse platforms like Decentraland, Bit.Country, to allow land holders to integrate our products easily. Qualified conversions let both users and publishers get rewards from advertisers.\n\nIn Polkadot and Kusama ecosystem, DID projects like Litentry are growing fast along with its related products. We have already discussed and agreed on our initial cooperation with Litentry. Also, we have contacted with Metaverse projects like Bit.Country, who shows great interests in cooperation as well.\n\nUnlike traditional ad platforms, who collect users sensitive data(e.g. location, browsing history) for advertising, AdMeta does not collect or store any user data per se. Instead, users voluntarily decide and control what data can be stored in TEE, and the stored data in TEE cannot be accessed by anyone except users themselves.\n\n### Project Details\n\n![AdMeta Demo - the floating billboard](https://user-images.githubusercontent.com/4738254/144754078-1877d8a5-8ef9-49ec-8ef5-f79496a689f0.png)\n\nIn the above image, the floating billboard is our prototype ad component built with decentraland SDK. Users who registered on our blockchain, and switched \"Ad Display\" option on (by default it's off) are able to see a customized ad content on this billboard while gaming in decentraland.\n\nThe content of this ad component is selected according to user's personal data and preference. Unlike centralized ad platforms, we don't store user's data on or database. Instead, it's stored on the TEE layer of blockchain, and the target group matching and selecting happen also in the TEE layer, which ensures that no private data are exposed during the whole process. Eventually, both user and publisher receive some amount of token as rewards from advertiser.\n\nOur blockchain is built with Substrate, and the pallet-ad provides the functionality of advertisement proposal, storage and governance. The user pallet will connect to TEE-based external identity aggregation and DID service provided by Litentry (we have already the initial cooperation plan) to match ads with users data and preference.\n\n#### Architecture\n\n![AdMeta Architecture](https://raw.githubusercontent.com/h4n0/gists/master/admeta/admeta_architecture.svg)\n\n**Advertisers** can propose an ad with certain acceptance rule, e.g. link clicking, and also advertiser provides how many times the ads are displayed and converted, and how much they pay for each conversion. They need to pay the total price (the number of conversions \\* price per conversion) while proposing the ad. Each ad display has a unique ID, which is generated while creating the proposal. A Merkle tree are built with all these unique IDs, and the root of Merkle tree will be stored in on-chain storage. A qualified conversion gives the participated user this UID, with which the user can claim for rewards.\n\n**Councils** shall approve or reject ad proposals according to the content of ads. Also, advertisers are evaluated on their behavior democratically.\n\n**Users** can switch on the \"Ad Display\" option on AdMeta, so that users can get rewards by viewing and interacting with ads. By default, this option is off, which means users who haven't set up their AdMeta won't see any ads. Users can also provide their data for a better ad matching, by means of this they will get more rewards.\n\n**Publishers** can simply utilize our Ad Assets on any Metaverse platform and place it on their lands. Users also get rewards by a qualified display conversion.\n\n#### Technology Stack\n\n- Substrate\n- Node.js\n- 3D Model Design\n\n### Ecosystem Fit\n\nThere are an increasing number of Metaverse related projects in Polkadot/Kusama ecosystem, however, the current Metaverse platforms still lack of infrastructures and applications, comparing to our current real life. We therefore build this for various Metaverse platforms.\n\nOur target audiences can be Web3 projects, who are potential advertisers, Metaverse land holders, who are potential publishers, and Metaverse players, who are potential users.\n\nAdvertising is our natural needs in almost all social scenarios, and we meet this needs in Metaverse.\n\n[Parami](https://parami.io/) builds Web3 ad platforms as well, and their scope is to build the DID and privacy layer by themselves. While we are focusing on the advertising functionality, and the DID service will be provided by Litentry, who is more professional on this field and has already their products. Also, our ad platform is targeting on Metaverse, not Web3.\n\n## Team :busts_in_silhouette:\n\n### Team members (In order of joining time)\n\nHan Zhao - Core Dev and PM of Litentry Parachain Team. University of Stuttgart\n\nYvonne Xie - Digital Marketing Lead. King's College London\n\nShihao Zhao - Full Stack Dev of Litentry. University of Toronto\n\nHao Ding - VP of Litentry, Founder of Web3Go. University of Stuttgart\n\nDr. John Wu - Core Dev of Litentry Parachain Team. The University of Tokyo\n\n### Contact\n\n- **Contact Name:** Han Zhao\n- **Contact Email:** windzhaohan@gmail.com\n- **Website:** <https://admeta.network/>\n\n### Legal Structure\n\n- **Registered Address:** No legal structure yet.\n- **Registered Legal Entity:** No legal structure yet.\n\n### Team's experience\n\nHan and John are core developers as well as project managers at Litentry, and both of them are main developers who implemented the Litentry parachain from scratch. Litentry is an identity aggregation focused company in Polkadot ecosystem, and has got the Web3 Foundation grant since 2019.\n\nYvonne has more than 8 years experience of digital marketing, and she has a deep understanding and practice of various online marketing and advertising methods. She also initialized this idea of combining advertisement and privacy preserving, to archive the goal of data protection.\n\nShihao is a full stack developer at Litentry, who contributes a lot in Litentry and Web3Go web apps and backend apps.\n\nHao is the founder of Web3Go, VP of Litentry, who has a very solid practical experience on both blockchain and data science.\n\nNote: Both [Litentry](https://www.litentry.com/) and [Web3Go](https://github.com/w3f/Grants-Program/blob/master/applications/Web3Go.md) are Web3 granted projects.\n\n### Team Code Repos\n\n- <https://github.com/litentry/litentry-parachain>\n- <https://github.com/litentry/litentry-pallets>\n- <https://github.com/web3go-xyz/web3go>\n\nPlease also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.\n\n- <https://github.com/h4n0> Han Zhao\n- <https://github.com/Shihao66> Shihao Zhao\n- <https://github.com/Moehringen> Hao Ding\n\n### Team LinkedIn Profiles (if available)\n\n- <https://www.linkedin.com/in/zhaohan6>\n- <https://www.linkedin.com/in/shihao-zhao-55752685/>\n- <https://www.linkedin.com/in/hao-ding-msc-pmp-64411193/>\n\n## Development Status :open_book:\n\n- <https://github.com/AdMetaNetwork/admeta> This is the AdMeta Substrate chain implementation. We already started to build the pallets mentioned in Milestone 1 below.\n- <https://github.com/AdMetaNetwork/admeta-webapp> This is our web app repo according to Milestone 1. We already had a single page app with polkadot js API integrated now.\n- <https://github.com/AdMetaNetwork/admeta-decentraland> This is a simple asset built with Decentraland SDK, and currently it's just for a demo purpose.\n- <https://admeta.network/> We also have the first version of our website.\n\n## Development Roadmap :nut_and_bolt:\n\n### Overview\n\n- **Total Estimated Duration:** 1 months\n- **Full-Time Equivalent (FTE):** 2 FTE\n- **Total Costs:** 12,000 USD\n\n### Milestone 1 — Substrate Chain with Impression Ad, Web App\n\n- **Estimated duration:** 6 month\n- **FTE:** 2\n- **Costs:** 12,000 USD\n\n| Number | Deliverable                 | Specification                                                                                                                                                                                                                                                                                                  |\n| -----: | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n|    0a. | License                     | GPLv3                                                                                                                                                                                                                                                                                                          |\n|    0b. | Documentation               | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                  |\n|    0c. | Testing Guide               | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                              |\n|    0d. | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                  |\n|    0e. | Article                     | We will publish an **article**/workshop that explains our advertising workflow as well as technical details.                                                                                                                                                                                                   |\n|     1. | Substrate module: ad        | We will create a Substrate module that will allow advertiser to create impression ads, and with council's approval, this ad will be ready to be displayed. If ads are rejected by the council(e.g. illegal or pornographic content), the advertiser's proposal bond will be slashed and collected in treasury. |\n|     2. | Substrate module: user mock | We will create a Substrate module that will first store users data on chain, to test and verify our logic. Also, user can update their data, control what data should be used, and these data are used to find the best matching ad for user.                                                                  |\n|     3. | Substrate chain             | Module ad and user can be integrated into a substrate node, to enable users access of all approved ads, receive rewards, etc. This chain will integrate treasury, council, democracy and also other essential pallets, to build a full-featured blockchain.                                                    |\n|     4. | Web App                     | We will create a web app, to let users easily interact with our substrate node. Users can claim rewards from viewing and clicking ads, and they can also configure their ad preferences and decide if they are willing to view ads or not.                                                                     |\n\n## Future Plans\n\nThe next step is to have sensitive data stored in TEE. Also, we will build more ad types, like click ads and acquisition/action ads. Meanwhile, we will implement a Chrome extension to simplify the claim process, and an Ad asset on Decentraland(or other Metaverse platform) to enable land holders to use our ad assets conveniently.\n\nIn a long run, we will cooperate and adapt our products with more Metaverse platforms, and also we will develop more creative and interactive ad types.\n\n## Additional Information :heavy_plus_sign:\n\n**How did you hear about the Grants Program?** Personal recommendation\n",
    md_link:
      'https://raw.githubusercontent.com/shaurya-ATR940/Grants-Program_dummy/master/applications/AdMeta.md',
    project_name: 'admeta',
    status: 'complete',
    total_cost: {
      amount: '12000',
      currency: 'usd'
    },
    total_duration: '1 months',
    team_id: 'ed60b7e2-1ecc-4f32-9cdb-6627e0f8e153',
    level: '2',
    legal_structure: {
      registered_address: 'no legal structure yet.',
      registered_legal_entity: 'no legal structure yet.'
    },
    milestones: ['549a8894-d6a9-408c-8884-252985cbb1d2'],
    totalMilestones: 1,
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44abd'
    },
    id: '189930db-0cc3-4c8e-9268-1676d5c598fd',
    user_github_id: null,
    file_name: 'cess.md',
    start_date: {
      $date: '2021-09-09T14:23:22.000Z'
    },
    html_url:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/CESS.md',
    payment_details: '0x378d889a6e66996c9eda86d20d7e6ade666ce167(usdt)',
    md_content:
      '# Cumulus Encrypted Storage System (CESS)\n\n- **Team Name:** CESS LAB\n- **Payment Address:** 0x378D889a6e66996C9Eda86D20D7E6adE666ce167(USDT)\n- **Level:** 1\n\n## Project Overview :page_facing_up:\n\n### Overview\n\n- Tag line: An infrastructure for a blockchain-based decentralized cloud data network.\n- Brief description: Cumulus Encrypted Storage System (CESS) is dedicated to develop a new global decentralized cloud data storage platform – a blockchain-based network infrastructure that is transparent, efficient, and equal opportunity to all members of the global community. CESS encourages excess or under-utilized resources as nodes to join CESS’s unrestricted expandable network via the token economy incentive method. Each node joins the CESS peer-to-peer network by contributing data storage resources, computational resources, or network bandwidth. Built on our state-of-the-art virtualization and cloud computing technologies, CESS organizes and manages the participating resources providing clients with secure, high performance, and boundless cloud data storage services. Furthermore, the CESS protocol enables interconnection of network nodes, to build a large decentralized cloud storage system that supports up to 100PB storage scale to meet the demand of enterprise level data storage. CESS will adopt a phased approach to implement the above goals.\n- Indication 1: With the goal of entering Polkadot ecosystem, CESS will build a blockchain system based on Substrate directly, and plans to develop custom pallets on FRAME. In the future, CESS will consider integrating to Polkadot in the form of Parachain to create a new decentralized cloud storage ecosystem, establish a large-scale distributed storage network.\n- Indication 2: With rapid advances of new computing technologies such as big data and machine learning, the value of humanity’s digital assets, the so-called “Digital Gold”, are being discovered. Explosively growing amount of data in cyberspace calls for new technologies of secure data storage and efficient data sharing. The challenges are to achieve secure storage, efficient sharing, and trading with data owner’s rights protection, but current solutions are complex and worrisome. Distributed storage networks can better drive the arrival of Web3.0 and are one of the underlying technical infrastructure of Web3.0.\n\n### Project Details\n\nWe expect the teams to already have a solid idea about your project\'s expected final state. Therefore, we ask the teams to submit (where relevant):\n\nMockups/designs of any UI components\n\n- Global nodes: Display the global map and the number of global nodes of distributed storage network, and mark the location distribution of nodes according to coordinates; Display node list.\n\n![Image](https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img1.png)\n\n- My cloud disk: Personal storage space to view the files uploaded to the storage network; The list can be sorted by upload time, file name, file type and file size; Supports file download, share, property setting, deletion and other operations.\n![Image](https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img2.png)\n\n- File upload: Select the files to be stored and set the relevant storage parameters.\n\n![Image](https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img3.png)\n\n- Search for file: Search the whole network through keywords, and download the search results.\n![Image](https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img4.png)\n\nDocumentation of core components, protocols, architecture, etc. to be deployed\n\n- CESS is a high-speed, secure, scalable and decentralized cloud storage system. It can handle tens of thousands of transactions per second through parallel technology. Through Data slicing technology, it can achieve the secure storage of massive data, and it has the functions of Data confirmation and Data rights protection, which provides powerful data service ability. It provides DAPP with unlimited scalable storage capacity and perfect Data rights protection capability.\n\n- Data storage workflow: When a client requests to store a data file, the CESS platform pre-processes the data file to obtain and store its meta-data and data fingerprints. The pre-process software also performs data file replication and fault tolerant erasure coding. The meta-data includes info of data owner, data keywords, and etc. The data fingerprints are for subsequent data rights confirmation.\n\n<div align="center"><img width="72%" height="72%" src="https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img5.png"/></div>\n\n- CESS client-platform interactions: A typical CESS data client and platform interaction flow is as follows: first, a data storage client interrogates CESS chain to get current storage price. The client then places an order for his/her data file via extrinsics on blockchain. Once the payment is made and order is approved, the client then uploads the data file using API provided by CESS platform. The data file is not directly uploaded to storage nodes, instead it is uploaded to a CESS storage scheduling node. The scheduling nodes are the ones with secure hardware environment (Trusted Execution Environment or TEE) and the data file will be pre-processed, encrypted, and sharded. Finally, the scheduling node distributes data segments to storage nodes to store. CESS storage miners do not make deal directly with clients, and they get rewarded from CESS system by providing storage space. Miners’ storage resources are uniformly managed by CESS system, which fairly distributes data files. Miners have the responsibility to maintain the integrity of clients’ data. Any malicious behavior will be punished (CESS token deduction).\n\n<div align="center"><img width="65%" height="65%" src="https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img6.png"/></div>\n\n- Overall system architecture: CESS adopts a layered and loosely coupled system architecture, which is divided into blockchain service layer, distributed storage resource layer, distributed content delivery layer and application layer.\n\n<div align="center"><img width="68%" height="68%" src="https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img7.png"/></div>\n\n- CESS MDRC mechanism workflow: CESS have designed a unique **Multi-format Data Rights Confirmation Mechanism (MDRC)**, which extracts data fingerprint from each data file to generate data certificate ID. By comparing similarities between data fingerprints, the system identifies data lineages of data files, and may take appropriate actions to prevent possible violations, and to provide strong evidences for owners’ data rights protection.\n\n<div align="center"><img width="68%" height="68%" src="https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img8.png"/></div>\n\n### Ecosystem Fit\n\nCESS is a distributed cloud data network with user friendly ledgers, novel consensus mechanism, multiple data authenticity proof schemes, and reliable network infrastructure. CESS offers data storage service with the advantages of low cost, privacy protection, security and robustness. With the implementation of CESS data confirmation and proxy re-encryption technology, CESS provides Web3.0 clients and DAPPs with trustworthy, secure and reliable data rights protection.\n\nCompared to the similar projects in the Polkadot ecosystem including Ocean, DataHighway and Bluzelle, CESS storage service features:\n\n- Encrypted data storage\n- Multiple copies (3 copies by default, more upon request)\n- Sharded and distributed on multiple nodes\n- Highly scalable storage space\n- Transactions secured by CESS blockchain\n- Data rights protection for data owners\n- Competitive cost\n\n## Team :busts_in_silhouette:\n\n### Team members\n\n- Joseph Li\n- Jinghong Zeng\n\n### Contact\n\n- **Contact Name:** Jessie Dai\n- **Contact Email:** jessie@cess.cloud\n- **Website:** <http://cess.cloud>\n\n### Legal Structure\n\n- **Registered Address:** 22 St Leonard\'s Ave, Lostock, Bolton BL6 4JE, England\n- **Registered Legal Entity:** Paul David Humphreys\n\n### Team\'s experience\n\n- Team CESS\n\nCESS technical team members have an affluent understanding of technology and have been involved in internationally renowned cloud storage companies as essential technical development members.\n\nThe background of our team members includes but not limited to cloud computing and storage, involved in cloud related PaaS and SaaS products research and development; unique insights into the network development, cryptography algorithm implementation, and performance optimization; comprehensive knowledge of public chain and played a major role in the development of public chain focusing on the delivery of commercial applications.\n\nFor the past two years, CESS core team members have been developing and building a stable decentralized cloud storage service atop the distributed resources to surmount the security risks presented in the current centralized storage platform. The members are working in the UK, China, and India locations with the commitment creating a decentralized cloud storage data network for commercial use.\n\n- Joseph Li\n\nJoseph Li brings to our operations 24 years of experiences as a Principal Network Engineer managing and supporting large-scale networks on a global scale. Amongst Joseph’s numerous achievements was the IP infrastructure conversion for a network of over 900 nodes and his major accomplishments within the field of VPN.\n\n- Jinghong Zeng\n\nJinghong Zeng served more than 20 years with a global telecommunications cooperation as a Senior System Architect and Software Engineer, she has proven skills in data warehousing, data processing within distributed systems and a solid understanding of Blockchain.\n\n### Team Code Repos\n\n- <https://github.com/Cumulus2021/CumulusSystem>\n- <https://github.com/Cumulus2021/Whitepaper>\n\n## Development Roadmap :nut_and_bolt:\n\n### Overview\n\n- **Total Estimated Duration:** 4 months\n- **Full-Time Equivalent (FTE):**  2\n- **Total Costs:** 8,000 USD\n\n### Milestone 1: Implement Substrate Modules\n\n- **Estimated Duration:** 2 months\n- **FTE:**  2\n- **Costs:** 4,000 USD\n\n| Number | Deliverable | Specification |\n| -----: | ----------- | ------------- |\n| 0a. | License | Apache 2.0 / MIT / Unlicense |\n| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can running substrate to support storage service. |\n| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |\n| 0d. | Article/Tutorial | We will publish an article and a tutorial that explains the work done as part of the grant. |\n| 1a. | Substrate module: Files Bank | We will create a Substrate module that will generate file\'s tag information based on the user\'s subscription. |  \n| 1b. | Substrate module: Files Map | We will create a Substrate module that will allow users to query file storage path. |  \n| 1c. | Substrate module: Storage Miner | We will create a Substrate module that will process and upload user data, and support Integrity verification. |  \n| 2. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain. |\n\n### Milestone 2: Implement Storage Mining\n\n- **Estimated Duration:** 1 month\n- **FTE:**  2\n- **Costs:** 2,000 USD\n\n| Number | Deliverable | Specification |\n| -----: | ----------- | ------------- |\n| 0a. | License | Apache 2.0 |\n| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how proof of storage service works. |\n| 0c. | Testing Guide | The code will have unit-test coverage (min. 80%) to ensure functionality and robustness. In the guide we will describe how to run these tests. |\n| 0d. | Article/Tutorial | We will publish an article and a tutorial that explains the work done as part of the grant. |\n| 1a. | Stacked DRG Library | We will create a library for proving and verifying transactions, compatible with the substrate pallet. |  \n| 1b. | zk-SNARK proofs | We will implement the algorithm to process the proof results from stacked DRG library. |\n| 2. | Substrate module: Segment Book | Develop pallet implement function of storage mining. |\n| 3. | Miner Client | Interactive with pallet for storage mining to implement mining supporting services. |\n\n### Milestone 3: Implement and Integrate CESS Applications\n\n- **Estimated Duration:** 1 month\n- **FTE:**  2\n- **Costs:** 2,000 USD\n\n| Number | Deliverable | Specification |\n| -----: | ----------- | ------------- |\n| 0a. | License | Apache 2.0 |\n| 0b. | Documentation | We will provide an application manual and a basic tutorial that introduces the functions of clients. |\n| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. |\n| 0d. | Article/Tutorial | We will publish an article and a tutorial that explains the work done as part of the grant. |\n| 1. | Cryptographic modules | We will implement the cryptographic modules including inner product functional encryption and the associated zero-knowledge proof for storage proof. |  \n| 2. | UI Modules | We will design a user-friendly UI that supports both PC and mobile. |\n| 3. | File processing | We provide abundant file operation services, including file upload, download, share, delete, etc. |\n| 4. | Benchmark | Perform unit tests on the individual algorithms to ensure system safety. |\n| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain. |\n\n## Future Plans\n\nWe will continue to improve the substrate-based CESS blockchain and provide reusable modules for the substrate FRAME. The next phase of our project is to implement CESS  protocol for decentralized cloud on-chain data sharing platform.\n\n## Additional Information :heavy_plus_sign:\n\n**How did you hear about the Grants Program?** We have heard from Parity Asia.\n\n**What work has been done already?** We have already implemented a design prototype and pilot test system.\n\n**Have you ever applied for other grants?** We have not applied for any other grants so far.\n',
    md_link:
      'https://raw.githubusercontent.com/shaurya-ATR940/Grants-Program_dummy/master/applications/CESS.md',
    project_name: 'cumulus encrypted storage system (cess)',
    status: 'complete',
    total_cost: {
      amount: '8000',
      currency: 'usd'
    },
    total_duration: '4 months',
    team_id: '4933b995-428b-4882-9f23-92ce69182a02',
    level: '1',
    legal_structure: {
      registered_address:
        "22 st leonard's ave, lostock, bolton bl6 4je, england",
      registered_legal_entity: 'paul david humphreys'
    },
    milestones: [
      '7326b2b0-83df-4a6e-8077-45f25226e895',
      '541b8731-d27a-4530-bcd1-6bc407c889e7',
      'a004fd8e-763b-40ef-a8a6-a8544fb18d53'
    ],
    totalMilestones: 0,
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ab5'
    },
    id: '97c47dee-7bec-44e8-800b-e432d0cc4b50',
    user_github_id: null,
    file_name: 'afloat.md',
    start_date: {
      $date: '2022-05-12T09:10:03.000Z'
    },
    html_url:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/Afloat.md',
    payment_details: 'bc1q0aghk8qufzwpmrp5nfyu9r7dh3yynmphk7rhjj',
    md_content:
      "# Afloat Tax Infrastructure Polkadot Integration\n\n- **Team Name:** Afloat Inc.\n- **Payment Address:** bc1q0aghk8qufzwpmrp5nfyu9r7dh3yynmphk7rhjj\n- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2\n\n## Overview\n\n[Afloat](https://stayafloat.io/#/) is one of the first real-use cases of blockchain technology in the accounting industry. It enables the fractional buying and selling of tax credits that historically have been inefficient, opaque, and centralized. It has already processed tax credits ranging in orders from $2K -$70k USD.\n\nAfloat was built on a private Ethereum clone but wants to migrate to Polkadot due to its technology, identity management, and community. Parachains like Kilt and their identity services would be crucial at validating government roles and professional certifications like accountants and institutional sellers.\n\n## Project Details\n\n### Background\n\nA common tax credit is for land preservation. The inhabitants of a geographic area recognize that their shared quality of life may be positively impacted if more land was preserved rather than developed. If the owner of land property in that area agrees to preserve land, they may be eligible to receive a tax credit in an amount associated with the value of the land property. However, some owners of tax credits do not have enough tax liability to take full advantage of the reward. Because of this, a number of states allow credits to be transferred. State transferable tax credits are typically bought and sold at a discount.\n\nHistorically, the tax credit industry’s transfer process has been deeply inefficient. Due to a lack of trust between buyers and sellers, accountants and lawyers act as middlemen. This added financial and procedural cost creates an entry barrier for the majority of taxpayers into the tax credit market. What remains is a tight-knit group of wealthy buyers, sellers, and policymakers.\n\n### Product\n\n[Afloat](https://stayafloat.io/#/) uses blockchain technology to add trust and liquidity to the market, allowing smaller fractional shares of tax credits to be transferred. So far, Afloat has facilitated the transfer of over $500,000 worth of tax credits between multiple buyers and sellers, 90% with whom Afloat anticipates an ongoing relationship. One of the platform’s sellers is an international company with over 10,000 employees, and the value of tax credits purchased per buyer has so far ranged between less than $2,000 and over $70,000.\n\nWith the ability to tap into a market sector that knows nothing about blockchain or cryptocurrency, Afloat has the potential to lay the foundation to onboard traditional companies into the Polkadot ecosystem beyond using only Afloat. We have 120 active users, many of which are CPAs (public accountants) and represent a network of taxpayers (credit buyers and sellers). We purposefully haven't had any marketing campaigns and have been cautious with growth so far. As of April 15, 2022, we have successfully processed more than twice the total number of tax credits processed in 2021. We had a large batch of users enroll in December 2021 (end of tax year) and material increase (4x) year over year.\n\nHaving started in the US, Afloat, Inc., a Wyoming company, is compliant with existing federal, state, and local regulations and takes care of the entire transfer process with the following functions:\n\n- Uploading proof of tax credit ownership\n![Image](https://user-images.githubusercontent.com/7217054/159963378-b850c316-aa28-46ea-9a87-2e184de57a0d.png)\n\n- Linking a US bank account\n![Image](https://user-images.githubusercontent.com/7217054/159963375-a06565dc-9f19-4aa9-8e31-a6223aa2cef8.png\")\n\n- Fiat integration using Dwolla, a third party company\n- Placing buy and sell limit orders on blockchain\n\n![Image](https://user-images.githubusercontent.com/7217054/159963749-d7e2ef89-fac0-4f4c-a823-9dd3a4e9d263.png)\n\n- Algorithmic matching overlapping full or partial orders in a ”pending” status while waiting for government approval\n\n![Image](https://user-images.githubusercontent.com/7217054/159963752-dc5f9323-1d07-4bc5-b309-ab2147ff71b8.png)\n\n- Autopopulate tax forms with blockchain data (Afloat supports five of thirty-six US tax forms)\n- Completion of government paperwork and money transfer after government approval\n\nTax credits, as a socioeconomic tool, are very similar to concepts found in the Substrate, Polkadot, Kusama (dotsama) ecosystem, where the tokenomics are decided by participants through a governance process designed to maximize the benefit for the network. For example, the network will:\n\n1. \"mint or burn DOTs in order to reward the nodes that run the consensus protocol, to fund the treasury, to control the inflation rate, etc.\"\n2. \"[ensure] DOTs also play a role in slashing protocols designed to disincentivize attacks or adversarial behaviors,\"\n3. \"let DOT holders express their opinion in governance decisions\",  and\n4. \"decide which projects are allocated a parachain slot\".\n\n### Migration\n\nInitially we will run on a standalone chain as a pallet. This provides the most latitude and flexibility. The initial phase is primarily focused on function, usability, and ensuring the core asset type design is secure and composable. It also includes existing user and asset migration. We will have a one-time process per user to teleport their account and assets. Most likely, we will not teleport any orders or redemptions currently in process. They would close out on the old platform, and users would create new ones after they migrate.\n\nWe did not include any scope or fund request in the proposal related to the migration work. The scope of the w3f proposal is focused on building the open source components. These will be available for the community, and Afloat will be an implementation of them. Making the pallets and tooling as general purpose as possible should help with reusability, for us and other projects.\n\nTo handle fractional tax credits in Substrate we are using \"fruniques\". That is our name for *FRactional UNIQUES*. It'll be compatible with the Uniques pallet and eventually with RMRK as well. It allows the user to spawn a new NFT from an existing NFT, repeatedly, while specifying an associated amount. The integrity of the total quantity must remain intact, along with metadata, but each of these NFTs can be priced, transferred, and redeemed individually.\n\nAn earlier implementation of this used a fungible token to represent the parts of the tax credit, but we've found that fractional NFTs fit the mental model a bit better and more ergonomically in existing tools. A user is buying a \"thing\", see that thing in their wallet, where they may hold 7 of them. Holding various quantities of 7 different fungible tokens seemed to increase the complexity more than necessary. This is a design element we frequently brainstorm on though. In a future release, it may be useful to have fruniques support both use cases.\n\nThis proposal covers the migration or creation of the following:\n\n1. User onboarding (set and verify identity with gatekeeper parameters) and slides.\n2. Sign and Login with email.\n3. Originate and configure a tax credit and create sales orders for tax credits.\n4. Support for encrypted files attached to tax credits.\n5. Sell the entire or a fraction of the tax credit to interested buyers using fruniques pallets.\n6. Ability for buyers to place buy orders.\n7. Asset redemption workflow (tax credits require a 'redemption specialist').\n8. Launch materials, videos and speaking arrangements.\n\n### Workflow\n\n![Image](https://user-images.githubusercontent.com/7217054/160020369-b64ae31d-8cc5-49ce-8c4d-82dea85546cf.png)\n\n## Ecosystem Fit\n\nAfloat serves tax payers that want to buy and/or sell tax credits. These users will benefit by Polkadot's improved security and by gaining compatibility for liquidity. Polkadot will benefit from the influx of non-technical users into the ecosystem. Tax Credits trade with a heavy discount to face value, and Polkadot participants will likely want to hold them during that lifespan even if they aren't the final redeemer. If a 5-year expiration credit is priced at $0.60-to-the-dollar by its impatient originator, it could be purchased via a more patient market maker to perhaps be sold at $0.90 in year 3 or 4, just as an example.\n\nThe secondary target audience are the community of developers that will benefit by leveraging the open source components and integrations with tax credit fruniques.\n\n### Community\n\nAs the perfect technology for record-keeping, blockchain makes a lot of sense for accountants. Afloat not only wants to bring its infrastructure to Polkadot but also bring Polkadot into the accounting community with the following:\n\n#### Continuing Education for CPAs\n\nAfloat’s founder and current CEO [Louise Reed](https://www.linkedin.com/in/louisewreed/) has given talks at a number of CPE conferences, where CPAs receive continuing education credits to maintain their licenses each year. Introducing her to Web 3 infrastructure would allow her to speak about it at CPA conferences, especially to other CPAs looking for classes covering new and interesting topics and ideas.\n\n#### Crypto Clients\n\nWorking in a historically conservative industry, CPAs are starting to feel the push from blockchain/crypto clients to accept the new technology and are now being forced to help with risk mitigation (alongside lawyers).\n\n#### Sellers\n\nTypically, sellers of tax credits are large international businesses, which are usually slow with internal changes. However, familiarity with the tax credit market paves the way for an easier introduction to a new technology.\n\n#### Buyers\n\nIntroducing programming/blockchain/crypto taxpayers to tax savings by way tax credits would bring new customers to a marketplace that has a strong history of centralization, opacity, and insularity.\n\n#### Bridging Communities\n\nAfloat would naturally bridge two opposing communities: accounting, the most trusted and conservative industries, and blockchain, one of the most innovative industries. By association with such a trusted industry, blockchain would receive credibility in the eyes of the general public while also modernizing accounting with new and better processes.\n\n#### Natural Use Case\n\nThere is a huge educational and technological divide in the learning curve for accountants when it comes to blockchain, but Afloat adds an easy and natural way to learn.  Most people, including CPAs and businesses, tend to understand only what they can see and experience, and Afloat brings tangibility to an otherwise intangible industry.\n\n#### Speaking arrangements\n\nLouise Reed is scheduled to speak at the following Certified Public Accountant Societies.\n\n| Date of Talk | CPA Society | Location |\n| -----------: | ----------- | -------- |\n| 5/26/2022    | NC          | Greensboro |\n| 8/24/2022    | GA          | Atlanta |\n| 9/26/2022    | VA (+ VA Tech) | Roanoke |\n| 11/17/2022   | VA (+ VA Tech) | Virginia Beach |\n\n## Team :busts_in_silhouette:\n\n### Team members\n\n- Louise Reed - CEO and founder\n- Max Gravitt - Architect\n- Jose Maria Gayosso - UI Developer\n- Erick Casanova - Blockchain Engineer\n- Abel Yanez - Substrate Developer\n\n### Contact\n\n- **Contact Name:** Louise Reed\n- **Contact Email:** louise@stayafloat.io\n- **Website:** <https://stayafloat.io/#/>\n\n### Legal Structure\n\n- **Registered Address:** 6118 Saint Andrews Lane, Richmond, VA 23226\n- **Registered Legal Entity:** Afloat, Inc.\n\n### Team's experience\n\nWith a master's degree in physics from Duke University and a Master of Accounting from the University of North Carolina at Chapel Hill, Louise W. Reed has been a CPA for fifteen years and has grown a successful private practice that specializes in working with small businesses. In the spring of 2018, Louise conceptualized and founded Afloat to allow her clients to have the same tax opportunities traditionally found in only the largest of CPA firms. Under her leadership, Afloat built the current application (private ethereum clone) with an in-house team and successfully launched in 2021. [Awards](https://stayafloat.io/#/media)\n\nAfloat is partnering with Hashed Systems DAO LLC, a substrate development team with years of experience building blockchain applications. They have worked on substrate and Polkadot since spring 2021. Their developers completed Brian Chen's course and have experience running substrate chains and have significant experience working with the Uniques, Identity and Node-authorization pallets. Additional relevant experience below:\n\n[Hypha DAO](https://dho.hypha.earth/#/): Smart contracts and front end development that enables the creation of flexible roles, assignments and contributions with recurring payments. Design and implement a graph data layer to improve web application performance. Design and build a [Double Entry accounting](https://us02web.zoom.us/rec/share/eRqiBvq-dsV0L_hEjW5e8DWNYQlUn2bLhI8-86jkRVwdXiN3TiD5edym17ubCd9R.QhKQw_Byy0t5_8SW?startTime=1647371674000) (Passcode: .V$C#Br2) plattform that streams wallet activity, supports token price history, reporting and currency conversion.\n\n[SEED](https://joinseeds.earth/): Smart contract and mobile development that capture the project's constitution, enable voting on proposals and basic identity management like reputation, vote history etc. Design and build a PWA token swaps app. Design and build a basic [Economic Simulator](https://seeds-sim.hypha.earth/dashboard) that enables voters to understand the economic impact of policy changes.\n\n### Relevant profile links\n\n- Louise Reed CPA website: <https://louisereedcpa.com/>\n- Louise Reed LinkedIn: <https://www.linkedin.com/in/louisewreed/>\n- Abel on Github: <https://github.com/amatsonkali>\n- Jose Maria on Github: <https://github.com/jmgayosso> and Gitlab: <https://gitlab.com/jmgayosso>\n- Hashed website: <https://hashed.io/>\n- Erick on GitHub: <https://github.com/tlacloc>\n\n## Development Roadmap :nut_and_bolt:\n\n### Overview\n\n- **Total Estimated Duration:** 13 weeks\n- **Full-Time Equivalent (FTE):**  2 FTE (across 5 contributors)\n- **Total Costs:** 46,200 USD\n\n#### Languages\n\n- All pallets will be developed in Rust.\n- The custodial/persistence partner backend will be developed in Nodejs, with a slight possibility of porting it to Rust.\n- The front end will be Angular, with a possibility that it will be migrated to Vuejs.\n\n### Milestone 1 — User onboarding (set and verify identity with gatekeeper parameters) and slides\n\n- **Estimated duration:** 5 weeks\n- **FTE:**  2\n- **Costs:** 17,675 USD\n(5 contributors)\n\n| Number | Deliverable | Specification |\n| -----: | ----------- | ------------- |\n| 0a. | License | MIT |\n| 0b. | Documentation | We will provide **inline documentation** of the code and a basic **tutorial** of the modules delivered in this Milestone.|\n| 0c. | Testing | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided |\n| 0d. | Video | We will provide a video demonstration that will illustrate all of the functionality delivered with this milestone. |\n| 0e. | Article | We will publish an **article** in English and Spanish that explains what was built and how it can benefit other projects |\n| 1. | Set Profile and Upload KYC Materials | User onboarding web client for uploading identity details in a privacy preserving manner. Data will be encrypted and only accessible by 1) the user, 2) a pre-specified KYC administrator account, and 3) a persistence partner/custodian that the user or app administrator selects. |\n| 2. | KYC Admin | KYC administrator screen for viewing and approving new user (market participant) requests. We plan to use the existing `registrar` process on the Identity pallet. UI is in Angular, with a small chance we may migrate it to Vuejs |\n| 3. | Slides |1-3 additional presentation slides for Louise W. Reed, CPA’s currently scheduled talks at CPA conferences regarding blockchain, cryptocurrency, triple-entry accounting and transferring state tax credits.  The additional slides will be added to address why Afloat sees value in being supported by Polkadot’s ecosystem|\n\n### Milestone 2 — Originate and configure a tax credit and create sales order for tax credits\n\n- **Estimated duration:** 4 weeks\n- **FTE:**  2\n- **Costs:** 14,140 USD\n(5 contributors)\n\n| Number | Deliverable | Specification |\n| -----: | ----------- | ------------- |\n| 0a. | License | MIT |\n| 0b. | Documentation | We will provide **inline documentation** of the code and a basic **tutorial** of the modules delivered in this Milestone.|\n| 0c. | Testing | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided |\n| 0d. | Video | We will provide a video demonstration that will illustrate all of the functionality delivered with this milestone. |\n| 0e. | Article | We will publish an **article** in English and Spanish that explains what was built and how it can benefit other projects\n| 1. | Originate Tax Credit | Web client for onboarding new tax credits as NFTs, appropriate metadata persisted using the Uniques and likely Statemint specifications. |\n| 2. | Upload Confidential Documents | This feature allows for NFT originators to upload encrypted files attached to tax credits. The files will be accessible only by the user and the application administartor. |\n| 3. | Tax Credit verification | MVP Tax Credit pallet, compatible with the prebuilt Uniques pallet (and/or RMRK), will support data validation rules by jurisdiction and tax credit type. The user will be able to save a draft of their tax credit if they need to identify more IRL steps to fix discrepancies. It's like a 'tax credit compiler'. |\n| 4. | List for Sale | Ability for Tax Credit (NFT) owners to assign a price and list it for sale.|\n\n### Milestone 3 — Sell the entire or a fraction of the tax credit to interested buyers using fruniques pallets\n\n- **Estimated duration:** 2 weeks\n- **FTE:**  2\n- **Costs:** 7,070 USD\n(5 contributors)\n\n| Number | Deliverable | Specification |\n| -----: | ----------- | ------------- |\n| 0a. | License | MIT |\n| 0b. | Documentation | We will provide **inline documentation** of the code and a basic **tutorial** of the modules delivered in this Milestone. |\n| 0c. | Testing | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided |\n| 0d. | Video | We will provide a video demonstration that will illustrate all of the functionality delivered with this milestone. |\n| 0e. | Article | We will publish an **article** in English and Spanish that explains what was built and how it can benefit other projects\n| 1. | Order Part of an NFT | Web client and pallet support for fractionalizing a Tax Credit NFT. Users may specify the % and/or direct amount for the order. Rust and Angular/Vuejs |\n| 2. | Complete/Confirm Order | Sell the entire or a fraction of the tax credit to interested buyers using fruniques pallets. Rust and Angular/Vuejs |\n| 3. | Order Settlement | Ensure the marketplace correctly calculates appropriate commissions and fees. Calculations will be in Rust, displayed in application using Angular/Vuejs |\n\n### Milestone 4 — Redeem the tax credit and confirm redemption and freeze/burn asset on-chain\n\n- **Estimated duration:** 2 weeks\n- **FTE:**  2\n- **Costs:** 7,070 USD\n(5 contributors)\n\n| Number | Deliverable | Specification |\n| -----: | ----------- | ------------- |\n| 0a. | License | MIT |\n| 0b. | Documentation | We will provide **inline documentation** of the code and a basic **tutorial** of the modules delivered in this Milestone.|\n| 0c. | Testing | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided |\n| 0d. | Video | We will provide a video demonstration that will illustrate all of the functionality delivered with this milestone. |\n| 0e. | Article | We will publish an **article** in English and Spanish that explains what was built and how it can benefit other projects\n| 1. | Approve Redemption Specialists | Pallet and web client for onboarding and approving/enrolling Tax Credit Redemption Specialists. These are experts that know how to perform appropriate steps to migrate a tax credit IRL. Approval will be handled by marketplace administrator initially, by the community eventually. |\n| 2. | Request Redemption | Pallet and web function/form for requesting redemption, optionally from a specific Redemption Specialist or system will choose. |\n| 3. | View materials and Redeem | Pallet support and web client for Redemption Specialist to review the encrypted tax credit materials and confirm that off-chain IRL redemption has been completed. Redemption completion will be approved by owner and Redemption specialist. |\n| 4. | Asset Manager | Once part or all of a tax credit NFT is redeemed, the Tax Credit Asset Manager(s) will be able to lock, freeze, and/or burn the NFT. |\n| 5. | Launch Materials | Launch materials, videos and speaking arrangements for Louise are already in queue.|  \n\n## Future Plans\n\n### Immediate Use\n\nAll Afloat users will be migrated to the substrate application and benefit from the identity and security enhancements. Afloat will gain access to the full substrate ecosystem and vice versa.\n\n### Next Phases\n\nThis proposal covers Afloat migration of the current functionality. Below are future phases that expand it:\n\n#### Phase 2\n\nUser scenarios:\n\n- Registration/approval of new appraisers,\n- Request appraisal of NFT,\n- Appraise NFT,\n- Review and compensate appraiser\n\nWeb client for:\n\n- NFT creator to request judgment and grant access to Asset Grader(s)\n- Asset Grader to review materials and provide judgment\n\n#### Phase 3\n\nUser scenarios:\n\n- More advanced ordering and pricing models,\n- Candle auctions,\n- Improved compatibility with more jurisdictions.\n\n#### Phase 4\n\n- Provide API access and referral program for tax industry participants. (e.g. allow existing systems and networks to seamlessly integrate)\n\n## Additional Information :heavy_plus_sign:\n\n**How did you hear about the Grants Program?**\nRaul Romanutti recommended the program on a call with Louise Reed, Max Gravitt and Augusto Lara on March 21st, 2022.\n\n### Additional Context\n\n#### State Tax Credit Breakdown\n\nCurrently, forty-one states offer tax credits designed to incentivize economically and socially desirable behavior, like historic structure rehabilitation, land preservation and film production.\n\n- Linking a US bank account\n\n![Image](https://user-images.githubusercontent.com/7217054/160020375-0e360e26-17f9-4856-8266-1e95b76efc7c.png)\n\nThirty-four of those states allow the producers of these credits to be incentivized even if they do not have enough state income to fully utilize the credits and/or need the cash flow to further expand the incentivized behavior.  \n\n![Image](https://user-images.githubusercontent.com/7217054/160020372-8190f4aa-81aa-4b0e-ae1b-d92eb031df5b.png)\n\nBlockchain Friendly State Breakdown\n\n![Image](https://user-images.githubusercontent.com/7217054/160020643-84313880-4e0b-4942-8b1a-7278eb7aa219.png)\n\n<https://www.investopedia.com/news/majority-us-states-are-still-acknowledge-cryptocurrencies/>\n",
    md_link:
      'https://raw.githubusercontent.com/shaurya-ATR940/Grants-Program_dummy/master/applications/Afloat.md',
    project_name: 'afloat tax infrastructure polkadot integration',
    status: 'complete',
    total_cost: {
      amount: '46200',
      currency: 'usd'
    },
    total_duration: '13 weeks',
    team_id: '9bb32676-b112-44d6-a83b-a04ef1d636f4',
    level: '2',
    legal_structure: {
      registered_address: '6118 saint andrews lane, richmond, va 23226',
      registered_legal_entity: 'afloat, inc.'
    },
    milestones: [
      '0f109114-1d67-4d2e-8950-0d0f368297dc',
      'af61d884-0160-46d8-9279-daede9326a95',
      '0f867a22-805d-4753-9877-b78a590a859e',
      '35e6f63f-173e-411c-a3e6-569f7f7c9c3d'
    ],
    totalMilestones: 4,
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ab6'
    },
    id: '891da133-0660-4951-b10e-313dff18431a',
    user_github_id: null,
    file_name: 'algocash.md',
    start_date: {
      $date: '2021-02-04T17:09:59.000Z'
    },
    html_url:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/AlgoCash.md',
    payment_details: 'dai address 0x3f91475fbd0c3d9c676d39af071691c1cf635f0b',
    md_content:
      "# AlgoCash\n\n> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.\n\n* **Team Name:** Reserve Labs\n* **Payment Address:** DAI Address: 0x3f91475fbd0c3d9c676d39af071691c1cf635f0b\n\n## Project Overview\n\n### Overview\n\nThe price volatility of cryptocurrencies is a major blocker for mass adoption. Their rapid change in fiat-denominated value causes payment values to vary even during settlement times, being highly inconvenient to merchants that handle them.\n\nStablecoins are cryptocurrencies with an exchange rate peg with existing fiat currencies or a fiat-related index, thereby drastically increasing their usefulness as a payment medium.\n\nAlthough there exists a wide variety of stablecoin mechanisms, some are with censorship risks or some are still suffered from price volatility.\n\nAlgo Cash specifically uses an algorithmic approach to manage the supply of tokens according to a predetermined logic. The algorithm is in charge of balancing stablecoin supply to fluctuating demand, ensuring that the token price remains relatively stable.\n\n### Integration\n\nAlgo Cash is implemented as a smart contract which can be deployed into ink! pallet of a parachain.\n\nFor trading and liquidity purpose, Algo Cash could be integrated with such protocols in Polkadot as Konomi and Zenlink.\n\n## Project Details\n\n### Tokens\n\n#### ALC - Algo Cash\n\nAlgo Cash tokens are designed to be used as a medium of exchange. The built-in stability mechanism expands and contracts their supply, maintaining their peg to the aUSD token.\n\n#### ALB - Algo Bonds\n\nAlgo Bonds are minted and redeemed to incentivize changes in the Algo Cash supply. Bonds are always on sale to Algo Cash holders, although purchases are expected to be made at a price below 1 Algo Cash. At any given time, holders are able to exchange their bonds to Algo Cash tokens in the Algo Cash Treasury. Upon redemption, they are able to convert 1 Algo Bond to 1 Algo Cash, earning them a premium on their previous bond purchases.\n\nBonds do not have expiration dates. All holders are able to convert their bonds to Algo Cash tokens, as long as the Treasury has a positive ALC balance.\n\n#### ALS - Algo Shares\n\nAlgo Shares loosely represent the value of the Algo Cash network. Increased demand for Algo Cash results in new Algo Cash tokens to be minted and distributed to Algo Share holders, provided that the Treasury is sufficiently full.\n\nHolders of Algo Share tokens can claim a pro-rata share of Algo Cash tokens accumulated to the Boardroom contract.\n\n### Pools\n\n#### Treasury\n\nThe Algo Cash Treasury exists to enable bond-to-cash redemptions. Bonds redeemed via the Treasury automatically returns the user an equal number of Algo Cash, provided that: 1) the oracle price of Algo Cash is above 1 aUSD, and 2) the Treasury contract has a positive balance of Algo Cash.\n\nDisallowing redemptions when the Algo Cash price is below 1 aUSD prevents bond holders from prematurely cutting their losses and creating unnecessary downward pressure on the price of ALC.\n\n#### Boardroom\n\nThe Boardroom allows Algo Share holders to claim excess Algo Cash minted by the protocol. Holders of Algo Shares can stake their Shares to the Boardroom contract, which by doing so, they can claim a pro-rata share of Algo Cash tokens assigned to the Boardroom.\n\n### Stabilization Mechanism\n\nThe Algo Cash protocol is designed to guarantee Algo Cash tokens to be exchanged at a value of a single US dollar, with the stabilizer (in-protocol stability mechanism) in charge of matching the supply of Algo Cash to their demand.\n\nEvery 24 hours, the time-weighted average of the ALC-aUSD exchange rate is read from the DEX Aggregator in Polkaot, which is then fed into the Algo Cash protocol to be referenced by its stability mechanism.\n\nThe stabilization mechanism is triggered whenever the price of Algo Cash is observed to be above / below (1+ε) aUSD, where ε is a parameter that defines the range of price stability for the ALC token. In inilization, ε is set to be 0.05.\n\n#### Contractionary Policy\n\nAt any point in time, Algo Bonds can be bought from the protocol in exchange for Algo Cash. Purchase of Bonds are performed at an algorithmically set price. With a Algo Cash oracle price of P aUSD, bonds are sold off at a price of P ALC (effective price being P^2 aUSD), promising bond holders a premium when redeemed. Purchased bonds can be converted to Algo Cash, insofar as the preconditions are met and the Treasury is not empty.\n\n#### Expansionary Policy\n\nIf the price of Algo Cash is observed to be higher than (1+ε) aUSDT, the system mints totalSupply *(oraclePrice-1) number of new Algo Cash tokens. The issued Algo Cash is either deposited to the Treasury or the Boardroom, depending on the Algo Cash balance of the Treasury.\n\nIf the Treasury has a balance above 1,000 Algo Cash, then it is logical to assume that either all bonds have been already redeemed, or no bond holder is currently willing to perform a redemption.Either way, this signals that the demand for bond redemption do not exist at this time, and thus the freshly minted Algo Cash is given to the Boardroom contract.\n\nHowever, if the Treasury has a balance of below 1,000 Algo Cash, then it is assumed that there will be additional demand for bond-to-cash redemption. Therefore, the issued Algo Cash is routed to the Treasury so that Bond holders can exercise redemptions.\n\n### Token Distribution\n\nInitial distribution of Algo Cash are done to those that deposit aUSD to the distribution contract. A total of 100,000 Algo Cash tokens are distributed to depositors, with 10,000 Cash tokens distributed per day. The amount of stablecoin deposits are limited to 20,000 tokens per account.\n\nAfterwards, a total of 1,500,000 Algo Shares are on crowd sale and the initial token price would be 40 aUSD. The crowd sale will last for 15 days. Afterwards, ALS will be listed on the DEXs with the same price as in the crowd sale, all funds raised in the crowd sale will be distributed to the DEX as buy orders and all Share tokens left will be distributed as sell orders.\n\nFurther distribution of Algo Shares are given to liquidity providers (e.g. ALS-DOT pair, ALS-aUSD pair, etc.) or ecosystem contributors. A total of 500,000 Algo Shares are distributed over a period of 1 year, and an equal amount of tokens are distributed per day.\n\nAdvantages\n\n1. Funds in the crowd sale will not be abused, but used to establish the liquidity market.\n\n2. Regardless of the funds raised, sufficient selling liquidity can be provided to facilitate large amounts of funds to enter the market.\n\n3. Compared to joint curve issuance: a fair start, avoiding scientists from rushing\n\n4. Compared to AMM 2 pool mining: inflation tokens are not required to pay liquidity rents, and tokens are distributed to investors instead of those who \"dig, sell and withdraw\".\n\n5. Compared to auctions: Crowd sale is compatible with auction functions, but it is not just a simple fundraising. After the crowd sale is over, a market with abundant liquidity will be established immediately. Even having not raise enough funds, a market with sufficient selling liquidity can still be established, which AMM cannot do.\n\n### Contract\n\n**cash - Minting and burning of the cash token**\n\nMints *amount* cash to the *recipient* account.\n\nBurns *amount* cash from the *account*.\n\n**bond - Minting and burning of the bond token**\n\nMints *amount* bond to the *recipient* account.\n\nBurns *amount* bond from the *account*.\n\n**share - Minting and burning of the share token**\n\nMints *amount* share to the *recipient* account.\n\nBurns *amount* share from the *account*.\n\n**Treasure - Bond purchase and redemptions**\n\nReturns the oracle price of Algo Cash denominated in aUST.\n\nMints *amount* Algo Bonds, in exchange for same *amount* Algo Cash burnt.\n\nMints *amount* Algo Cash, in exchange for *amount* Algo Bonds burnt.\n\nIf the oracle price of Algo Cash is above (1+ε) aUST, mints *((ALC Oracle Price) - 1) * cashSupply* number of Algo Cash to either the Boardroom contract or the Treasury contract.If the Treasury's balance is below 1,000 ALC, the allocation is given to the Treasury, else give it to the Boardroom.\n\n**Boardroom - Handling claims from the share**\n\nStakes *amount* Algo Shares to Boardroom sends all prior accrued dividends to *account*.\n\nWithdraws *amount* Algo Shares and all accrued dividends to *account*.\n\nReturns the amount of all dividends accrued by *account*.\n\nClaims all accrued dividends to *account*.\n\nWhen new cash is assigned to the Boardroom contract. Records the current block timestamp, the amount of new cash, and the current amount of total Shares staked.\n\n**oracle - Retrieving the exchange rate between Algo Cash and aUST**\n\nIf 24 hours has passed since update() was last successfully executed, updates the time-weighted average price of Algo Cash.\n\nReturns the amount of *output* tokens given in exchange for *input* number of *token* tokens ((Price of *token* token denominated in *output* tokens) * *input*).\n\n### Ecosystem Fit\n\nAcala, aUSD is generated in a collateral way.\n\nBasis Cash (on Ethereum), shares are initialized by 'AMM + 2nd pool' which would cause dramatic infaltion, forcing Yeild Farmers to sell their assets to the second market.\n\n## Team\n\n### Team members\n\n* Nick Hsu, Blockchain Expert and Team Leader\n* Gang Chan, Full Stack Developer \n* Gieno Miao, Crypto Expert and Blockchain Architect\n\n### Contact\n\n* **Contact Name:** Nick Hsu\n* **Contact Email:** nick_hsu@sina.com\n\n### Legal Structure\n\nNo legal Entity\n\n### Team's experience\n\nNick has 16 years of software development experience and 5 years working in Blochain area as developer and product owner.\n\nGang is now working as a freelancer. He is a full stack developer proficient in C++, Rust, React and Solidity. He has 3 years software development experience and 2 years smart contract development experience.\n\n### Team Code Repos\n\n* <https://github.com/ReserveLabs/AlgoCash>\n\n### Team LinkedIn Profiles\n\nno\n\n## Development Roadmap\n\n### Overview\n\n* **Total Estimated Duration:** 6 weeks\n* **Full-time equivalent (FTE):**  1.5\n* **Total Costs:** 5,000 DAI\n\n### Milestone 1 Example — Implement Substrate Modules\n\n* **Estimated Duration:** 7 weeks\n* **FTE:**  2\n* **Costs:** 5,000 DAI  \n\n| Number | Deliverable | Specification |\n| ------------- | ------------- | ------------- |\n| 0 | License | Apache 2.0 / MIT / Unlicense |\n| 1 | Documentation | Specification of the background, components and working mechanism|\n| 2 | Smart Contract | AlgoCash smart contract repo. The smart contract can be deployed to any substrate chain with ink! pallet.|\n| 3 | Tests |Unit Test and also we will test it on Canvas|\n| 4 | Docker | A docker image with a Substrate chain for PoC|\n\n## Future Plans\n\nShares token design for governance.\n\nWe will build a DEX with PMM (Proactive Market Maker) algorithm.\n\n## Community Engagement\n\nWe will reach DEX and Lending protocol communities to enlarge Algo Cash adoption.\n",
    md_link:
      'https://raw.githubusercontent.com/shaurya-ATR940/Grants-Program_dummy/master/applications/AlgoCash.md',
    project_name: 'algocash',
    status: 'complete',
    total_cost: {
      amount: '5000',
      currency: 'dai'
    },
    total_duration: '6 weeks',
    team_id: '5363f60e-70bf-4784-82e1-a7b9cb860af2',
    level: '1',
    legal_structure: {
      registered_address: '',
      registered_legal_entity: ''
    },
    milestones: ['6c44c320-d01a-4170-bbcc-56c55dc8ad8d'],
    totalMilestones: 1,
    __v: 0
  },
  {
    _id: {
      $oid: '64ccf06cbe6ae66a4ec44ab7'
    },
    id: '8d0a63b9-879b-4fe2-8de1-b44402812c2f',
    user_github_id: null,
    file_name: 'anchor.md',
    start_date: {
      $date: '2023-02-14T12:01:17.000Z'
    },
    html_url:
      'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/Anchor.md',
    payment_details: '13u5klgrt4n1smc78zxtyvedgp1u1lygaahtpftvcv6z1btr (usdt)',
    md_content:
      '# Anchor, On-chain Linked List pallet and Name Service\n\n- **Team Name:** Fuu\n- **Payment Address:** 13u5kLGrt4n1Smc78ZXtYVedgp1U1LyGAAHtPFtVcv6Z1BtR (USDT)\n- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1\n\n\n## Project Overview :page_facing_up:\n\n### Overview\n\n- Anchor is a on-chain linked list system base on substrate 3.0.0. It is used to support cApp ( Chain Application ) development. On another hand, Anchor can alse be treated as Name Service or on-chain key-value storage system.\n\n- Anchor is a isolated substrate pallet. It is currently used in the application of freeSaying. It can provide flexible data structure on the chain and handle complex logic without upgrading the substrate node itself.\nYou can access the [freeSaying ( Only applicable to mobile )](https://freesaying.net) demo to know well. Anchor network is the very important basic storage system. Anchor.js is a isolate JS library to access Anchor network, can read and write data easily.\nAnchor pallet is a part of EasyPolka, the relationship as follow :\n\n![easypolka.png](http://android.im/anchor/easypolka.png)\n\nQR to access to freesaying.net.\n![easypolka.png](http://android.im/anchor/qr.png)\n\n- With Anchor, you can use run a substate network just need a bit upgrade. Through the highly customizable data structure and the ability of cApp, the threshold of application development on the chain is greatly reduced. It means that new developers who even does not know blockchain well can build cApp just by Javascript and publish it nearly free.\n\n- As a web developer, I firmly believe in the future of blockchain technology, but when I turn to blockchain development, I encounter a huge threshold. It takes a lot of time to get familiar with both language and various concepts. At the same time, technology is still improving, and a stable development environment cannot be obtained. All of these prompted me to improve EasyPolka for my own development.\nSo far, only one person myself can develop complex cApp ( on-chain applications ). I believe that this can help other developers to build cApps more efficiently.\nWill try to apply the left part, it is a bit complex, I am working on regrouping them now. The image show the whole structure.\n\n![easypolka.png](http://android.im/anchor/easypolka_not.png)\n\n### Project Details\n\n- Anchor development itself has been done, and it is deployed here [check "wss://dev.metanchor.net" on polkadot.js.org](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdev.metanchor.net#/explorer). One cApp is deployed to test too, the URL is [https://freesaying.net](https://freesaying.net). This React project load the target Anchor "freeSaying" from dev.metanchor.net, then run the cApp which is a socail media application.\n\n- There are 4 methods and 2 stores to implement the on-chain linked list function in Anchor pallet.\n\n- Substrate 3.0.0 and Rust for Anchor pallet. Javascript for anchor.js.\n\n- Code here [https://github.com/ff13dfly/Anchor](https://github.com/ff13dfly/Anchor), the document is the next step.\n\n- Treat Anchor as Name Service, there is no available pallet can be use. Have checked here [Open Source Polkadot Stack](https://wiki.polkadot.network/docs/build-open-source).\n![easypolka.png](http://android.im/anchor/status.png)\n\n- The function of Anchor has been finalized and will not be further expanded on substrate side. The function of the current version is the final form.\n\n### Ecosystem Fit\n\n- An available Name Services on Substrate 3.0.0, and it is extended to a On-chain Linked List system.\n\n- Developers who have not yet used substrate/Polkadot. Developers who do not like Smart Contract way to develop application.\n\n- Developer can build application flexibly without understanding the whole blockchain system. I think this is attractive to many developers.\n\n- From the [Open Source Polkadot Stack](https://wiki.polkadot.network/docs/build-open-source), there are 4 Name Service pallets, 2 red ( can not compatible to substrate 3.0.0 ) and 2 yellow ( code not updated more than 2 months by checking github ).\n\n## Team :busts_in_silhouette:\n\n### Team members\n\n- Zhongqiang Fu, individual developer.\n\n### Contact\n\n- **Contact Name:** Zhongqiang Fu\n- **Contact Email:** ff13dfly@163.com\n- **Website:** https://github.com/ff13dfly/\n\n### Legal Structure\n\n- Individual\n\n### Team\'s experience\n\n- On substrate, Substrate with Anchor pallet has been build successful and run at [wss:dev.metanchor.net](wss:dev.metanchor.net). I have tried to load a three nodes network successful.\n\n### Team Code Repos\n\n- https://github.com/ff13dfly/\n- https://github.com/ff13dfly/Anchor\n\n### Team LinkedIn Profiles (if available)\n\n## Development Status :open_book:\n\n- Demo cApp [freeSaying](https://android.im/vManager/) is published now. The test network is available, you can access [wss:dev.metanchor.net](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdev.metanchor.net#/explorer). Anchor pallet functions have been developed, but not tested entirely.\n\n## Development Roadmap :nut_and_bolt:\n\n### Anchor pallet\n\n- There are 4 methods exposed. One for setting data, Three for trading anchor.\n  ![easypolka.png](http://android.im/anchor/methods.png)\n  1. setAnchor, set Anchor data method.\n\n    ```RUST\n    pub fn set_anchor(\n      origin: OriginFor<T>,   //default\n      key: Vec<u8>,           //Anchor name\n      raw: Vec<u8>,           //raw data to storage\n      protocol: Vec<u8>,      //data protocol, used to decide how to decode raw data\n      pre:T::BlockNumber      //the previous block number which storage anchor data\n    ) -> DispatchResult {\n      // code here.\n      Ok(())\n    }\n    ```\n\n  2. sellAnchor, sell your Anchor publish or to target account.\n\n    ```RUST\n    pub fn sell_anchor(\n      origin: OriginFor<T>,   //default\n      key: Vec<u8>,           //Anchor name\n      cost: u32,              //unit accuracy\n      target:<T::Lookup as StaticLookup>::Source  //target buyer SS58 address. If the same as owner, can be sold to anyone.\n    ) -> DispatchResult {\n      // code here.\n      Ok(())\n    }\n    ```\n\n  3. unsellAnchor, revoke Anchor sell status.\n\n  ```RUST\n    pub fn unsell_anchor(\n      origin: OriginFor<T>,   //default\n      key: Vec<u8>,           //Anchor name\n    ) -> DispatchResult {\n      // code here.\n      Ok(())\n    }\n  ```\n\n  4. buyAnchor, buy target Anchor which is on sell.\n\n  ```RUST\n    pub fn buy_anchor(\n      origin: OriginFor<T>,    //default\n      key: Vec<u8>,            //Anchor name\n    ) -> DispatchResult {\n      // code here.\n      Ok(())\n    }\n  ```\n\n- There are two Runtime Storage. One for the anchor data status, one for the on-sell list.\n  ![easypolka.png](http://android.im/anchor/storage.png)\n  ```RUST\n    // (T::AccountId,T::BlockNumber)\n    //  T::AccountId, the anchor owner ss58 address\n    //  T::BlockNumber, last block number when updated data successfully.\n    pub(super) type AnchorOwner<T: Config> = StorageMap<_, Twox64Concat, Vec<u8>, (T::AccountId,T::BlockNumber)>;\n\n    // (T::AccountId, u32,T::AccountId)\n    // T::AccountId, the anchor owner ss58 address\n    // u32, the sell price for the anchor\n    // T::AccountId, the target buyer. If the same as owner, it is free to buy.\n    pub(super) type SellList<T: Config> = StorageMap<_, Twox64Concat, Vec<u8>, (T::AccountId, u32,T::AccountId)>;\n  ```\n\n### anchor.js\n\n- exposed methods. Three parts : basic substrate functions, anchor data I/O functions, anchor exchange functions. It has been used in the demo freeSaying, but no isolated yet. And exchange part need to code this time.\nAnchor.js can help developer accessing Anchor network by this single JS.\n\n  ```JS\n    /*******************************/\n    /* substrate related functions */\n    /*******************************/\n\n    //link to target substrate node\n    exports.link=function(endpoint,callback){\n      /* return callback && callback(PolkadotJS.API) */\n    };\n\n    //load encry file to get pair\n    exports.load=function(file,password,callback){\n      /* return callback && callback(pair) */\n    };\n\n    //subcribe the latest block\n    exports.subcribe=function(callback){\n      /* return callback && callback(anchorDataList) */\n    };\n\n    //check account balance\n    exports.balance=function(ss58Address,callback){\n      /* return callback && callback(amount) */\n    },\n    \n    /***********************************/\n    /* Anchor pallet related functions */\n    /***********************************/\n\n    /* data part */\n    //get the latest anchor data\n    exports.latest=function(anchor,callback){\n      /* return callback && callback(formattedAnchorData) */\n    };\n\n    //get the anchor data on special block.\n    exports.target=function(anchor,block,callback){\n      /* return callback && callback(formattedAnchorData) */\n    };\n\n    //get the list data of anchor.\n    exports.history=function(anchor,callback,limit){\n      /* return callback && callback(listofAnchorsData) */\n    };\n\n    //set target Anchor data.\n    exports.write=function(pair,anchor,raw,protocol,callback){\n      /* return callback && callback(toChainProcessStatus) */\n    };\n\n    /* market part */\n    //set Anchor status to sell.\n    exports.sell=function(pair,anchor,cost,target,callback){\n      /* return callback && callback(true/false) */\n    };\n\n    //buy anchor on sell.\n    exports.buy=function(pair,anchor,callback){\n      /* return callback && callback(true/false) */\n    };\n\n    //revoke anchor from selling.\n    exports.unsell=function(pair,anchor,callback){\n      /* return callback && callback(true/false) */\n    };\n  ```\n\n### Overview\n\n- **Total Estimated Duration:** 1 month\n- **Full-Time Equivalent (FTE):**  1\n- **Total Costs:** 6,000 USDT\n\n### Milestone 1 — Anchor pallet testing & documents, anchor.js full function\n\n- **Estimated duration:** 1 month\n- **FTE:**  1\n- **Costs:** 6,000 USDT\n\n| Number | Deliverable | Specification |\n| -----: | ----------- | ------------- |\n| 0a. | License | Apache 2.0 / GPLv3 |\n| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |\n| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. On anchor.js, will supply demo to test. |\n| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. I am not so fimilar with Docker, that will take a bit long time. |\n| 0e. | Anchor pallet | Will fix if neccessary. Mainly testing this time. |\n| 0f. | anchor.js | A demo with all functions will be developed by React |\n\n## Future Plans\n\n- Anchor is the data storage part of EasyPolka, it is the most important component. Next, the whole EasyPolka will be open source. At present, it includes the following contents.\n\n| Order | Name | Demo | Github | introduction |\n| -----: | ----------- | ------------- | ------------- | ------------- |\n| 1 | Anchor | wss://dev.metanchor.net | [https://github.com/ff13dfly/Anchor](https://github.com/ff13dfly/Anchor) | Linked list on chian & Name service |\n| 2 | Saying | [https://freesay.net](https://freesay.net) | Not yet | Plinth for cApp |\n| 3 | cSaying | on block 2,220 | Not yet | FreeSaying cApp , pure JS app |\n| 4 | vGateway | [https://android.im/vGateway/](https://android.im/vGateway/) | Not yet | Gateway access to vServices |\n| 5 | vManager | [https://android.im/vManager/](https://android.im/vManager/) | Not yet | Management portal for vServices |\n| 6 | vHistory | No domain, node.js app | Not yet |Anchor cache vService |\n| 7 | vSaying | No domain, node.js app | Not yet] | FreeSaying comment vService |\n| 8 | vMarket | No domain, node.js app | Not yet | Free charge vService |\n| 9 | vMix | No domain, node.js app | Not yet | Front mixer vService |\n| 10 | vSocial | No domain, node.js app | Not yet | Fav & tread vService |\n\n![easypolka.png](http://android.im/anchor/easypolka_not.png)\n\n- The functions above, you can test on the cApp [freeSaying](https://freesaying.net).\nIt is not very stable to access Github here, so the left codes are on my private git server.\n\n- The whole EasyPolka framework works properly, but still so many details to fix and neccesary function to add.\n\n## Additional Information :heavy_plus_sign:\n\n**How did you hear about the Grants Program?** Web3 Foundation Website.\n\n- Demo cApp [freeSaying](https://android.im/vManager/) is published now. The test network is available, you can access [wss:dev.metanchor.net](wss:dev.metanchor.net).\n\n- I have tried twice to apply the Gant Application but not accepted.\n  Anchor, a key-value storage system for substate. Now, it is extended, and applying again, :-)\n  SimPolk, simulator of Polkadot.\n',
    md_link:
      'https://raw.githubusercontent.com/shaurya-ATR940/Grants-Program_dummy/master/applications/Anchor.md',
    project_name: 'anchor, on-chain linked list pallet and name service',
    status: 'complete',
    total_cost: {
      amount: '6000',
      currency: 'usdt'
    },
    total_duration: '1 month',
    team_id: '61044baa-a9f5-4681-9f6a-bec5e7d2e386',
    level: '1',
    legal_structure: {
      registered_address: '',
      registered_legal_entity: ''
    },
    milestones: ['2da5b626-e0c8-47dc-bf40-bf6f57ba8f2c'],
    totalMilestones: 1,
    __v: 0
  }
];

export const PROPOSALS: any = [
  {
    _id: {
      $oid: '650acc0a8ec20eb86cbeb891'
    },
    id: '4fcca352-e435-4d48-824c-e6fa73c1bc49',
    status: 'open',
    repos: ['https://github.com/artzero-io', 'https://github.com/InkWhale-net'],
    md_link:
      'https://raw.githubusercontent.com/w3f/Grants-Program/077cdb466ddbc1528d466851a311ee920196a574/applications/InkWhale_LaunchPad_using_Ink.md',
    team_name: 'artzero',
    file_name: 'inkwhale_launchpad_using_ink.md',
    created_at: '2023-09-19T03:10:52Z',
    updated_at: '2023-09-19T03:14:56Z',
    proposal_name: 'inkwhale - launchpad platform using ink! smart contract',
    pr_link: 'https://api.github.com/repos/w3f/Grants-Program/pulls/1982',
    extrected_proposal_data:
      '{"project":{"id":"0fcf4c34-4138-4d19-827e-bed5bbbfee51","user_github_id":null,"file_name":"inkwhale_launchpad_using_ink.md","md_content":"# InkWhale - LaunchPad Platform using Ink! Smart Contract\\n\\n- **Project Name:** InkWhale - LaunchPad Platform using Ink! Smart Contract\\n- **Team Name:** ArtZero\\n- **Payment Address:** 1scixS3ofLuBN8XEQQdSjMQaLtvvbcJiQAqpnaov8xopX78\\n- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2\\n\\n## Project Overview :page_facing_up:\\n\\nArtZero & InkWhale team is developing a decentralized LaunchPad using Ink! Smart Contract. All the work will be available for the public to reuse on Github. The project is being built and tested on Aleph Zero network but can be deployed on any parachains or Substrate-based blockchains that support Ink! such as Astar, Aleph Zero and 5ireChain. \\n\\n\\n### Overview\\n\\n### Project Details\\n\\nAfter successful Grant Delivery of ArtZero and InkWhale as well as successful launch of NFT Marketplace ArtZero. We would like to create more useful dapps for the ecosystem, not only for us to use but for the public to see how powerfull Ink! Smart Contract is. This decentralized LaunchPad is the first LaunchPad developed using Ink!\\n\\nThe LaunchPad will allow project owner to distribute standard PSP22 tokens to anyone who wants to participate in the project. Features include:\\n- Only token contract owner can create a new Project for existing PSP22 tokens.\\n- Full Project Information saved on-chain via IPFS such as: project name, description, social media, project images, project roadmap, project milestones, team, tokenomics and sale phases;\\n- Multiple Sale Phases with Vesting Plan, Public/Private Sale; Price is set for each public phase; Vesting Plan include Immediate Release Rate; Vesting Duration adn Vesting Release Period;\\n- Support Whitelist for each sale phase with seperate price and amount for each address. This feature can be integrated with KYC where there are laws and obligations to comply with.\\n\\n### Ecosystem Fit\\n\\nWe think that the launchpad will help the ecosystem grow faster because it helps project owners to: raising funds with minimal efforts and all transactions are secured and transparent which are vital for the public;\\n\\nAll work including Front-end; Back-end and Smart Contract work are available publicly which allow new Ink! developers to re-use the code and to learn quicker.\\n\\nWe believe in the future of Ink! Smart Contract and want to have your support to build this project because LaunchPad is an important element in every blockchain.\\n\\nWe plan to have external audit of the code in the future but the audit is out of scope in this proposal.\\n\\n## Team :busts_in_silhouette:\\n\\n### Team members\\n\\nMr. Brian Nguyen (founder, engineer)\\nThere are another 4 key members in the company including:\\nMrs. Phuong Hoang - CMO\\nMr. Frankie Kao - Art Director and team of 5 designers\\nMr. Long Nguyen - Full-stack developer\\nMr. Albert Tran - Smart Contract & Back-end Developer\\nMr. Tuan Vu - DevOp\\nMr. Thien Nguyen - Front-end Developer\\nMr. Nam Hoang - Blockchain Developer\\nMr. Tung Nguyen - Back-end and Blockchain Developer\\n\\nOther part-time testers and designers.\\n\\n### Contact\\n\\n- **Contact Name:** Brian Nguyen\\n- **Contact Email:** admin@artzero.io\\n- **Website:** https://inkwhale.net https://artzero.io\\n\\n### Legal Structure\\n\\n- **Registered Address:** 7th Floor, 37 Nguyen Son, Long Bien, Hanoi, Vietnam\\n- **Registered Legal Entity:** ArtZero Vietnam\\n\\n### Team\'s experience\\n\\nBrian Nguyen graduated from University of Nottingham with a 1st class degree in Computer and Electronics Engineering. Over the last 15 years, He has developed many data-driven applications. He also has deep interest in blockchain technology and development of decentralized apps on Ethereum, Binance Smart Chain, Tron, Solana\\nnetwork. He is the founder of ArtZero - the first NFT Marketplace & also 1st dApp on Aleph Zero network.\\n\\nFrankie Kao owns a design company and have been working in many projects on web design, graphic designs etc. He dedicated his resources to work with ArtZero.\\n\\nPhuong Hoang has been in sale and marketing industry for over a decade. She has been Sale and Marketing Manager/Director for many companies including: Honda Vietnam, Plex Cinama, Saga Media etc.\\n\\nAll of our developers have at least 5-10 years experience in software development.\\n\\n### Team Code Repos\\n\\n- https://github.com/artzero-io\\n- https://github.com/InkWhale-net\\n\\n### Team LinkedIn Profiles (if available)\\n\\n- https://www.linkedin.com/in/nad128668/\\n- http://linkedin.com/in/phuong-phoebe-hoang-4b5888148\\n- https://www.linkedin.com/in/tran-albert-469b6319a\\n\\n## Development Status :open_book:\\n\\nThe Platform is under development already with Front-end Design at:\\nhttps://www.figma.com/file/63xCCH71Oa8AfJpkK1wCO3/Ink-Whale?type=design&node-id=538-107&mode=design&t=jzPEaYJCUZLjUlDe-0\\n\\nSmart Contract Code:\\nhttps://github.com/InkWhale-net/contracts/tree/nam-dev/contracts\\n\\nBack end Code:\\nhttps://github.com/InkWhale-net/backend/tree/develop\\n\\n\\n## Development Roadmap :nut_and_bolt:\\n\\n\\n### Overview\\n\\n- **Total Estimated Duration:** 2-3 months\\n- **Full-Time Equivalent (FTE):**  5 FTE\\n- **Total Costs:** 20,000 USD\\n\\n### Milestone 1  — InkWhale - LaunchPad Platform using Ink! Smart Contract\\n* **Estimated Duration:** 2-3 months\\n* **Costs:** 20,000 USD\\n\\n\\n| Number | Deliverable | Specification |\\n| ------------- | ------------- | ------------- |\\n| 0a.    | License            | Apache License 2.0                                           |\\n| 0b.    | Documentation      | We will provide technical documents and user guides |\\n| 0c.    | Testing Guide      | We will provide Unit Test for the Smart Contract and instructions how to perform the test |\\n| 0d.    | Article/Tutorial   | We will write an article or tutorial that explains the work principle as part of the grant. |\\n| 1. | Smart Contract Development | We will create 3 main contracts: LaunchPad generator as factory contract to initializer LaunchPad Contract; LaunchPad contract which has all features listed in the Project Details and a general PSP22 token contract for testing purposes|\\n| 2. | Backend | We use nodejs and mongodb on AWS Services. The cronjob monitor update queue to make sure data in the database match with data on-chain; The API serves the frontend with following functions: interacting with IPFS network, get launchpad information, get token information, update launchpad information when needed |\\n| 3. | Frontend | We will implement the Figma design as in https://www.figma.com/file/63xCCH71Oa8AfJpkK1wCO3/Ink-Whale?type=design&node-id=538-107&mode=design&t=jzPEaYJCUZLjUlDe-0 for the launchpad which contains 11 pages include: Project List; Project Creation (5 sub-pages); Project Details for Project Owner; Project Details for Public; Edit LaunchPad Information; Edit Whitelist and Update Phases;|\\n\\n\\n## Future Plans\\n\\n\\n## Additional Information :heavy_plus_sign:\\n\\n**How did you hear about the Grants Program?** from Founder of SubWallet\\n","md_link":"https://raw.githubusercontent.com/w3f/Grants-Program/077cdb466ddbc1528d466851a311ee920196a574/applications/InkWhale_LaunchPad_using_Ink.md","project_name":"inkwhale - launchpad platform using ink! smart contract","status":null,"total_cost":{"amount":"20000","currency":"usd"},"total_duration":"2-3 months","team_id":"f2fc72a0-8e82-46b7-9570-ee8290a9415a","level":"2","html_url":"https://github.com/w3f/Grants-Program/blob/077cdb466ddbc1528d466851a311ee920196a574/applications/InkWhale_LaunchPad_using_Ink.md","legal_structure":{"registered_address":"7th floor, 37 nguyen son, long bien, hanoi, vietnam","registered_legal_entity":"artzero vietnam"},"totalMilestones":1,"milestones":[]},"team":{"id":"f2fc72a0-8e82-46b7-9570-ee8290a9415a","name":"artzero","members":["Mr. Brian Nguyen (founder, engineer)","There are another 4 key members in the company including:","Mrs. Phuong Hoang - CMO","Mr. Frankie Kao - Art Director and team of 5 designers","Mr. Long Nguyen - Full-stack developer","Mr. Albert Tran - Smart Contract & Back-end Developer","Mr. Tuan Vu - DevOp","Mr. Thien Nguyen - Front-end Developer","Mr. Nam Hoang - Blockchain Developer","Mr. Tung Nguyen - Back-end and Blockchain Developer","Other part-time testers and designers."],"projects":[{"projectId":"0fcf4c34-4138-4d19-827e-bed5bbbfee51","status":null}]},"milestones":[{"estimated duration":"2-3 months","costs":"20,000 usd"}],"proposal":{"id":"4fcca352-e435-4d48-824c-e6fa73c1bc49","repos":["https://github.com/artzero-io","https://github.com/InkWhale-net"],"md_link":"https://raw.githubusercontent.com/w3f/Grants-Program/077cdb466ddbc1528d466851a311ee920196a574/applications/InkWhale_LaunchPad_using_Ink.md","proposal_name":"inkwhale - launchpad platform using ink! smart contract","team_name":"artzero"}}',
    assignees: [],
    user_github_details: [
      {
        git_user_id: '88643486',
        git_user_name: 'nad128668',
        git_avatar_url: 'https://avatars.githubusercontent.com/u/88643486?v=4',
        _id: {
          $oid: '650acc0a8ec20eb86cbeb892'
        }
      }
    ],
    reviewers: [],
    __v: 0
  },
  {
    _id: {
      $oid: '650acc0a8ec20eb86cbeb893'
    },
    id: 'aac065b1-298f-46c6-b25a-d48b72daf5fd',
    status: 'open',
    repos: [
      'https://github.com/CoinFabrik',
      'https://github.com/CoinFabrik/on-ink-integration-tests',
      'https://github.com/CoinFabrik/scout',
      'https://github.com/CoinFabrik/web3-grant'
    ],
    md_link:
      'https://raw.githubusercontent.com/w3f/Grants-Program/5cbb6e82ca11d49e684f077c4b0498665f6863bb/applications/CoinFabrik_On_Ink_Integration_Tests_2.md',
    team_name: 'coinfabrik (nektra s.a)',
    file_name: 'coinfabrik_on_ink_integration_tests_2.md',
    created_at: '2023-09-18T14:22:41Z',
    updated_at: '2023-09-20T06:23:59Z',
    proposal_name: 'coinfabrik on ink integration tests 2',
    pr_link: 'https://api.github.com/repos/w3f/Grants-Program/pulls/1980',
    extrected_proposal_data:
      '{"project":{"id":"ceb57b60-13f1-48c0-84ad-1ebe35badb11","user_github_id":null,"file_name":"coinfabrik_on_ink_integration_tests_2.md","payment_details":"0xf488039ede6b38d7689fdcc6a9fc2dd0ef39d54e (usdc)","md_content":"# CoinFabrik On Ink Integration Tests 2\\n- **Team Name:** CoinFabrik (Nektra S.A)\\n- **Payment Address:** 0xf488039EDe6B38D7689fDCC6A9FC2dd0EF39D54e (USDC)\\n- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3\\n\\n## Project Overview :page_facing_up:\\n\\n### Overview\\n\\nWe have discovered that integration tests for ink! contracts lack some of the functionalities, or present implementation differences, when compared to E2E testing. \\n\\nIntegration tests run significantly faster than E2E (end-to-end) tests. If a full range of functionalities were provided, it could reduce testing and QA times. \\n\\nOur intention is to `flatten the anvil` of ink! integration testing. With a properly flattened anvil, quality tools can be built.\\n\\n\\n### Project Details\\n\\nWe have conducted a comprehensive analysis to identify any missing functionalities in integration tests and implementation differences with E2E tests, and to propose and develop new testing features based on our findings. This analysis was carried as part of a previous grant ([link](https://github.com/w3f/Grant-Milestone-Delivery/pull/998)).\\n\\nWith this new grant, our objective is to implement our findings. Specifically, we aim to address functions in integration testing that have missing implementations or show differences when compared to e2e tests. We will add our contributions into the [ink! project repository](https://github.com/paritytech/ink ) following existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md).\\n\\n### Ecosystem Fit\\n\\nHaving a comprehensive set of functionalities available for integration tests would bring numerous benefits to the entire community, including improved reliability, code quality and maturity, and faster feedback loops.\\n\\nIntegration tests are useful during their development and they are quicker than E2E tests. We learned this while working on fuzzing detection techniques during the [Proof of Concept of Scout](https://github.com/CoinFabrik/web3-grant), which we performed in collaboration with [researchers from the University of Buenos Aires](https://lafhis.dc.uba.ar/home). We believe that having a complete set of functionalities for integration tests would be useful for other teams working in the development of ink! smart contracts.\\n\\n## Team :busts_in_silhouette:\\n\\n### Team members\\n\\n- Ariel Wassbein, Head of Research.\\n- Agustin Aon, Technical Lead.\\n- Valeria Caracciolo, Business Development.\\n- CoinFabrik\'s development and QA teams.\\n\\n### Contact\\n\\n- **Contact Name:** Valeria Caracciolo\\n- **Contact Email:** valeria.caracciolo@coinfabrik.com\\n- **Website:** https://www.coinfabrik.com/ \\n\\n### Legal Structure\\n\\n- **Registered Address:** Dr. Emilio Ravignani 2394, C1425 CABA, Argentina.\\n- **Registered Legal Entity:** Nektra S.A.\\n\\n### Team\'s experience\\n\\nWe are a research and development company specialized in Web3, with a strong background in cybersecurity. Founded in 2014, we have worked on over 200 blockchain-related projects, EVM based and also for Solana, Algorand, and Polkadot. Beyond development, we offer security audits through a dedicated in-house team of senior cybersecurity professionals, currently working on code in Substrate, Solidity, Clarity, Rust, and TEAL.\\n\\nOur team has an academic background in computer science and mathematics, with work experience focused on cybersecurity and software development, including academic publications, patents turned into products, and conference presentations. Furthermore, we have an ongoing collaboration on knowledge transfer and open-source projects with the University of Buenos Aires.\\n\\nAs well, CoinFabrik has been providing Quality Assurance as a service to development teams, accumulating valuable expertise in the field for a considerable period of time. Our clients highly appreciate this service, and as a result, we are eager to expand our capabilities to the ink! ecosystem.\\n\\n\\n### Team Code Repos\\n\\n- https://github.com/CoinFabrik \\n- https://github.com/CoinFabrik/on-ink-integration-tests \\n- https://github.com/CoinFabrik/scout  \\n- https://github.com/CoinFabrik/web3-grant \\n\\n### Team LinkedIn Profiles (if available)\\n\\n- https://www.linkedin.com/in/arielwaissbein/\\n- https://www.linkedin.com/in/agustin-aon/ \\n- https://www.linkedin.com/in/valeriacaracciolo/   \\n\\n\\n## Development Status :open_book:\\n\\nWe have identified 24 functions exposed for their usage in integration and E2E tests in the file [env_access.rs](https://github.com/paritytech/ink/blob/master/crates/ink/src/env_access.rs) of the ink! repository.  Of these 24 functions, we determined that there are 9 functions to work on with explicit plans, and 13 functions for which there might be implementation differences that remain to be analyzed.  Two functions were deemed unfeasible for their implementation in the integration testing environment. \\n\\n\\n**Table 1: Status of functions exposed in integration and e2e testing environments.**\\n| Issue Number | Function    \\t| Implemented Integration Tests | Integration E2E Tests | Status                                                                                     \\t|\\n|--------------|-----------------------------|-------------------------------|------------------------|------------------------------------------------------------------------------------------------|\\n| 1        \\t| default_accounts()        \\t| Yes                       \\t| Yes                \\t| Implementation Difference.                                                                 \\t|\\n| 2        \\t| set_contract_storage()  \\t| Yes                       \\t| Yes                \\t| Missing limitation on Integration Testing.                                                  \\t|\\n| 3        \\t| invoke_contract_delegate()  | No                        \\t| Yes                \\t| Missing Function Implementation on Integration Testing.                                    \\t|\\n| 4        \\t| invoke_contract()       \\t| No                        \\t| Yes                \\t| Missing Function Implementation on Integration Testing                                     \\t|\\n| 5        \\t| gas_left()              \\t| No                        \\t| Yes                \\t| Missing Function Implementation on Integration Testing. Unfeasible Implementation.         \\t|\\n| 6        \\t| set_code_hash()         \\t| No                        \\t| Yes                \\t| Missing Function Implementation on Integration Testing.                                     \\t|\\n| 7        \\t| instantiate_contract()  \\t| No                        \\t| Yes                \\t| Missing Function Implementation on Integration Testing.                                     \\t|\\n| 8        \\t| caller_is_origin()      \\t| No                        \\t| Yes                \\t| Missing Function Implementation on Integration Testing.                                     \\t|\\n| 9        \\t| code_hash()             \\t| No                        \\t| Yes                \\t| Missing Function Implementation on Integration Testing.                                     \\t|\\n| 10       \\t| own_code_hash()         \\t| No                        \\t| Yes                \\t| Missing Function Implementation on Integration Testing.                                     \\t|\\n| 11       \\t| call_runtime()          \\t| No                        \\t| Yes                \\t| Missing Function Implementation on Integration Testing. Unfeasible Implementation.         \\t|\\n| 12       \\t| caller()                \\t| Yes                       \\t| Yes                \\t| Pending Analysis for Corrections in Implementation Differences.                            \\t|\\n| 13       \\t| transferred_value()     \\t| Yes                       \\t| Yes                \\t| Pending Analysis for Corrections in Implementation Differences.                            \\t|\\n| 14       \\t| weight_to_fee()         \\t| Yes                       \\t| Yes                \\t| Pending Analysis for Corrections in Implementation Differences.                            \\t|\\n| 15       \\t| block_timestamp()       \\t| Yes                       \\t| Yes                \\t| Pending Analysis for Corrections in Implementation Differences.                            \\t|\\n| 16       \\t| account_id()            \\t| Yes                       \\t| Yes                \\t| Pending Analysis for Corrections in Implementation Differences.                            \\t|\\n| 17       \\t| balance()               \\t| Yes                       \\t| Yes                \\t| Pending Analysis for Corrections in Implementation Differences.                            \\t|\\n| 18       \\t| block_number()          \\t| Yes                       \\t| Yes                \\t| Pending Analysis for Corrections in Implementation Differences.                            \\t|\\n| 19       \\t| minimum_balance()       \\t| Yes                       \\t| Yes                \\t| Pending Analysis for Corrections in Implementation Differences.                            \\t|\\n| 20       \\t| terminate_contract()    \\t| Yes                       \\t| Yes                \\t| Pending Analysis for Corrections in Implementation Differences.                            \\t|\\n| 21       \\t| transfer()              \\t| Yes                       \\t| Yes                \\t| Pending Analysis for Corrections in Implementation Differences.                            \\t|\\n| 22       \\t| hash_bytes()            \\t| Yes                       \\t| Yes                \\t| Pending Analysis for Corrections in Implementation Differences.                            \\t|\\n| 23       \\t| hash_encoded()          \\t| Yes                       \\t| Yes                \\t| Pending Analysis for Corrections in Implementation Differences.                            \\t|\\n| 24       \\t| ecdsa_recover()         \\t| Yes                       \\t| Yes                \\t| Pending Analysis for Corrections in Implementation Differences.                            \\t|\\n\\nFor these two sets of functions, with explicit implementation plans and pending analysis, the following work remains to be performed.\\n- The implementation and correction of implementation differences of the 9 functions with explicit plans. These are the functions with issue numbers 1, 2, 3, 4, 6, 7, 8, 9, 10.\\n- An analysis of the remaining 13 functions, which are implemented both for integration and E2E tests, in order to first estimate and then correct implementation differences (if any). These correspond to functions issue numbers 12 through 24.\\n- QA: Adding tests to integrate the functions we add or modify to the [ink! project repository](https://github.com/paritytech/ink)  following existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md).\\n- Report Describing our Contribution.\\n\\nConsidering the dependency of several functions on the implementation of `instantiate_contract()`,  we propose to split the work above into two milestones. Before implementing `instantiate_contract()`, we will also make modifications to the way accounts work in integration tests in order for them to be consistent with behavior in e2e. All these implementations or modifications will be pushed into the [ink! project repository](https://github.com/paritytech/ink ) following existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md).\\n\\n## Development Roadmap :nut_and_bolt:\\n\\n### Overview\\n\\n- **Total Estimated Duration:** 8 weeks\\n- **Full-Time Equivalent (FTE):**  4 FTE\\n(0.50 Project Manager,\\n0.50 Tech Lead,\\n1 Full time Sr Rust Developer,\\n1 Full Time SemiSr Rust Developer,\\n1 Full Time QA Specialist)\\n- **Total Costs:**  60,000 USD\\n\\n### Milestone 1: Execution and Further Analysis\\n- **Estimated duration:** 4 weeks\\n- **FTE:**  4\\n- **Costs:** 30,000 USD\\n\\n| Number | Deliverable | Specification |\\n| ----- | ----------- | ------------- |\\n| 0a. | License | MIT\\n| 0b. | Documentation | We will write a comprehensive report that compares the functionalities of integration tests and E2E (End-to-End) tests. This report will focus on the functions to be implemented/corrected in this milestone, corresponding to issues 1-default_accounts(), 2-set_contract_storage() and 3-instantiate_contract().<br><br>Documentation and test cases will be provided for the 13 functions with remaining analysis. If implementation differences are found in these functions, an estimate for their correction and an implementation idea will also be provided in our report.<br><br>If applicable, we will suggest additional tests outside of the scope of this milestone. Particularly, for functions declared outside of the env_access.rs file, but that could be related to integration or e2e testing.\\n| 0c. | Testing and Testing Guide | The newly developed functionalities will be documented and tested following existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md). A testing guide will be included. \\n| 0d. | Docker | Does not apply at this stage.\\n| 0e. | Article | We will publish an updated report summary in our blog at https://blog.coinfabrik.com/.\\n **1** | Develop | We will develop the missing functionalities or correct implementation differences for functions 1-default_accounts(), 2-set_contract_storage() and 3-instantiate_contract(). All these implementations or modifications will be pushed into the [ink! project repository](https://github.com/paritytech/ink) following existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md).\\n **2** | Review and Estimate | We will review the remaining 13 unanalysed functions, which are implemented both for integration and e2e tests. For these functions we will provide documentation, a test case and an implementation estimation if applicable. These correspond to functions issue numbers 12 through 24.\\n **3** | Quality Assurance | We will adhere to existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md) and add necessary tests to integrate the new implemented or corrected functions to the  [ink! project repository](https://github.com/paritytech/ink). \\n\\n### Milestone 2: Execution\\n- **Estimated duration:** 4 weeks\\n- **FTE:** 4\\n- **Costs:** 30,000 USD\\n\\n| Number | Deliverable | Specification |\\n| ----- | ----------- | ------------- |\\n| 0a. | License | MIT\\n| 0b. | Documentation | We will write a comprehensive report that compares the functionalities of integration tests and E2E (End-to-End) tests. This report will focus on the the functions to be implemented in this milestone, corresponding to issues 4-code_hash(), 6-own_code_hash(), 7-invoke_contract(), 8-invoke_contract_delegate(), 9-caller_is_origin(), 10-set_code_hash().<br><br>Our report will also document the implementation of any missing functionalities, or correct implementation differences, for the 13 functions with issues 12 through 24. For this group, we will document any additional work that was required in order to ensure consistency between integration and e2e tests.<br><br>If applicable, we will suggest additional tests outside of the scope of this milestone. Particularly, for functions declared outside of the env_access.rs file, but that could be related to integration or e2e testing.\\n| 0c. | Testing and Testing Guide | The newly developed functionalities will be documented and tested following existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md). A testing guide will be included. \\n| 0d. | Docker | Does not apply at this stage.\\n| 0e. | Article | We will publish an updated report summary in our blog at https://blog.coinfabrik.com/.\\n **1** | Development | We will implement the missing functionalities or resolve implementation differences for function issues 4-code_hash(), 6-own_code_hash(), 7-invoke_contract(), 8-invoke_contract_delegate(), 9-caller_is_origin() and 10-set_code_hash).<br><br>We will implement any missing functionalities, or correct implementation differences, for the 13 functions with issues 12 through 24. For this group, we will document any additional work required in order to ensure consistency between integration and e2e tests.<br><br>All these implementations or modifications will be pushed into the [ink! project repository](https://github.com/paritytech/ink)  following existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md) .\\n**2** | Quality Assurance| We will adhere to existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md) and add necessary tests to integrate the new implemented or corrected functions to the  [ink! project repository](https://github.com/paritytech/ink). \\n\\n\\n## Future Plans\\n\\nWe have two projects in mind:\\n\\n- Research and develop an advanced testing automation solution for ink! smart contracts.\\n- Improve our open source bug-detection tool Scout (https://coinfabrik.github.io/scout/ )\\n   \\n## Referral Program (optional) :moneybag: \\n\\n## Additional Information :heavy_plus_sign:\\n\\n**How did you hear about the Grants Program?** Richard Casey from Parity brought this program to our attention, and we have already successfully delivered two applications as a result.\\n\\nDuring our inquiries for this application, we briefly consulted Sam Ruberti from the ink! Team and David Hawig from the Web3 Foundation. Their encouragement motivated us to proceed with this presentation.\\n\\n","md_link":"https://raw.githubusercontent.com/w3f/Grants-Program/5cbb6e82ca11d49e684f077c4b0498665f6863bb/applications/CoinFabrik_On_Ink_Integration_Tests_2.md","project_name":"coinfabrik on ink integration tests 2","status":null,"total_cost":{"currency":""},"total_duration":"8 weeks","team_id":"5fde1894-8e30-40ef-9ac6-0a13f48537a6","level":"3","html_url":"https://github.com/w3f/Grants-Program/blob/5cbb6e82ca11d49e684f077c4b0498665f6863bb/applications/CoinFabrik_On_Ink_Integration_Tests_2.md","legal_structure":{"registered_address":"dr. emilio ravignani 2394, c1425 caba, argentina.","registered_legal_entity":"nektra s.a."},"totalMilestones":0,"milestones":[]},"team":{"id":"5fde1894-8e30-40ef-9ac6-0a13f48537a6","name":"coinfabrik (nektra s.a)","members":["Ariel Wassbein, Head of Research.","Agustin Aon, Technical Lead.","Valeria Caracciolo, Business Development.","CoinFabrik\'s development and QA teams."],"projects":[{"projectId":"ceb57b60-13f1-48c0-84ad-1ebe35badb11","status":null}]},"milestones":[],"proposal":{"id":"aac065b1-298f-46c6-b25a-d48b72daf5fd","repos":["https://github.com/CoinFabrik","https://github.com/CoinFabrik/on-ink-integration-tests","https://github.com/CoinFabrik/scout","https://github.com/CoinFabrik/web3-grant"],"md_link":"https://raw.githubusercontent.com/w3f/Grants-Program/5cbb6e82ca11d49e684f077c4b0498665f6863bb/applications/CoinFabrik_On_Ink_Integration_Tests_2.md","proposal_name":"coinfabrik on ink integration tests 2","team_name":"coinfabrik (nektra s.a)"}}',
    assignees: [
      {
        git_user_id: '142136841',
        git_user_name: 'nikw3f',
        git_avatar_url: 'https://avatars.githubusercontent.com/u/142136841?v=4',
        _id: {
          $oid: '650acc0a8ec20eb86cbeb894'
        }
      }
    ],
    user_github_details: [
      {
        git_user_id: '71491710',
        git_user_name: 'valeriacaracciolo',
        git_avatar_url: 'https://avatars.githubusercontent.com/u/71491710?v=4',
        _id: {
          $oid: '650acc0a8ec20eb86cbeb895'
        }
      }
    ],
    reviewers: [],
    __v: 0
  },
  {
    _id: {
      $oid: '650acc0a8ec20eb86cbeb896'
    },
    id: '94ee321b-6f73-44d9-9774-de1acf5f1967',
    status: 'open',
    repos: [],
    md_link:
      'https://raw.githubusercontent.com/w3f/Grants-Program/cf3a1e96e6e3a05f52db3570a42c8cf1449f62e9/applications/Claps.md',
    team_name:
      'taiwan research-based biopharmaceutical manufacturers association',
    file_name: 'claps.md',
    created_at: '2023-09-18T12:25:29Z',
    updated_at: '2023-09-18T21:27:36Z',
    proposal_name: 'claps health',
    pr_link: 'https://api.github.com/repos/w3f/Grants-Program/pulls/1978',
    extrected_proposal_data:
      '{"project":{"id":"320cbb77-5fdc-4edf-b198-1f551e9b3cf2","user_github_id":null,"file_name":"claps.md","payment_details":"0x39d3e0c7aacfbca133f08cfb153b4888fd36ba9b (dai)","md_content":"# Claps Health\\n\\n- **Team Name:** Taiwan Research-based Biopharmaceutical Manufacturers Association\\n- **Payment Address:** 0x39D3E0c7AAcfbCa133f08cfb153B4888fd36bA9B (DAI)\\n- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2\\n\\n## Overview\\n\\n### Make self-care a fun game with Claps\\nClaps is the mobile app that integrates gaming with personal health tracking can be a fun and engaging way to encourage users to track their health on a daily basis and make healthy lifestyle choices. The app could allow users to play games and record the results as a health diary, and reward them with incentives and rewards for completing diagnostic tests or answering questionnaires such as mood tracking.\\n\\nClaps defines itself as a \\"gamified health tracking app\\" that uses gaming elements to motivate users to track their health and make healthy lifestyle choices. By integrating with artificial intelligence (AI) into a gamified health tracking app to provide a more personalized and interactive user experience.\\n\\nThe Claps AI is designed to support health practitioners in tracking patients\' data on a daily basis. The AI algorithms analyze patients\' health information and provide insights and recommendations to assist health practitioners in delivering personalized care to their patients. This can improve patient outcomes and help practitioners provide the most effective and efficient care.\\n\\nClaps is designed to be engaging and enjoyable to use, and could provide users with feedback and support to help them achieve their health goals. It could be a useful tool for promoting health and well-being, and could be particularly appealing to users who enjoy gaming and are looking for a more interactive and engaging way to track their health.\\n\\nBy using Substrate technology to store and manage data, facilitate data sharing, dapps contracts, and create and manage digital assets such as NFT with patient’s data. In the long-term, patients could potentially benefit from blockchain including in the areas of insurance and financial support. By leveraging the transparency, security, and efficiency of blockchain technology, patients could be better equipped to access the care and support they need.\\n\\nTaiwan Research-based Biopharmaceutical Manufacturers Association (TRPMA) is jointly established by 28 biopharmaceutical manufacturers and developers and 19 regenerative medicine companies based in Taiwan. This proposal is proposed by Jacob Lee, director of the digital health team at TRPMA. Jacob Lee is the co-designer of phrOS(Personal Health Records Operating System), a Ethereum private blockchain and IPFS Cluster based SaaS at Medical Center Hospital in 2017.\\n\\n## Project Details\\n\\n### Architecture\\n![claps_health_diagam](https://user-images.githubusercontent.com/14127551/218294412-3f0c2a9e-774a-49f0-b4c0-67e8ee6cb896.png)\\n\\n## Claps App Use Case\\n\\n### Patients\\n\\nUse the app to track their mood on a daily basis\\nReceive rewards by reporting their mood or blood pressure, or by completing other activities such as questionnaires. By providing these proof of work to the Claps dapps(Claps DAO).\\nView personalized health education content provided by health practitioners\\nShare their mood tracking data with their healthcare provider for review and analysis\\n\\n### Pharmaceutical Company\\n\\nUse the data collected by the app to inform their product development and marketing strategies\\nProvide funding to health practitioners to produce health education content for the app\\nUse the app as a platform to promote their products and services to patients\\n\\n### Health Practitioners\\n\\nUse the app to provide personalized health education content to patients\\nUse the data collected by the app to inform treatment decisions and track patient progress\\nReceive funding from pharmaceutical companies to produce health education content for the app\\n\\n### AI Assistant\\n\\nCollect and analyze data from patients\' mood tracking\\nProvide personalized recommendations and education content to patients based on their data\\nFacilitate communication and collaboration between patients, health practitioners, and pharmaceutical companies.\\n\\n## Solutions\\n### Gamefield Mood Tracking\\n\\nBy gamifying the experience through a health diary design, aims to break through the challenge of collecting mental health real-world data. The app provides a challenge card and a way for users to set personal goals, track progress, and receive rewards for their efforts. This approach makes the experience more engaging, encouraging patients to stick with their tracking habits and provide more accurate data. The personal goal-setting feature also caters to a wide range of needs and preferences, making the app more accessible and appealing to a broad audience.\\n\\n### Health Practitioners AI Assistant\\n\\nAI can help health practitioners in various ways by analyzing patient data and providing actionable insights to improve patient care. The use of AI can save time and improve the efficiency of health practitioners by automating routine tasks and allowing them to focus on more complex and critical tasks. AI-powered alerts can help practitioners detect potential issues earlier and provide more proactive care. By providing tailored recommendations based on individual patient data, AI can also help practitioners make more informed decisions and provide personalized care.\\n\\n### Omni-channel\\n\\nThis allows pharmaceutical companies to track and analyze the behavior and engagement of healthcare practitioners, patients, and other stakeholders, and make data-driven decisions about their marketing and communication strategies. These solutions can help pharmaceutical companies to make data-driven decisions about their marketing and communication strategies, which can help improve patient outcomes and the quality of care.\\n\\n### Web3 Technology\\n\\nWeb3 technologies can give individuals more control over their personal health records, as they can choose who has access to their data and when it is shared. This can help to enhance privacy and ensure that personal health information is used appropriately.\\n\\n\\n## Our Goals\\nImprove the quality of care and outcomes for patients.\\n\\n- Chronic disease awareness and prevention\\n- Maternal and infant health\\n- Mental and behavioral health\\n- Nutrition, exercise and obesity prevention\\n- Alcohol, tobacco use and substance abuse\\n\\nClaps enable patients to self-report, self-test, and access health education, and that incorporate AI-based features, can be a useful tool for improving the quality of care and outcomes for patients. By providing patients with the tools and support they need to manage their own health, these apps can help to empower patients and to improve the effectiveness of healthcare delivery.\\n\\n## Technology\\n\\n### Substrate Blockchain\\n\\nBy using Substrate blockchain technology to store and manage data, facilitate data sharing, dapps contracts, and create and manage digital assets with patient’s data. Leveraging Substrate blockchain technology for healthcare can offer significant benefits for patients and healthcare industry, providing them with enhanced privacy protection and better data consent management. By taking control of their own data, patients can access the care and support they need more efficiently and securely.\\n\\n### Self-Sovereign Identity (SSI)\\n\\nSelf-Sovereign Identity (SSI) is a decentralized digital identity model that puts individuals in control of their personal information and how it is used. This approach to identity provides users with more privacy and control over their personal information, and helps to prevent data breaches and misuse of sensitive information.\\n\\n### Zero-knowledge proof\\n\\nThe zero-knowledge proof is part of SSI, this means that a user can prove their identity or access rights to a service without revealing any sensitive personal information. This helps to protect the privacy of the user and reduce the risk of data breaches, while still enabling secure and reliable authentication.\\n![zkproof](https://user-images.githubusercontent.com/14127551/218294803-fefcbb47-9be2-418a-a595-424302e838bb.png)\\n\\n### GPT-3 AI model\\n\\nGPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art language processing artificial intelligence developed by OpenAI. The GPT-3 chatbots are designed to interact with patients on a daily basis to support and enhance the continued care work of health practitioners. It\'s always monitored by health practitioners to ensure the accuracy and relevance of their responses.\\n\\n## Ecosystem Fit\\n\\nThe pharmaceutical companies in this ecosystem can provide information to doctors, doctors provide consultation and health education to patients, and patients provide self-health tracking to doctors, could potentially be an effective way to improve the quality and accessibility of healthcare. In this model, the pharmaceutical company would be responsible for providing relevant and accurate information to doctors, who would then use this information to provide consultation and health education to patients. Patients would be responsible for tracking their own health and providing this information to doctors, which could help to inform treatment and care decisions.\\n\\n## Team :busts_in_silhouette:\\n\\n### Team members\\n\\n- Jacob Lee, Team Lead\\n- Brady Liu, Project Tech Lead\\n- Dr. Nicky Liu, Project Manager\\n- Carol Cheng, Regulation and compliance\\n\\n### Contact\\n\\n- **Contact Name:** Jacob Lee\\n- **Contact Email:** jacoblee@dtco.co\\n- **Website:** https://trpma.org.tw/\\n\\n### Legal Structure\\n\\n- **Registered Address:** 1F, No 465-1, Sec. 6, Chung-hsiao E. Rd., Nan-kang Dist., Taipei City 11557, ROC TAIWAN\\n\\n- **Registered Legal Entity:** TAIWAN RESEARCH-BASED BIOPHARMACEUTICAL MANUFACTURERS ASSOCIATION\\n\\n### Team\'s experience\\n\\nTaiwan Research-based Biopharmaceutical Manufacturers Association (TRPMA) is jointly established by 28 biopharmaceutical manufacturers and developers and 19 regenerative medicine companies based in Taiwan. This proposal is proposed by Jacob Lee, director of the digital health team at TRPMA. Jacob Lee is the co-designer of phrOS(Personal Health Records Operating System), a Ethereum private blockchain and IPFS Cluster based SaaS at Medical Center Hospital in 2017. The Digital Health Team at TRPMA has also supported the Taiwan government by developing a regenerative medicine management system from 2020-2023, and actively working on a Covid-19 project with a Dublin study team since 2021.\\n\\n### Team Code Repos\\n\\nClaps Health\\nhttps://github.com/Claps-Health/\\n\\n\\n- https://github.com/jacobleegithub/\\n- https://github.com/bradyliu-dtco/\\n\\n### Team LinkedIn Profiles (if available)\\n\\n- https://www.linkedin.com/in/jacob-lee-aa435916/\\n- https://www.linkedin.com/in/brady-liu-734a27106/\\n- https://www.linkedin.com/in/nicky-lu-449b02131/\\n\\n\\n## Development Status :open_book:\\nNew project\\n\\n## Development Roadmap :nut_and_bolt:\\n\\n### Amendment - Timeline Extension (Sep, 18 2023)\\n\\nDue to unforeseen challenges and to ensure the quality of our deliverables, we are proposing an extension to the project timeline. \\n\\nOriginal Estimated End Date: *End of the 4.5 months from April 2023*  \\nRevised Estimated End Date: **December 2023**\\n\\n**Reasons for Extension:**  \\n- *Thank you for supporting Claps Health and granting us the opportunity to bring this vision to life. Since initiating the project in April 2023 (approved by middle of March), we\'ve faced unforeseen challenges in the Rust and Substrate Technology learning curve. While we\'ve onboarded experienced Substrate professionals to address this, the Item 3 related to zk-proof still to be develop.*\\n  \\n- *Milestone 1: Patient Identity and Security Framework\\nStatus: Delayed due to zk-proof\\nEstimated Completion Date: Oct 30, 2023*\\n- *Milestone 2: Patient Engagement and Data Sharing\\nStatus: Delayed due to Milestone 1\\nEstimated Completion Date: Dec 30, 2023*\\n\\n**Technical Specification amendment:**\\n- *Patient ID creation - Develop the patient ID creation tool in Javascript. Changed to Develop the patient ID creation tool in Dart.*\\n- *Patient ID on-chain authentication\\t- zkSNARKs Groth16 based on Non-Interactive Zero-Knowledge Proof (NIZKP) developed by !ink Smart Contract. Changed to Patient ID on-chain authentication\\t- zkSNARKs Groth16 based on Non-Interactive Zero-Knowledge Proof (NIZKP) developed by xcm, runtime module or !ink smart contract.*\\n\\nWe assure the committee that despite the delay, the quality and scope of the project will remain consistent with our initial proposal.\\n\\n\\n### Overview\\n\\n- **Total Estimated Duration:** 4.5 months\\n- **Full-Time Equivalent (FTE):**  4 FTE\\n- **Total Costs:** 30,000 USD\\n\\n### Milestone 1 - Patient Identity and Security Framework\\n\\n- **Estimated Duration:** 2.5 month\\n- **Developers:** FTE x 4\\n- **(Product Design x 1, Dapp Engineer x 1, System Engineer x 1, App Engineer x 1)**\\n- **Costs:** 20,000 USD\\n\\n| Number | Deliverable                        | Specification                                                                                                                                                                                                                                                                                                                                                                                   |\\n| ------ | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\\n| 0a.    | License                            | Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                      |\\n| 0b.    | Documentation                      | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                                                                                                           |\\n| 0c.    | Testing and Testing Guide          | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                                                                                                 |\\n| 0d.    | Docker                             | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                                                   |\\n| 0e.    | Article                            | We will post an article on Twitter and Meta(Facebook) for English and Mandarin speakers communities.                                                                                                                                                                                                                                                                                            |\\n| 1      | Patient ID creation                | \\\\- Develop the patient ID creation tool in Dart.<br>\\\\- Generate a new ID on client-side for the patient based on BIP39. (12 words passphrase)<br>\\\\- Encrypted key store(private key) by patient user’s password (AES-256 GCM mode)<br>\\\\- Implement the decentralized design using public key cryptography. (Client signed by private key)                                                 |\\n| 2      | Patient profile management module  | \\\\- Patient profile off-chain management tools developed by JAVA<br>\\\\- Support AWS S3 storage<br>\\\\- Updating of patient profile<br>\\\\- ECIES end-to-end data encryption to secure profile data transfer.                                                                                                                                                                                          |\\n| 3      | Patient ID on-chain authentication | \\\\- zkSNARKs Groth16 based on Non-Interactive Zero-Knowledge Proof (NIZKP) developed by developed by xcm, runtime module or !ink smart contract.<br>\\\\- Receive credential by trust issuer (token file)<br>\\\\- Zero-knowledge proof for on-chain authentication to prove patient ID without private information                                                                                                                         |\\n| 4      | Challenge card dapp module         | Provide a way for users to set personal goals, track their progress, and receive rewards for their efforts. Dapp developed in ink! smart contract.<br><br>\\\\- Add challenge card<br>\\\\- Add personalized mission<br>\\\\- Delete challenge card<br>\\\\- Receive daily mission<br>\\\\- Receive rewards by mission completed<br>\\\\- Receive rewards by challenge completed<br>\\\\- Rewards by fungible tokens |\\n| 5      | Create database                    | Create a docker container to start a mySQL database to store all the information, define the models to store and create tables and indexes.                                                                                                                                                                                                                                                     |\\n| 6      | Database encryption module         | We will implement a database encryption AES-256 GCM module of all stored and transmitted data to prevent unauthorized access or tampering. Developed by JAVA.                                                                                                                                                                                                                                   |\\n| 7      | Android apk                        | We will provide android apk for above challenge card data input and functional verification<br>We will provide android apk for user challenge card with wallet to receive rewards                                                                                                                                                                                                               |\\n| 8      | Testing                            | Achieve a testing coverage of the functionalities above 90%                                                                                                                                                                                                                                                                                                                                     |\\n\\n### Milestone 2 - Patient Engagement and Data Sharing\\n- **Estimated Duration:** 2 month\\n- **Developers:** FTE x 4\\n- **(Product Design x 1, Dapp Engineer x 1, System Engineer x 1, APP Engineer x 1)**\\n- **Costs:** 10,000 USD\\n\\n| Number | Deliverable                                            | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |\\n| ------ | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\\n| 0a.    | License                                                | Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |\\n| 0b.    | Documentation                                          | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |\\n| 0c.    | Testing and Testing Guide                              | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |\\n| 0d.    | Docker                                                 | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |\\n| 0e.    | Article                                                | We will publish an article/workshop video that explains how Claps Health Benefits to patients and healthcare business. Patients are the end-users of Claps Health application, so it\'s important to explain how Claps Health will benefit them. The article/video will cover topics such as how the app helps patients manage their health, how it improves access to healthcare, and how it ensures data privacy and security. Article/Workshop will be in English and Mandarin.                                                                                                                                                                                                                                                                                                                          |\\n| 1.      | Claps Health Data Sharing protocol: Consent management | We will implement a health data sharing protocol based on dapp to enable secure sharing of health data among various stakeholders. Developed by !ink Smart Contract.<br>\\\\- Accept consent<br>\\\\- Revoke consent<br>\\\\- View data sharing requests<br><br>a. The consent data will be stored anonymously, without any personal identifying information.<br>b. The smart contract will be accessible to authorized parties using public key cryptography.<br>c. Users are able to request that their data be permanently deleted from the system at any time (Please reference Data privacy control module)<br>d. Users are able to see a list of all the organizations that have requested access to their data, along with the specific types of data being requested, and be able to manage these requests. |\\n| 2.      | Claps Health Data Sharing protocol: Patient data feed  | We will implement a health data feed on the backend, developed using Java.<br>\\\\- Subscribe data feed by numbers of Patient ID<br>\\\\- Unsubscribe data feed by Patient ID<br><br>a. The data feed will allow authorized parties to access and subscribe to a patient\'s health data in real-time.<br>b. The data will be encrypted using ECIES to ensure data security.<br>c. The data feed will be accessible through a secure API, which will authenticate and authorize users using public key cryptography.<br>d. Support delete data by patient required.                                                                                                                                                                                                                                                |\\n| 3.      | Data privacy control module                            | We will implement a data privacy control module to allow patients to exercise their rights under the GDPR, delete their personal data by patient’s requirement. Developed by JAVA.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |\\n| 4.      | Audit logging on web backend                           | The web backend will implement an auditable log of all access to the system, including who accessed it and what actions were performed, to help detect and respond to security incidents. Developed by JAVA.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |\\n| 5.      | Support for Mandarin speakers community                | Translate the app to Mandarin and add support to switch languages                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |\\n| 6.      | Testing                                                | Add tests to the components. Achieve a testing coverage of the functionalities above 90%                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |\\n| 7.      | Final setups                                           | Deal with all production issues/configuration requirements such as creating the final docker image, reviewing the documentation and verifying everything works fine.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |\\n| 8.      | Deploy the app                                         | Define the final domain (Claps.health) and deploy the app                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |\\n\\n## User Interface\\n\\nThe user interface will be based on [here](https://www.figma.com/file/Zlx3Qq4EoFtuV8AopAffVl/Claps-Health-Mobile-for-Patients?node-id=0%3A1&t=pUNA27WItIqVx5n8-1) \\n\\n![app01](https://user-images.githubusercontent.com/14127551/223708073-28ffd406-a286-4f80-9476-c728762f6812.png)\\n\\np.s. The gray area will be for future development, such as health education services.\\nThe web backend for pharmaceutical and healthcare service providers, including omni-channel and health data analytics, will also be a focus of our future development. \\n\\n## Regulation and Compliance with HIPAA/GDPR\\n\\n### Pseudonymization\\n\\nBy using pseudonyms, the health data can be processed and shared in a secure and de-identified manner, while still allowing for verifiable identification.\\n\\n### End-to-end data encryption\\nClaps Health offers tools based on public key cryptography ECIES encryption to secure data storage and transfer are compliance with patient data protection and industry requirements. Only authorized parties can access the data. The application layers are using AWS S3 industry compliance secure storage. \\n\\n### Database data encryption\\nClaps Health backend database using AES256 GCM data encryption to secure database data. Based on data access policy,  only authorized parties can access the data. The application layers are using AWS S3 industry compliance secure storage. \\n \\n\\n### Audit logs\\n\\nThe auditable log of all access to the system, including who accessed it and what actions were performed\\nConsent Tracking\\n\\nBy implementing consent tracking smart contracts, organizations can demonstrate that they are following privacy regulations and that patients have control over their health data. \\n\\n### Right to be forgotten\\n\\nClaps Health does not store personal data on the blockchain and there is only random ID and hash code on chain. Individuals have more control over their data and can request deletion of the corresponding data in the database. Ensure that all personal data is securely deleted and no residual information remains that could be used to re-identify individuals.\\n\\nHowever, it is important to note that HIPAA/GDPR compliance involves a comprehensive set of rules and regulations for protecting health information. This proposal does not cover all of the guidelines such as physical access, governance of organizations..etc.\\n\\n## Future Plans\\n\\n## Health Educations\\n\\nWe are planning to expand Claps Health by developing a health education publishing service. This service will be available on our web backend and mobile app, and will allow healthcare providers to create and share educational content with their patients. By providing easy access to reliable health information, we hope to empower patients to take control of their health and wellbeing. \\n\\n## Omni-Channel and Health data analytics\\n\\nWe recognize that healthcare providers need a way to analyze large datasets to identify patterns in health behaviors and improve patient outcomes. To meet this need, we are planning to develop an omni-channel health data analytics service on our web backend. Based on patient Informed Consent Management\\n\\n### Open AI Integration\\n\\nWe are planning to integrate Open AI into Claps health mobile app in a second phase, after testing the market and gathering feedback. This approach allows us to minimize development costs and time in the first phase, while also gathering feedback and making sure that the features that we implement in the second phase are the most useful and needed.\\n\\n### Expand Substrate\\n\\nWe are planning to build an omnichannel platform for pharmaceutical companies and healthcare related based on Polkadot Substrate for expanding the ecosystem, providing a more secure and private way of data management, better interoperability, automation and improved healthcare education communication.\\n\\n### Additional Information\\n\\nReference:\\nhttps://www.ledgerinsights.com/blockchain-health-records-taiwan/\\nhttps://medium.com/dtco/blockchain-enabled-personal-health-record-os-challenges-opportunities-in-health-care-55161e3a5a32\\n","md_link":"https://raw.githubusercontent.com/w3f/Grants-Program/cf3a1e96e6e3a05f52db3570a42c8cf1449f62e9/applications/Claps.md","project_name":"claps health","status":null,"total_cost":{"amount":"30000","currency":"usd"},"total_duration":"4.5 months","team_id":"4dca1687-1543-4ebb-91ac-1ba6e7af0bb6","level":"2","html_url":"https://github.com/w3f/Grants-Program/blob/cf3a1e96e6e3a05f52db3570a42c8cf1449f62e9/applications/Claps.md","legal_structure":{"registered_address":"1f, no 465-1, sec. 6, chung-hsiao e. rd., nan-kang dist., taipei city 11557, roc taiwan","registered_legal_entity":"taiwan research-based biopharmaceutical manufacturers association"},"totalMilestones":2,"milestones":[]},"team":{"id":"4dca1687-1543-4ebb-91ac-1ba6e7af0bb6","name":"taiwan research-based biopharmaceutical manufacturers association","members":["Jacob Lee, Team Lead","Brady Liu, Project Tech Lead","Dr. Nicky Liu, Project Manager","Carol Cheng, Regulation and compliance"],"projects":[{"projectId":"320cbb77-5fdc-4edf-b198-1f551e9b3cf2","status":null}]},"milestones":[{"estimated duration":"2.5 month","costs":"20,000 usd"},{"estimated duration":"2 month","costs":"10,000 usd"}],"proposal":{"id":"94ee321b-6f73-44d9-9774-de1acf5f1967","repos":[],"md_link":"https://raw.githubusercontent.com/w3f/Grants-Program/cf3a1e96e6e3a05f52db3570a42c8cf1449f62e9/applications/Claps.md","proposal_name":"claps health","team_name":"taiwan research-based biopharmaceutical manufacturers association"}}',
    assignees: [
      {
        git_user_id: '1389409',
        git_user_name: 'semuelle',
        git_avatar_url: 'https://avatars.githubusercontent.com/u/1389409?v=4',
        _id: {
          $oid: '650acc0a8ec20eb86cbeb897'
        }
      }
    ],
    user_github_details: [
      {
        git_user_id: '14127551',
        git_user_name: 'jacobleegithub',
        git_avatar_url: 'https://avatars.githubusercontent.com/u/14127551?v=4',
        _id: {
          $oid: '650acc0a8ec20eb86cbeb898'
        }
      }
    ],
    reviewers: [
      {
        reviewer_user_name: 'Noc2',
        reviewer_id: '24638510',
        reviewer_avatar_url:
          'https://avatars.githubusercontent.com/u/24638510?u=5355a8c2d13d6af2b4a36d0e19f7fde67c85afd2&v=4',
        _id: {
          $oid: '650acc0a8ec20eb86cbeb899'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '650acc0a8ec20eb86cbeb89a'
    },
    id: '1a35f919-c25a-445a-9e6a-4248ca333199',
    status: 'open',
    repos: [],
    md_link:
      'https://raw.githubusercontent.com/w3f/Grants-Program/603f8a13899d3bc79f9a862d0918131ce90577b3/.github/workflows/check_broken_links.yml',
    team_name: '',
    file_name: '.github/workflows/check_broken_links.yml',
    created_at: '2023-09-18T07:59:58Z',
    updated_at: '2023-09-19T11:21:40Z',
    proposal_name: 'name: broken links',
    pr_link: 'https://api.github.com/repos/w3f/Grants-Program/pulls/1977',
    extrected_proposal_data:
      '{"project":{"id":"fcdcc51e-2710-48d4-8964-4f00f32bb2c1","user_github_id":null,"file_name":"check_broken_links.yml","md_content":"name: Broken Links\\n\\non:\\n  repository_dispatch:\\n  workflow_dispatch:\\n  schedule:\\n    - cron: \'0 0 1 * *\'  # Trigger the workflow every month\\n\\njobs:\\n  build_and_check:\\n    runs-on: ubuntu-latest\\n    steps:\\n      - uses: actions/checkout@v3\\n\\n      - name: Link Checker\\n        id: lychee\\n        uses: lycheeverse/lychee-action@v1.8.0\\n        env:\\n          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}\\n\\n      - name: Create Issue From File\\n        if: env.lychee_exit_code != 0\\n        uses: peter-evans/create-issue-from-file@v4\\n        with:\\n          title: Link Checker Report\\n          content-filepath: ./lychee/out.md\\n          labels: report, automated issue","md_link":"https://raw.githubusercontent.com/w3f/Grants-Program/603f8a13899d3bc79f9a862d0918131ce90577b3/.github/workflows/check_broken_links.yml","project_name":"name: broken links","status":null,"total_cost":{"amount":"","currency":""},"total_duration":"","team_id":"06e48b7a-73dc-4c10-a4ed-72b13b790db9","level":"1","html_url":"https://github.com/w3f/Grants-Program/blob/603f8a13899d3bc79f9a862d0918131ce90577b3/.github/workflows/check_broken_links.yml","legal_structure":{"registered_address":"","registered_legal_entity":""},"totalMilestones":0,"milestones":[]},"team":{"id":"06e48b7a-73dc-4c10-a4ed-72b13b790db9","name":"","members":[],"projects":[{"projectId":"fcdcc51e-2710-48d4-8964-4f00f32bb2c1","status":null}]},"milestones":[],"proposal":{"id":"1a35f919-c25a-445a-9e6a-4248ca333199","repos":[],"md_link":"https://raw.githubusercontent.com/w3f/Grants-Program/603f8a13899d3bc79f9a862d0918131ce90577b3/.github/workflows/check_broken_links.yml","proposal_name":"name: broken links","team_name":""}}',
    assignees: [],
    user_github_details: [
      {
        git_user_id: '142136841',
        git_user_name: 'nikw3f',
        git_avatar_url: 'https://avatars.githubusercontent.com/u/142136841?v=4',
        _id: {
          $oid: '650acc0a8ec20eb86cbeb89b'
        }
      }
    ],
    reviewers: [
      {
        reviewer_user_name: 'Noc2',
        reviewer_id: '24638510',
        reviewer_avatar_url:
          'https://avatars.githubusercontent.com/u/24638510?u=5355a8c2d13d6af2b4a36d0e19f7fde67c85afd2&v=4',
        _id: {
          $oid: '650acc0a8ec20eb86cbeb89c'
        }
      },
      {
        reviewer_user_name: 'semuelle',
        reviewer_id: '1389409',
        reviewer_avatar_url:
          'https://avatars.githubusercontent.com/u/1389409?u=31c1613913d83e539e98fe85ac7d370fbf457076&v=4',
        _id: {
          $oid: '650acc0a8ec20eb86cbeb89d'
        }
      }
    ],
    __v: 0
  },
  {
    _id: {
      $oid: '650acc0a8ec20eb86cbeb89e'
    },
    id: 'd5e1887c-6678-4a01-bffb-c7f225fc90e8',
    status: 'open',
    repos: [],
    md_link:
      'https://raw.githubusercontent.com/w3f/Grants-Program/2dea158bc88bb05f847e08c33658d060b4ef8c9c/applications/StorageHub.md',
    team_name: 'moonsong labs',
    file_name: 'storagehub.md',
    created_at: '2023-09-13T16:48:19Z',
    updated_at: '2023-09-20T06:54:00Z',
    proposal_name: 'storagehub grant application',
    pr_link: 'https://api.github.com/repos/w3f/Grants-Program/pulls/1970',
    extrected_proposal_data:
      '{"project":{"id":"4eef59d6-731f-4918-98e0-81205d3f75dc","user_github_id":null,"file_name":"storagehub.md","payment_details":"usd wire preferred","md_content":"# StorageHub Grant Application\\n\\n- **Team Name:** Moonsong Labs\\n- **Payment Address:** USD Wire Preferred\\n- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3\\n\\n## Project Overview :page_facing_up:\\n\\n### Overview\\n\\n* Tagline Describer\\n    * StorageHub is a decentralized storage public good parachain optimized for file based storage and larger data sets that are not suitable to be stored directly in standard parachain storage. The proposed parachain will provide developers in the Polkadot ecosystem with an alternate decentralized and substrate-based storage solution and functionality.\\n\\n* Purpose\\t\\n    * The goal of this project is to provide storage for web3 applications and protocols within the Polkadot & Kusama ecosystems. Unlike other storage protocols that focus on end user or enterprise storage scenarios, StorageHub’s feature set optimizes for web3 application storage use cases. StorageHub aims to provide a decentralized storage option that allows web3 applications to store large files and large data sets in a cost efficient way without sacrificing decentralization properties.\\n\\n* Problem \\n    * Storage oriented chains, like Filecoin and Arweave, have emerged to provide more efficient and decentralized storage capabilities. However, these chains are standalone chains, and are not designed to interoperate with other chains. The problem is that web3 apps need smart contract logic and compute to be combined with storage to make a complete solution, but smart contracts and compute generally reside on different chains (e.g. Ethereum Mainnet, L2 rollups, Parachains) vs. on the storage optimized chains (Filecoin, Arweave). In response, these storage chains have tried to bolster their smart contract capabilities (e.g. Filecoin’s FVM, Arweave’s Smartweave), but they have and will continue to be hard pressed to convince all compute and smart contract activity to migrate to their chains.\\n\\n    * The ideal scenario would be to combine smart contract execution from e.g. a Substrate based Polkadot parachain such as Moonbeam or Astar with storage from a storage optimized chain like Arweave.  If we look at NFT scenarios as an example, this is happening. The scenario is that you have an NFT contract on Mainnet, that has a pointer to a JPEG via an Arweave URL.  The problem is that this is a one-way pointer between 2 independent systems. It is up to the application to mediate interactions between the 2 chains in the client.  There is no awareness or connection between the contract and the JPEG other than the URL pointer in the contract. What if the contract could update access to and ownership of the actual data itself? What if the contract could read and act on the data stored? Simple functionality like this would open up a large number of new scenarios. End user UX could be substantially improved by removing the need for the user to understand and interact directly with both the contract and the storage blockchains, using potentially different accounts, keys, etc.\\n\\n* Vision\\n    * StorageHub is a storage optimized parachain that is designed to work with other Polkadot & Kusama parachains. It focuses on storing data in an efficient and decentralized way, while allowing that storage to be accessed, used, and managed by other parachains. It will be possible for users to directly interact with the storage on the chain, but StorageHub also seeks to natively interoperate with existing parachains via XCM.\\n\\n* Inspiration \\n    * Amazon S3\\n        * (https://en.wikipedia.org/wiki/Amazon_S3) was a key building block of web2 cloud infrastructure that greatly eased and improved data storage in web2 applications.  With S3 devs could store arbitrarily large amounts of data in their apps without needing to get bogged down with storage infrastructure or scaling concerns.  StorageHub seeks to do something similar for web3 devs building on Polkadot.\\n\\n    * Filecoin\\n        * (https://filecoin.io/) is a storage optimized chain that creates a 2 sided marketplace of storage providers and storage consumers.  The project is responsible for key innovations such as ipfs and libp2p, among other things.  In many ways filecoin sets the standard for decentralized storage in the web3 space.  Although the protocol seems focused on trying to compete with cloud and other centralized storage providers.\\n\\n    * Arweave\\n        * (https://www.arweave.org/) is a storage optimized chain like filecoin, but that emphasizes permanent storage vs creating a time based storage marketplace.  Users pay once to store data on arweave forever.  It is popular to use for metadata associated with NFTs, among other things.\\n\\n    * Project Greenfield\\n        * (https://github.com/bnb-chain/greenfield-whitepaper/blob/main/README.md) is a storage optimized chain designed to work with the BNB chain.  It was born out of practical needs that the state of BNB chain is already many terabytes large and there is a need to offload unnecessary storage from the main BNB chain.  There are lots of good cross chain ideas in Greenfield including having storage on Greenfield represented as NFTs on BNB chain which can be managed and whose ownership can be changed.\\n\\n### Project Details\\n\\n* Design and Implementation Principles\\n    * StorageHub will be a Substrate-native implementation deployed to both Kusama and Polkadot.\\n    * It will be a public good chain that uses DOT for fees, governance, and other utilities.\\n    * It will offer native XCM support such that parachains can interact with stored data and metadata in a trustless way..\\n    * End users and Dapps should be able to store and retrieve stored data from the chain.\\n    * The chain will create a 2 sided marketplace of storage providers and storage consumers.\\n    * A minimum of N copies of any given piece of data should be stored such that the system can survive the loss of some copies without losing the original dataset.  Erasure encoding or similar technique could be optionally used to achieve this.\\n    * On the tradeoff spectrum between decentralization vs performance, we opt to always maintain good decentralization properties even if that means less performance is possible.\\n    * There will need to be a network of storage providers that supply storage to the blockchain. \\n    * The parachain will track metadata about the data being stored, and facilitate payments between the data owner and the storage provider. \\n    * A set of metadata associated with any stored data will be managed by StorageHub. This will allow the data owner to control access, and to transfer ownership of the data to other parties.\\n    * StorageHub doesn’t aim to have smart contract functionality itself. Rather it strives to integrate, work with, and complement other smart contract or native parachains.\\n    * In creating the design for StorageHub, we will leverage previous research into polkadot and substrate based filestorage solutions such as:\\n        * https://github.com/w3f/Grants-Program/pull/1888\\n        * https://github.com/common-good-storage/report/blob/master/src/first.md\\n\\n* Key Questions and Anticipated Challenges\\n    * Existing storage networks focus more on storage but less on user accessibility to that data.  But storage without accessibility isn’t that useful to users.  Can we incorporate outside accessibility guarantees into the protocol?\\n    * What type of storage will it provide? Only immutable hash/value type or will it support mutable references (like a filesystem, useful to store/manage a web service or page)\\n    * What kind of XCM interaction (API) do we want to support?\\n        * XCM (mostly HRMP) costs may make some scenarios prohibitive.\\n        * Given the costs of XCM, to what degree does it make sense to store metadata on StorageHub vs on the controlling chain?\\n    * What do sustainable economics look like for storage providers, especially given that a public good chain won’t have a token to help bootstrap this side of the market?\\n    * How is data provided and stored without increasing PoV?  This will most likely need to be a combination of offchain workers and a separate storage system.  Regular substrate state can’t be used for larger data storage, it would be used to keep tracking information about where and what data is stored.\\n    * What does this new data provider node look like and how does it work with other node types supporting the system?\\n    * How will the system ensure that enough copies of a given piece of data are present and available, given that storage provider nodes can go offline at any time.\\n    * How is it checked that data providers have the data they are being paid to store?  What are the consequences of failing this check?\\n    * How do you manage censorship of data?\\n        * Different kinds of data that could be subject to take down requests.  Data that e.g. a political party doesn’t like.  Data that is illegal in a given jurisdiction due to copyright or similar.  Data that is both illegal and morally offensive. \\n        * Perhaps OpenGov tracks could be used for censorship takedowns.\\n        * Or data storage providers could be given censorship controls, and a permissionless staking design would make it so token holders could vote out providers that are out of line with community censorship standards.\\n\\n\\n### Ecosystem Fit\\n* Where and How Does StorageHub Fit In\\n    * There are currently no native Polkadot decentralized storage solutions and StorageHub aims to fill that gap.\\n    * Crust provides an incentive layer on top of existing storage protocols like ipfs.  Whereas StorageHub seeks to be a storage provider itself.\\n    * StorageHub will be natively accessible by other parachains via XCM.\\n\\n* Target Audience\\n    * StorageHub is targeted for chains, contracts, teams and individuals that require data storage of larger datasets, and who value that storage being decentralized, censorship resistant, and permanent as long as storage fees are paid.\\n    * StorageHub will prioritize web3 developers that want to incorporate decentralized storage into their applications.  This means a focus on APIs, SDKs, developer docs and education.\\n    * StorageHub will secondarily provide a reference application which allows users to directly interact with the system, storing data and managing data storage.\\n\\n* Use Cases\\n    * NFT, NFT marketplace, and Metaverse metadata storage\\n    * Dapps that require data storage\\n    * Personal and enterprise data storage - same as other storage chains.\\n    * DAO owned data assets - DAOs operating on existing parachains can manage access to and ownership of data assets on StorageHub.\\n    * “True” NFTs that can have the entirety of their associated data assets on-chain via a combination of an e.g. NFT contract and StorageHub stored assets.\\n    * Markets for data sets using NFT marketplaces.\\n    * New types of smart contracts that can act on StorageHub stored data on an one off or continuous basis\\n\\n\\n## Team :busts_in_silhouette:\\n\\n### Team members\\n* Team Leader: Derek Yoo\\n* Team:\\n    * Alan Sapède\\n    * Chase Williams\\n    * Olivia Smith\\n    * Engineers to be hired\\n\\n### Contact\\n\\n- **Contact Name:** Chase Williams\\n- **Contact Email:** Chase@moonsonglabs.com\\n- **Website:** https://moonsonglabs.com/\\n\\n### Legal Structure\\n\\n- **Registered Address:** 1500 District Ave Burlington, MA 01803\\n- **Registered Legal Entity:** Delaware C Corp\\n\\n### Team\'s experience\\n\\n* The Moonsong Labs protocol engineering team has deep expertise in Substrate, EVM, cross chain technologies, and launching parachains on Kusama and Polkadot. Our team is the core engineering team for the Moonbeam Network and have made significant contributions to the ecosystem, such as contributions to Frontier, the Moonwall testing framework, parachain-staking pallet, and xcm tools. The engineering team is made up of 13+ engineers and is rapidly growing. \\n\\n* Team Example Code Repos:\\n    * https://github.com/Moonsong-Labs\\n    * https://github.com/moonbeam-foundation/moonbeam\\n\\n* Team LinkedIn Profiles:\\n    * [Alan Sapede](https://www.linkedin.com/in/alansapede/)\\n    * [Derek Yoo](https://www.linkedin.com/in/derek-yoo-8a050/)\\n    * [Olivia Smith](https://www.linkedin.com/in/olivia-smith-69966616a/)\\n    * [Chase Williams](https://www.linkedin.com/in/chase-williams-442712b1/)\\n    * Engineering Team TBD\\n\\n## Development Roadmap :nut_and_bolt:\\n\\n### Overview\\n* Total Estimated Duration: 2 Months\\n    * Milestone #1: 1 Month\\n    * Milestone #2: 1 Month\\n* Full-Time Equivalent (FTE): 2.5\\n* Total Costs: $84,500 (USD)\\n\\n### Milestone #1: Research & Design\\n* Estimated duration: 1 Month\\n* FTE: 2.5  \\n* Costs: $42,250 (USD)\\n\\n| Number | Deliverable | Specification |\\n| -----: | ----------- | ------------- |\\n| **0a.** | Copyright and Licenses | CC BY 4.0 / GPLv3 |\\n| **0b.** | Research & Investigation | * Understand and clarify key requirements via conversations with key stakeholders <br> * Study existing solutions and designs to see what technologies and approaches can be leveraged vs. being created <br> * Research decentralized storage competitive projects, including but not limited to Filecoin, Arweave, Sia, Storj as well as existing storage work in the Polkadot ecosystem <br> * Examine trade offs other decentralized storage providers have made including, but not limited to retrieval times, small v. large files, resiliency, cost efficacy, security & privacy, redundancy, user learning curve and environmental sustainability <br> * Begin to design features compatible with Polkadot’s technical approach and philosophy <br> * The research & design document will include the gathered requirements and the list of researched solutions & features that could meet those requirements, as well as all supporting evidence and documentation that led to those proposed requirements and features. The document will also expand its research on the “Key Questions and Anticipated Challenges” section |\\n| **0c.** | Feature Analysis | * In depth research of the technical feasibility of key features and components <br> *Evaluation of proposed feature sets, inclusive of a detailed compatibility/tradeoff matrix leading to a clearly defined set of proposed StorageHub features <br> * Stakeholders will be asked to provide feedback on those compatibility/tradeoffs and to help choose a good combination of features <br> * Definition and documentation of key use cases and scenarios |\\n| **0d.** | Article | * The main deliverable for the first month is v0.5 of the research & design document. The research and design document will include the feature analysis, proposed MVP feature set including key use cases, and address the points in (0b.) and (0c.) |\\n\\n### Milestone #2: Technical Deliverables\\n* Estimated Duration: 1 month\\n* FTE: 2.5\\n* Costs: $42,250 (USD)\\n\\n| Number | Deliverable | Specification |\\n| -----: | ----------- | ------------- |\\n| **0a.** | License Type | CC BY 4.0 / GPLv3 |\\n| **0b.** | Documentation | * For the second milestone we will provide v1.0 of the research & design document. The v1.0 document will include a high level technical design & architecture of StorageHub, including major subsystems, incorporating and building upon research from the first v0.5 milestone <br> * This v1.0 research and design document will be shared with key stakeholders to obtain specific feedback that will help us continue to refine StorageHub <br> * In addition to this, we will also begin to build prototype code that supports and tests the v1.0 technical design considerations. A basic tutorial will be included that explains how a user can run our prototype code and send test transactions |\\n| **0c.** | Testing & Testing Guide | * Software developed for this milestone will be prototype quality, and thus will not have the tests required for production deployment. However, the prototype code will be sufficient to demonstrate viability or compatibility of key aspects of the design approach <br> * As outlined in (0b.), a basic tutorial will be included that explains how a user can run our prototype code and send test transactions |\\n| **0d.** | Docker | * We will provide a Dockerfile(s) that can be used to run the prototype associated with this milestone |\\n| **0e.** | Prototype Code | * We will create a Substrate and or RUST prototype to validate proposed designs described in the v1.0 design doc. In particular, the approach for the data provider role, and being able to store data in a redundant fashion, and retrieve data from the provider <br> * The source code for the prototype will be delivered as part of the second month milestone. The prototype will have limited features (e.g. not decentralized, limited API, etc) or might not be complete but will provide sufficient functionalities to demonstrate key parts of the proposed design <br> * We will provide a Dockerfile(s) that can be used to run the prototype associated with this milestone |\\n| **0f.** | Resource Estimation & Planning | * Estimate the time, budget, and resources required to implement a minimum viable feature set for the project <br> * Break down the feature into smaller tasks or user stories <br> * Create a proposed project plan that includes implementation milestones, and responsibilities <br> * Include proposed next steps in the research and design doc |\\n| **0g.** | Article | * The main deliverables for this milestone are defined as below <br> * Progressing the v0.5 document to a v1.0 state outlined in section (0b.) <br> * A Substrate and or RUST prototype to validate proposed designs described in the v1.0, outlined in section (0e.) <br> * A basic tutorial will be included that explains how a user can run our prototype code and send test transactions outlined in section (0c.) |\\n\\n\\n## Future Plans\\n* We are currently in the process of hiring fulltime resources that will be dedicated to this engineering effort.\\n* The intended long term plan is to successfully complete this initial grant to then set us up to apply for a follow on long term grant\\n","md_link":"https://raw.githubusercontent.com/w3f/Grants-Program/2dea158bc88bb05f847e08c33658d060b4ef8c9c/applications/StorageHub.md","project_name":"storagehub grant application","status":null,"total_cost":{"amount":"","currency":""},"total_duration":"","team_id":"9ea556bf-153c-4f06-a33d-13e0c9d477f1","level":"3","html_url":"https://github.com/w3f/Grants-Program/blob/2dea158bc88bb05f847e08c33658d060b4ef8c9c/applications/StorageHub.md","legal_structure":{"registered_address":"1500 district ave burlington, ma 01803","registered_legal_entity":"delaware c corp"},"totalMilestones":0,"milestones":[]},"team":{"id":"9ea556bf-153c-4f06-a33d-13e0c9d477f1","name":"moonsong labs","members":["Team Leader: Derek Yoo","Team:","Alan Sapède","Chase Williams","Olivia Smith","Engineers to be hired"],"projects":[{"projectId":"4eef59d6-731f-4918-98e0-81205d3f75dc","status":null}]},"milestones":[],"proposal":{"id":"d5e1887c-6678-4a01-bffb-c7f225fc90e8","repos":[],"md_link":"https://raw.githubusercontent.com/w3f/Grants-Program/2dea158bc88bb05f847e08c33658d060b4ef8c9c/applications/StorageHub.md","proposal_name":"storagehub grant application","team_name":"moonsong labs"}}',
    assignees: [
      {
        git_user_id: '24638510',
        git_user_name: 'Noc2',
        git_avatar_url: 'https://avatars.githubusercontent.com/u/24638510?v=4',
        _id: {
          $oid: '650acc0a8ec20eb86cbeb89f'
        }
      }
    ],
    user_github_details: [
      {
        git_user_id: '144842888',
        git_user_name: 'Cwilli30',
        git_avatar_url: 'https://avatars.githubusercontent.com/u/144842888?v=4',
        _id: {
          $oid: '650acc0a8ec20eb86cbeb8a0'
        }
      }
    ],
    reviewers: [
      {
        reviewer_user_name: 'Noc2',
        reviewer_id: '24638510',
        reviewer_avatar_url:
          'https://avatars.githubusercontent.com/u/24638510?u=5355a8c2d13d6af2b4a36d0e19f7fde67c85afd2&v=4',
        _id: {
          $oid: '650acc0a8ec20eb86cbeb8a1'
        }
      },
      {
        reviewer_user_name: 'keeganquigley',
        reviewer_id: '35080151',
        reviewer_avatar_url:
          'https://avatars.githubusercontent.com/u/35080151?v=4',
        _id: {
          $oid: '650acc0a8ec20eb86cbeb8a2'
        }
      },
      {
        reviewer_user_name: 'semuelle',
        reviewer_id: '1389409',
        reviewer_avatar_url:
          'https://avatars.githubusercontent.com/u/1389409?u=31c1613913d83e539e98fe85ac7d370fbf457076&v=4',
        _id: {
          $oid: '650acc0a8ec20eb86cbeb8a3'
        }
      }
    ],
    __v: 0
  }
];

export const PULLREQUEST: any = {
  action: 'opened',
  number: 89,
  pull_request: {
    url: 'https://api.github.com/repos/Shweta2217/webhook_dummy/pulls/89',
    id: 1528506352,
    node_id: 'PR_kwDOJ4pbrs5bGyfw',
    html_url: 'https://github.com/Shweta2217/webhook_dummy/pull/89',
    diff_url: 'https://github.com/Shweta2217/webhook_dummy/pull/89.diff',
    patch_url: 'https://github.com/Shweta2217/webhook_dummy/pull/89.patch',
    issue_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/issues/89',
    number: 89,
    state: 'open',
    locked: false,
    title: 'New branch',
    user: {
      login: 'shweta432',
      id: 102291950,
      node_id: 'U_kgDOBhjZ7g',
      avatar_url: 'https://avatars.githubusercontent.com/u/102291950?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/shweta432',
      html_url: 'https://github.com/shweta432',
      followers_url: 'https://api.github.com/users/shweta432/followers',
      following_url:
        'https://api.github.com/users/shweta432/following{/other_user}',
      gists_url: 'https://api.github.com/users/shweta432/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/shweta432/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/shweta432/subscriptions',
      organizations_url: 'https://api.github.com/users/shweta432/orgs',
      repos_url: 'https://api.github.com/users/shweta432/repos',
      events_url: 'https://api.github.com/users/shweta432/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/shweta432/received_events',
      type: 'User',
      site_admin: false
    },
    body: null,
    created_at: '2023-09-25T10:21:30Z',
    updated_at: '2023-09-26T10:47:09Z',
    closed_at: null,
    merged_at: null,
    merge_commit_sha: '38f502ed978976d04be347ef8b8a19e69a718857',
    assignee: null,
    assignees: [],
    requested_reviewers: [[Object]],
    requested_teams: [],
    labels: [],
    milestone: null,
    draft: false,
    commits_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/pulls/89/commits',
    review_comments_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/pulls/89/comments',
    review_comment_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/pulls/comments{/number}',
    comments_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/issues/89/comments',
    statuses_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/statuses/e23ddaa2ad035dab5a94d544059d8f3313f4034f',
    head: {
      label: 'shweta432:new_branch',
      ref: 'new_branch',
      sha: 'e23ddaa2ad035dab5a94d544059d8f3313f4034f',
      user: [Object],
      repo: [Object]
    },
    base: {
      label: 'Shweta2217:main',
      ref: 'main',
      sha: '23e65dc967764f04b3a12b460d1b7a3c6d8f6f68',
      user: [Object],
      repo: [Object]
    },
    _links: {
      self: [Object],
      html: [Object],
      issue: [Object],
      comments: [Object],
      review_comments: [Object],
      review_comment: [Object],
      commits: [Object],
      statuses: [Object]
    },
    author_association: 'CONTRIBUTOR',
    auto_merge: null,
    active_lock_reason: null,
    merged: false,
    mergeable: true,
    rebaseable: true,
    mergeable_state: 'clean',
    merged_by: null,
    comments: 0,
    review_comments: 0,
    maintainer_can_modify: true,
    commits: 2,
    additions: 1,
    deletions: 1,
    changed_files: 1
  },
  requested_reviewer: {
    login: 'Shweta2217',
    id: 86247988,
    node_id: 'MDQ6VXNlcjg2MjQ3OTg4',
    avatar_url: 'https://avatars.githubusercontent.com/u/86247988?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Shweta2217',
    html_url: 'https://github.com/Shweta2217',
    followers_url: 'https://api.github.com/users/Shweta2217/followers',
    following_url:
      'https://api.github.com/users/Shweta2217/following{/other_user}',
    gists_url: 'https://api.github.com/users/Shweta2217/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/Shweta2217/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Shweta2217/subscriptions',
    organizations_url: 'https://api.github.com/users/Shweta2217/orgs',
    repos_url: 'https://api.github.com/users/Shweta2217/repos',
    events_url: 'https://api.github.com/users/Shweta2217/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/Shweta2217/received_events',
    type: 'User',
    site_admin: false
  },
  repository: {
    id: 663378862,
    node_id: 'R_kgDOJ4pbrg',
    name: 'webhook_dummy',
    full_name: 'Shweta2217/webhook_dummy',
    private: false,
    owner: {
      login: 'Shweta2217',
      id: 86247988,
      node_id: 'MDQ6VXNlcjg2MjQ3OTg4',
      avatar_url: 'https://avatars.githubusercontent.com/u/86247988?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Shweta2217',
      html_url: 'https://github.com/Shweta2217',
      followers_url: 'https://api.github.com/users/Shweta2217/followers',
      following_url:
        'https://api.github.com/users/Shweta2217/following{/other_user}',
      gists_url: 'https://api.github.com/users/Shweta2217/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Shweta2217/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Shweta2217/subscriptions',
      organizations_url: 'https://api.github.com/users/Shweta2217/orgs',
      repos_url: 'https://api.github.com/users/Shweta2217/repos',
      events_url: 'https://api.github.com/users/Shweta2217/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Shweta2217/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/Shweta2217/webhook_dummy',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/Shweta2217/webhook_dummy',
    forks_url: 'https://api.github.com/repos/Shweta2217/webhook_dummy/forks',
    keys_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/Shweta2217/webhook_dummy/teams',
    hooks_url: 'https://api.github.com/repos/Shweta2217/webhook_dummy/hooks',
    issue_events_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/issues/events{/number}',
    events_url: 'https://api.github.com/repos/Shweta2217/webhook_dummy/events',
    assignees_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/branches{/branch}',
    tags_url: 'https://api.github.com/repos/Shweta2217/webhook_dummy/tags',
    blobs_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/languages',
    stargazers_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/stargazers',
    contributors_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/contributors',
    subscribers_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/subscribers',
    subscription_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/subscription',
    commits_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/Shweta2217/webhook_dummy/merges',
    archive_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/downloads',
    issues_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Shweta2217/webhook_dummy/deployments',
    created_at: '2023-07-07T06:56:15Z',
    updated_at: '2023-07-17T08:02:09Z',
    pushed_at: '2023-09-25T10:21:30Z',
    git_url: 'git://github.com/Shweta2217/webhook_dummy.git',
    ssh_url: 'git@github.com:Shweta2217/webhook_dummy.git',
    clone_url: 'https://github.com/Shweta2217/webhook_dummy.git',
    svn_url: 'https://github.com/Shweta2217/webhook_dummy',
    homepage: null,
    size: 3121,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
      node_id: 'MDc6TGljZW5zZTI='
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 1,
    open_issues: 1,
    watchers: 0,
    default_branch: 'main'
  },
  sender: {
    login: 'Shweta2217',
    id: 86247988,
    node_id: 'MDQ6VXNlcjg2MjQ3OTg4',
    avatar_url: 'https://avatars.githubusercontent.com/u/86247988?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Shweta2217',
    html_url: 'https://github.com/Shweta2217',
    followers_url: 'https://api.github.com/users/Shweta2217/followers',
    following_url:
      'https://api.github.com/users/Shweta2217/following{/other_user}',
    gists_url: 'https://api.github.com/users/Shweta2217/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/Shweta2217/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Shweta2217/subscriptions',
    organizations_url: 'https://api.github.com/users/Shweta2217/orgs',
    repos_url: 'https://api.github.com/users/Shweta2217/repos',
    events_url: 'https://api.github.com/users/Shweta2217/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/Shweta2217/received_events',
    type: 'User',
    site_admin: false
  }
};

export const axiosResForProposals = {
  dataForFiles: {
    data: [
      {
        sha: '39ef80998a19c7d877aec07e681f07ef99b1c900',
        filename: 'applications/aa4.md',
        status: 'modified',
        additions: 1,
        deletions: 1,
        changes: 2,
        blob_url:
          'https://github.com/Shweta2217/webhook_dummy/blob/e23ddaa2ad035dab5a94d544059d8f3313f4034f/applications%2Faa4.md',
        raw_url:
          'https://github.com/Shweta2217/webhook_dummy/raw/e23ddaa2ad035dab5a94d544059d8f3313f4034f/applications%2Faa4.md',
        contents_url:
          'https://api.github.com/repos/Shweta2217/webhook_dummy/contents/applications%2Faa4.md?ref=e23ddaa2ad035dab5a94d544059d8f3313f4034f',
        patch:
          '@@ -1,4 +1,4 @@\n' +
          '-# Shweta Network \n' +
          '+# Shweta JI Network ...\n' +
          '  \n' +
          ' * **Team Name:** Shweta Teams\n' +
          ' * **Payment Address:** 15tV6rQSwNgWQ1Z5pim2yJmELLvWNm5D4V'
      }
    ]
  },
  dataForContentUrl: {
    data: {
      name: 'aa4.md',
      path: 'applications/aa4.md',
      sha: '656b0c39be78c4fa68bf7d028d375d6d9fb2fcc0',
      size: 12212,
      url: 'https://api.github.com/repos/Shweta2217/webhook_dummy/contents/applications/aa4.md?ref=57f4fa33d3b9d676283ccaf27e15fc788fcdf0d7',
      html_url:
        'https://github.com/Shweta2217/webhook_dummy/blob/57f4fa33d3b9d676283ccaf27e15fc788fcdf0d7/applications/aa4.md',
      git_url:
        'https://api.github.com/repos/Shweta2217/webhook_dummy/git/blobs/656b0c39be78c4fa68bf7d028d375d6d9fb2fcc0',
      download_url:
        'https://raw.githubusercontent.com/Shweta2217/webhook_dummy/57f4fa33d3b9d676283ccaf27e15fc788fcdf0d7/applications/aa4.md',
      type: 'file',
      content:
        'IyBTaHdldGEgSkkgTmV0d29yayAuLi4uLgogCiogKipUZWFtIE5hbWU6Kiog\n' +
        'U2h3ZXRhIFRlYW1zCiogKipQYXltZW50IEFkZHJlc3M6KiogMTV0VjZyUVN3\n' +
        'TmdXUTFaNXBpbTJ5Sm1FTEx2V05tNUQ0VgoKIyMgUHJvamVjdCBPdmVydmll\n' +
        'dyA6cGFnZV9mYWNpbmdfdXA6CgojIyMgT3ZlcnZpZXcKCiMjIyMgSW50cm9k\n' +
        'dWN0aW9uCgpUaGUgQXByb24gTmV0d29yaydzIHZpc2lvbiBpcyB0byBiZSB0\n' +
        'aGUgZW50cnkgcG9pbnQgb2YgdGhlIFdlYjMgV29ybGQgaW4gdGhlIGZ1dHVy\n' +
        'ZS4gVGhlIGdvYWwgb2YgdGhlIEFwcm9uIE5ldHdvcmsgaXMgdG8gY3JlYXRl\n' +
        'IHRoZSBkZWNlbnRyYWxpemVkIGluZnJhc3RydWN0dXJlIGZvciBhbGwgdGhl\n' +
        'IGRldmVsb3BlcnMgd2hvIHdhbnQgdG8gYnVpbGQgYXBwbGljYXRpb25zIG9u\n' +
        'IHRvcCBvZiB0aGUgYmxvY2tjaGFpbiwgdGhlIHNlcnZpY2UgcHJvdmlkZXJz\n' +
        'IHdobyBhcmUgcnVubmluZyBub2RlcyBmb3IgYmxvY2tjaGFpbiwgYW5kIHRo\n' +
        'ZSB1c2VycyB3aG8gYXJlIHVzaW5nIGFwcGxpY2F0aW9ucyBiYXNlZCBvbiBi\n' +
        'bG9ja2NoYWluLgoKVGhlIGJsb2NrY2hhaW4gaW5mcmFzdHJ1Y3R1cmUgc2Vy\n' +
        'dmljZXMgYXJlIHByb3ZpZGVkIGJ5IHNlbGRvbSBjZW50cmFsaXplZCBzZXJ2\n' +
        'aWNlIHByb3ZpZGVycy4gVGhvc2Ugc2VydmljZSBwcm92aWRlcnMgYXJlIGNv\n' +
        'bW1lcmNpYWwgY29tcGFuaWVzIGFuZCBlYXJuIHByb2ZpdCBieSBwcm92aWRp\n' +
        'bmcgdGhlc2Ugc2VydmljZXMuIEluIGdlbmVyYWwgc3BlYWtpbmcsIHRoZXJl\n' +
        'IGlzIG5vIHByb2JsZW0gd2l0aCBzdWNoIGEgYnVzaW5lc3MgbW9kZWwgdGhh\n' +
        'dCBjb21tZXJjaWFsIGNvbXBhbmllcyBwcm92aWRlIGluZnJhc3RydWN0dXJl\n' +
        'IHNlcnZpY2VzIGFuZCBnZXQgcGFpZCBieSBkZXZlbG9wZXJzIG9yIHVzZXJz\n' +
        'IGluIHRoZSBwYXN0IGFnZXMuIEJ1dCBOT1QgTk9XLiBUaGUgbWFpbiBmZWF0\n' +
        'dXJlIG9mIGJsb2NrY2hhaW4gaXMgZGVjZW50cmFsaXphdGlvbiwgd2hpbGUg\n' +
        'YWxsIHRoZSBibG9ja2NoYWluIGluZnJhc3RydWN0dXJlIHNlcnZpY2VzIGFy\n' +
        'ZSBidWlsdCBhbmQgbWFpbnRhaW5lZCBieSBjb21tZXJjaWFsIGNvbXBhbmll\n' +
        'cywgYW5kIHRob3NlIHN5c3RlbXMgYXJlIGNlbnRyYWxpemVkLCB3aGljaCBp\n' +
        'cyBhZ2FpbnN0IHRoZSBkZWNlbnRyYWxpemF0aW9uIG9mIGJsb2NrY2hhaW4u\n' +
        'IFRoZXJlIGlzIGEgcG90ZW50aWFsIGlzc3VlIG9mIHN1Y2ggYSBidXNpbmVz\n' +
        'cyBtb2RlbCB0aGF0IHRoZSBzZXJ2aWNlIHByb3ZpZGVycyBjYW4gc3RlYWwg\n' +
        'dGhlIGJsb2NrY2hhaW4gZnJvbSB0aGUgY29tbXVuaXR5IGJ5IG1hbmlwdWxh\n' +
        'dGluZyB0aGUgQVBJIGFjY2Vzc2VzIHRocm91Z2ggdGhlaXIgaW5mcmFzdHJ1\n' +
        'Y3R1cmUgc2VydmljZXMuIE9uY2UgdGhlIHNlcnZpY2UgcHJvdmlkZXJzIG1h\n' +
        'bmlwdWxhdGUgdGhlIEFQSSBhY2Nlc3NlcywgdGhlcmUgaXMgbm8gcmVhbCBi\n' +
        'bG9ja2NoYWluIGFueW1vcmUuCgpNYXliZSB5b3UgYXJlIHN0aWxsIHRoaW5r\n' +
        'aW5nIHRoYXQgaXQgc291bmRzIHRlcnJpYmxlIGJ1dCBubyBvbmUgY2FuIHBy\n' +
        'b3ZlIGl0LiBMZXQncyBzZWUgdGhlIHJlY2VudCBhY2NpZGVudCBvZiBpbmZ1\n' +
        'cmEuaW8uIEFsbW9zdCBhbGwgb2YgdGhlIGJsb2NrY2hhaW4gYXBwbGljYXRp\n' +
        'b25zIG1haW5seSByZWx5IG9uIHRoZSBBUEkgc2VydmljZXMgZnJvbSBpbmZ1\n' +
        'cmEuaW8sIGJ1dCBub25lIG9mIHRoZSBidWlsZGVycyBvZiBibG9ja2NoYWlu\n' +
        'IGFwcGxpY2F0aW9ucyBjYW4gaW1hZ2luZSB3aGF0IHdpbGwgaGFwcGVuIGlm\n' +
        'IGluZnVyYS5pbyBtYW5pcHVsYXRlcyB0aGUgQVBJIHNlcnZpY2VzLiBIb3Bl\n' +
        'ZnVsbHksIGluZnVyYS5pbyB3b3J0aCBvdXIgdHJ1c3QgYWNjb3JkaW5nIHRv\n' +
        'IHBhc3Qgc2VydmljZXMsIGFuZCB0aGVyZSBpcyBubyBtYW5pcHVsYXRpb24g\n' +
        'Zm91bmQgeWV0LgoKKipPbiBOb3YuIDExdGgsIDIwMjAsIHRoZSBBUEkgc2Vy\n' +
        'dmljZXMgZnJvbSBpbmZ1cmEuaW8gYXJlIGRvd24sIGFuZCB0aGUgaWRlYSBv\n' +
        'ZiBBcHJvbiBOZXR3b3JrIGNvbWVzIG91dC4qKgoKVGhlIEFwcm9uIE5ldHdv\n' +
        'cmsgaXMgYnVpbHQgYnkgdGhlIEFwcm9uIExhYnMgcG93ZXJlZCBieSBTdWJz\n' +
        'dHJhdGUuIEl0IHByb3ZpZGVzIGEgQ3Jvc3MtY2hhaW4gRGVjZW50cmFsaXpl\n' +
        'ZCBJbmZyYXN0cnVjdHVyZSBTZXJ2aWNlcyBOZXR3b3JrIHRoYXQgd2lsbCBi\n' +
        'ZSB1c2VkIGJ5IGJsb2NrY2hhaW4gbm9kZSBydW5uZXJzLCBEQXBwIGRldmVs\n' +
        'b3BlcnMsIHRoZSBwdWJsaWMgY2hhaW4gY29tbXVuaXR5LCBhbmQgREFwcCB1\n' +
        'c2Vycy4gRXZlcnkgREFwcCBkZXZlbG9wZXIgY2FuIGRpc2NvdmVyIHRoZSBw\n' +
        'cm9wZXIgc2VydmljZSBwcm92aWRlciBmb3IgYSBzcGVjaWZpYyBibG9ja2No\n' +
        'YWluIHRocm91Z2ggdGhlIGRlY2VudHJhbGl6ZWQgaW5mcmFzdHJ1Y3R1cmUg\n' +
        'bWFya2V0IG9uIHRoZSBBcHJvbiBOZXR3b3JrLiBUaGUgQXByb24gTmV0d29y\n' +
        'ayBjYW4gYmUgcnVuIGFzIGEgcGFyYWNoYWluIG9mIFBvbGthZG90LgoKV2l0\n' +
        'aCB0aGUgQXByb24gTmV0d29yaywgIHRoZSBEQXBwIGRldmVsb3BlcnMgY2Fu\n' +
        'IGZpbmQgdGhlaXIgQVBJIGVuZHBvaW50LCBub2RlIHJ1bm5lcnMgY2FuIHBy\n' +
        'b3ZpZGUgaW5mcmFzdHJ1Y3R1cmUgc2VydmljZXMgdG8gZ2V0IHByb2ZpdCBh\n' +
        'bmQgYWxsIHRoZSBpbmZyYXN0cnVjdHVyZSBzZXJ2aWNlcyB3aWxsIGJlIGRl\n' +
        'Y2VudHJhbGl6ZWQgb24gdGhlIHR3by1sYXllcnMgaW5mcmFzdHJ1Y3R1cmUg\n' +
        'c2VydmljZSBuZXR3b3JrLiBUaGUgQXByb24gTmV0d29yayB3aWxsIGd1YXJh\n' +
        'bnR5IHRoZXJlIGlzIG5vIGluZnVyYS5pbyBhY2NpZGVudCBhbnltb3JlIQoK\n' +
        'IyMjIyBJbnRlZ3JhdGlvbgoKVGhlIEFwcm9uIE5ldHdvcmsgY2FuIGJlIHJ1\n' +
        'biBhcyBhIHBhcmFjaGFpbiBvbiBQb2xrYWRvdCwgb3IgYW4gaW5kZXBlbmRl\n' +
        'bnQgY2hhaW4uIFRoZSBBcHJvbiBOZXR3b3JrIGNvbnRhaW5zIEFwcm9uIE5v\n' +
        'ZGUgYW5kIEFwcm9uIE1hcmtldC4gVGhlIEFwcm9uIE5vZGUgaXMgYnVpbHQg\n' +
        'd2l0aCBTdWJzdHJhdGUgMi4wIEZyYW1ld29yaywgYW5kIHRoZSBPQ1cgKE9m\n' +
        'Zi1jaGFpbiB3b3JrZXIpIHdpbGwgYmUgaW5jbHVkZWQgZm9yIEFQSSBtYW5h\n' +
        'Z2UgcmVjb3Jkcy4gQXByb24gTWFya2V0IGNvbnNpc3RzIG9mIEFwcm9uIE1h\n' +
        'cmtldCBDb250cmFjdHMgYW5kIEFwcm9uIE1hcmtldCBGcm9udCBFbmQuIFRo\n' +
        'ZSBjb250cmFjdHMgd2lsbCBiZSBpbXBsZW1lbnRlZCB3aXRoIEluayEsIGFu\n' +
        'ZCB0aGUgZnJvbnQtZW5kIHdpbGwgYmUgYnVpbHQgd2l0aCBwb2xrYWRvdC5q\n' +
        'cy4KCiMjIyMgVGVhbSBJbnRlcmVzdAoKTW9zdCBvZiB0aGUgdGVhbSBtZW1i\n' +
        'ZXJzIGFyZSBEQXBwIGRldmVsb3BlcnMgd2hvIHN1ZmZlciBmcm9tIHRoZSBs\n' +
        'YWNraW5nIG9mIEV0aGVyZXVtIEFQSSBFbmRwb2ludCBhbmQgdGlnaHRseSBy\n' +
        'ZWx5IG9uIGluZnVyYS5pbyBzaW5jZSB3ZSBhcmUgbm90IGFibGUgdG8gc2V0\n' +
        'IHVwIG91ciBmdWxsIG5vZGUgZHVlIHRvIGZ1bmRzLiBBcyB3ZSBoYXZlIGtu\n' +
        'b3duLCBtb3N0IG9mIHRoZSBEQXBwIGRldmVsb3BlcnMgaGF2ZSB0aGUgc2Ft\n' +
        'ZSBlbWJhcnJhc3Npbmcgc2l0dWF0aW9uIGFzIHVzLiBBZnRlciBzaG9ja2Vk\n' +
        'IGJ5IHRoZSBhY2NpZGVudCBvZiBpbmZ1cmEuaW8sIHdlIGFyZSB3aWxsaW5n\n' +
        'IHRvIGJ1aWxkIGEgZGVjZW50cmFsaXplZCBpbmZyYXN0cnVjdHVyZSBzZXJ2\n' +
        'aWNlIG5ldHdvcmssIGFuZCB3ZSBuYW1lIGl0IHRoZSBBcHJvbiBOZXR3b3Jr\n' +
        'LgoKV2l0aCBTdWJzdHJhdGUgMi4wIEZyYW1ld29yaywgd2UgYXJlIGFibGUg\n' +
        'dG8gYnVpbGQgYSBjdXN0b21pemVkIGJsb2NrY2hhaW4gbmV0d29yayBlYXNp\n' +
        'bHksIGFuZCB3ZSBoYXZlIHRoZSBhYmlsaXR5IHRvIGludGVncmF0ZSBhbiBB\n' +
        'UEkgR2F0ZXdheSB0byBtYW5hZ2UgYmxvY2tjaGFpbiBBUEkgc2VydmljZXMg\n' +
        'aW4gQXByb24gTm9kZS4gV2l0aCB0aGUgQXByb24gTmV0d29yaywgdGhlIGJs\n' +
        'b2NrY2hhaW4gbm9kZSBydW5uZXJzIGNhbiBwcm92aWRlIEluZnJhc3RydWN0\n' +
        'dXJlIHNlcnZpY2UgZWFzaWx5IGFuZCBnZXQgcHJvZml0IHRocm91Z2ggdGhp\n' +
        'cyBkZWNlbnRyYWxpemVkIGluZnJhc3RydWN0dXJlIHNlcnZpY2VzIG5ldHdv\n' +
        'cmsuCgojIyMgUHJvamVjdCBEZXRhaWxzCgojIyMjIEFyY2hpdGVjdHVyZSAg\n' +
        'CgpUaGUgQXByb24gTmV0d29yayBjb25zaXN0cyBvZiAqKkFwcm9uIE5vZGUq\n' +
        'KiwgKipBcnBvbiBNYXJrZXQgQ29udHJhY3RzKiosICoqRGVjZW50cmFsaXpl\n' +
        'ZCBBUEkgTWFya2V0KiosIGFuZCB0aGUgKipBcHJvbiBTREsqKi4KCiFbaW1n\n' +
        'XShodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQXByb24yMDUw\n' +
        'L2dyYXBoaWNzL21haW4vQXByb24lMjBBcmNoaXRlY3R1cmUuanBnKQoKKiBU\n' +
        'aGUgQXByb24gTm9kZSBpcyB0aGUgY3VzdG9taXplZCBjaGFpbiBub2RlIGZv\n' +
        'ciB0aGUgQXByb24gbmV0d29yayBidWlsdCB3aXRoIFN1YnN0cmF0ZSAyLjAu\n' +
        'IEJlc2lkZXMgYmxvY2tjaGFpbi1yZWxhdGVkIGZlYXR1cmVzLCBpdCBjb250\n' +
        'YWlucyB0aGUgZnVsbCBmZWF0dXJlcyBvZiBhbiBBUEkgR2F0ZXdheSBpbiB0\n' +
        'aGUgZWFybHkgdmVyc2lvbnMuIEluIGZ1dHVyZSB2ZXJzaW9ucywgbW9yZSBp\n' +
        'bmZyYXN0cnVjdHVyZSBmZWF0dXJlcyB3aWxsIGJlIGFkZGVkLiBJdCBzaG91\n' +
        'bGQgYmUgcnVuIHRvZ2V0aGVyIHdpdGggdGhlIGJsb2NrY2hhaW4gbm9kZSBh\n' +
        'bmQgb3BlcmF0ZSBieSBibG9ja2NoYWluIG5vZGUgcnVubmVycy4gRm9yIGV4\n' +
        'YW1wbGUsICB0aGUgb3duZXIgb2YgdGhlIEV0aGVyZXVtIEZ1bGwgbm9kZSBj\n' +
        'YW4gc2V0IHVwIGFuIEFwcm9uIE5vZGUgdG8gaW50ZXJhY3Qgd2l0aCBoaXMg\n' +
        'RXRoZXJldW0gRnVsbCBub2RlIHRocm91Z2ggUlBDLCB0aGVuIHRoZSBEQXBw\n' +
        'IGRldmVsb3BlciBjYW4gcmV0cmlldmUgdGhlIGluZm9ybWF0aW9uIG9mIGhp\n' +
        'cyBBcHJvbiBOb2RlIGZyb20gdGhlIEFwcm9uIE5ldHdvcmssIGFuZCBjYWxs\n' +
        'IHRoZSBBUEkgbGlrZSBjYWxsaW5nIGFuIEFQSSB3aXRoIGluZnVyYS5pby4K\n' +
        'KiBUaGUgQXByb24gTWFya2V0IENvbnRyYWN0cyBtYW5hZ2UgdGhlIEFQSSBz\n' +
        'ZXJ2aWNlcyBpbmZvcm1hdGlvbiwgdGhlIHJlZ2lzdHJhdGlvbiBvZiBBUEkg\n' +
        'c2VydmljZXMsIHRoZSByZWdpc3RyYXRpb24gb2YgQVBJIHVzZXJzLCBhbmQg\n' +
        'dGhlIGJpbGxpbmcgb2YgQVBJIHVzYWdlLiBBbGwgdGhlIEFQSSBpbmZvcm1h\n' +
        'dGlvbiBpcyBzdG9yZWQgaW4gdGhlc2UgY29udHJhY3RzLiBUaGUgYmlsbGlu\n' +
        'ZyBmZWF0dXJlIGlzIGltcGxlbWVudGVkLCAgdGhlIEFQSSB1c2VycyBoYXZl\n' +
        'IHRvIHBheSAqKiRBTlQqKiB0byB1c2UgdGhlc2UgQVBJcyBhbmQgdGhlIEFQ\n' +
        'SSBvd25lcnMgd2lsbCBnZXQgcGFpZCBieSAqKiRBTlQqKi4gRXZlcnl0aGlu\n' +
        'ZyBpcyBkb25lIHRocm91Z2ggc21hcnQgY29udHJhY3RzLiAqKiRBTlQqKiBp\n' +
        'cyB0aGUgbmF0aXZlIHRva2VuIGluIEFwcm9uIE5ldHdvcmsuCiogRGVjZW50\n' +
        'cmFsaXplZCBBUEkgTWFya2V0IGxpc3RzIGFsbCB0aGUgQVBJIHNlcnZpY2Vz\n' +
        'IHJlZ2lzdGVyZWQgYW5kIGF2YWlsYWJsZSBmb3IgZGV2ZWxvcGVycyBmcm9t\n' +
        'IHRoZSBkYXRhIGluIHNtYXJ0IGNvbnRyYWN0cy4gREFwcCBkZXZlbG9wZXJz\n' +
        'IHNlYXJjaCB0aGUgQVBJIHNlcnZpY2VzIGFjY29yZGluZyB0byB0aGVpciBu\n' +
        'ZWVkcyBhbmQgY2hvb3NlIHRoZSBvbmUgd2l0aCB0aGUgcHJvcGVyIHByaWNl\n' +
        'LgoqIFRoZSBBcHJvbiBTREsgbWFrZXMgdGhlIHVzZSBvZiBBcHJvbiBOZXR3\n' +
        'b3JrIGVhc2llci4gREFwcCBkZXZlbG9wZXJzIGNhbiBpbnRlZ3JhdGUgdGhp\n' +
        'cyBTREsgaW4gdGhlaXIgYXBwIHRvIGR5bmFtaWMgc3dpdGNoIGJsb2NrY2hh\n' +
        'aW4gZW50cnktcG9pbnQgYWNjb3JkaW5nIHRvIHRoZWlyIG5lZWRzLgoKIyMj\n' +
        'IyBTdWJzdHJhdGUgLyBQb2xrYWRvdCBJbnRlZ3JhdGlvbgoKVGhlIEFwcm9u\n' +
        'IE5ldHdvcmsgY2FuIGJlIHJ1biBhcyBhIHBhcmEtY2hhaW4gb2YgUG9sa2Fk\n' +
        'b3QsIGFuZCBhbHNvIGNhbiBiZSBydW4gYXMgYW4gaW5kZXBlbmRlbnQgY2hh\n' +
        'aW4gYXBhcnQgZnJvbSBQb2xrYWRvdC4KClRoZSB3aG9sZSBuZXR3b3JrIGlz\n' +
        'IGJ1aWx0IG9uIHRvcCBvZiB0aGUgU3Vic3RhdGUgMi4wIEZyYW1ld29yaywg\n' +
        'YW5kIE9DVyAob2ZmLWNoYWluIHdvcmtlcikgaXMgdXNlZCB0byByZXBvcnQg\n' +
        'QVBJIHVzYWdlIHN0YXRpc3RpY3Mgb24gd2hpY2ggdGhlIGJpbGxpbmcgcmVs\n' +
        'aWVzLgoKQWxsIHRoZSBjb250cmFjdHMgd2lsbCBiZSBpbXBsZW1lbnRlZCB3\n' +
        'aXRoIEluayEsIGFuZCB0aGUgZnJvbnQtZW5kIG9mIERlY2VudHJhbGl6ZWQg\n' +
        'QVBJIE1hcmtldCB3aWxsIGJlIG9uIHRvcCBvZiBwb2xrYWRvdC5qcy4KCiMj\n' +
        'IyMgU2NlbmFyaW9zCgoqIE5vZGUgUnVubmVycyAgCgohW2ltZ10oaHR0cHM6\n' +
        'Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0Fwcm9uMjA1MC9ncmFwaGlj\n' +
        'cy9tYWluL0Fwcm9uJTIwTm9kZS5qcGcpCgpUaGUgYWJvdmUgZmlndXJlIHNo\n' +
        'b3dzIHRoZSByb2xlIG9mIGVhY2ggY29tcG9uZW50IGFjdCBmcm9tIHRoZSB2\n' +
        'aWV3IG9mIHRoZSBibG9ja2NoYWluIG5vZGUgb3duZXIuIFRvIHNpbXBseSB0\n' +
        'aGUgc2NlbmFyaW8sIHdlIHRha2UgYW4gZXhhbXBsZS4gVGhlIHBhcmEtY2hh\n' +
        'aW4gbm9kZSBpcyBydW5uaW5nIGF0IHRoZSBiZWdpbm5pbmcsIHRoZSBBcHJv\n' +
        'biBOb2RlIHNob3duIGFib3ZlIGlzIHNldCB1cCBieSB0aGUgb3duZXIgYnkg\n' +
        'c3Rha2luZyBzb21lICoqJEFOVCoqLCBhbmQgdGhlIEFwcm9uIE5vZGUgaXMg\n' +
        'YWNjZXNzaWJsZSBvbiB0aGUgaW50ZXJuZXQuIFRoZSBvd25lciBjYW4gY29u\n' +
        'ZmlndXJlIEFwcm9uIE5vZGUgd2l0aCB0aGUgUlBDIGVudHJ5IHBvaW50IG9m\n' +
        'IHRoZSBwYXJhLWNoYWluIG5vZGUsIEFQSSBhY2Nlc3MgZnJlcXVlbmN5LCBB\n' +
        'UEkgYWNjZXNzIGZlZSwgYW5kIG90aGVyIGxpbWl0YXRpb25zLiBBZnRlciBl\n' +
        'dmVyeXRoaW5nIGlzIGNvbmZpZ3VyZWQsIHRoZSBBcHJvbiBOb2RlIHdpbGwg\n' +
        'YmUgYWJsZSB0byBjYWxsIHRoZSBSUEMgaW50ZXJmYWNlIG9mIHBhcmEtY2hh\n' +
        'aW4sIGFuZCBEQXBwcyB3aWxsIGNhbGwgdGhlIEFQSSB0aHJvdWdoIHRoZSBB\n' +
        'cHJvbiBOb2RlLiBUaGUgQXByb24gTm9kZSBjYWxjdWxhdGVzIHRoZSBBUEkg\n' +
        'dXNhZ2Ugc3RhdGlzdGljcyBvZiBlYWNoIGNhbGxlciwgdGhlbiBzdG9yZXMg\n' +
        'dGhpcyBkYXRhIHRocm91Z2ggT0NXIChvZmYtY2hhaW4gd29ya2VyKSBvbiB0\n' +
        'aGUgY2hhaW4gZm9yIGZ1cnRoZXIgYmlsbGluZy4KCiogREFwcCBEZXZlbG9w\n' +
        'ZXJzICAKCiFbaW1nXShodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5j\n' +
        'b20vQXByb24yMDUwL2dyYXBoaWNzL21haW4vQXByb24lMjBVc2FnZS5qcGcp\n' +
        'CgpGb3IgREFwcCBkZXZlbG9wZXJzLCB0aGVyZSBhcmUgdHdvIGNvbXBvbmVu\n' +
        'dHMgdGhhdCB3aWxsIGJlIHVzZWQuIE9uZSBpcyB0aGUgRGVjZW50cmFsaXpl\n' +
        'ZCBBUEkgTWFya2V0LCB0aGUgb3RoZXIgb25lIGlzIHRoZSBBcHJvbiBTR',
      encoding: 'base64',
      _links: {
        self: 'https://api.github.com/repos/Shweta2217/webhook_dummy/contents/applications/aa4.md?ref=57f4fa33d3b9d676283ccaf27e15fc788fcdf0d7',
        git: 'https://api.github.com/repos/Shweta2217/webhook_dummy/git/blobs/656b0c39be78c4fa68bf7d028d375d6d9fb2fcc0',
        html: 'https://github.com/Shweta2217/webhook_dummy/blob/57f4fa33d3b9d676283ccaf27e15fc788fcdf0d7/applications/aa4.md'
      }
    }
  }
};

export const parsedData = {
  project: {
    id: '6e94917e-839c-4388-a41e-12848a09672a',
    user_github_id: null,
    start_date: null,
    file_name: 'aa4.md',
    payment_details: '15tv6rqswngwq1z5pim2yjmellvwnm5d4v',
    md_content:
      '# Shweta JI Network.\n' +
      ' \n' +
      '* **Team Name:** Shweta Teams\n' +
      '* **Payment Address:** 15tV6rQSwNgWQ1Z5pim2yJmELLvWNm5D4V\n' +
      '\n' +
      '## Project Overview :page_facing_up:\n' +
      '\n' +
      '### Overview\n' +
      '\n' +
      '#### Introduction\n' +
      '\n' +
      "The Apron Network's vision is to be the entry point of the Web3 World in the future. The goal of the Apron Network is to create the decentralized infrastructure for all the developers who want to build applications on top of the blockchain, the service providers who are running nodes for blockchain, and the users who are using applications based on blockchain.\n" +
      '\n' +
      'The blockchain infrastructure services are provided by seldom centralized service providers. Those service providers are commercial companies and earn profit by providing these services. In general speaking, there is no problem with such a business model that commercial companies provide infrastructure services and get paid by developers or users in the past ages. But NOT NOW. The main feature of blockchain is decentralization, while all the blockchain infrastructure services are built and maintained by commercial companies, and those systems are centralized, which is against the decentralization of blockchain. There is a potential issue of such a business model that the service providers can steal the blockchain from the community by manipulating the API accesses through their infrastructure services. Once the service providers manipulate the API accesses, there is no real blockchain anymore.\n' +
      '\n' +
      "Maybe you are still thinking that it sounds terrible but no one can prove it. Let's see the recent accident of infura.io. Almost all of the blockchain applications mainly rely on the API services from infura.io, but none of the builders of blockchain applications can imagine what will happen if infura.io manipulates the API services. Hopefully, infura.io worth our trust according to past services, and there is no manipulation found yet.\n" +
      '\n' +
      '**On Nov. 11th, 2020, the API services from infura.io are down, and the idea of Apron Network comes out.**\n' +
      '\n' +
      'The Apron Network is built by the Apron Labs powered by Substrate. It provides a Cross-chain Decentralized Infrastructure Services Network that will be used by blockchain node runners, DApp developers, the public chain community, and DApp users. Every DApp developer can discover the proper service provider for a specific blockchain through the decentralized infrastructure market on the Apron Network. The Apron Network can be run as a parachain of Polkadot.\n' +
      '\n' +
      'With the Apron Network,  the DApp developers can find their API endpoint, node runners can provide infrastructure services to get profit and all the infrastructure services will be decentralized on the two-layers infrastructure service network. The Apron Network will guaranty there is no infura.io accident anymore!\n' +
      '\n' +
      '#### Integration\n' +
      '\n' +
      'The Apron Network can be run as a parachain on Polkadot, or an independent chain. The Apron Network contains Apron Node and Apron Market. The Apron Node is built with Substrate 2.0 Framework, and the OCW (Off-chain worker) will be included for API manage records. Apron Market consists of Apron Market Contracts and Apron Market Front End. The contracts will be implemented with Ink!, and the front-end will be built with polkadot.js.\n' +
      '\n' +
      '#### Team Interest\n' +
      '\n' +
      'Most of the team members are DApp developers who suffer from the lacking of Ethereum API Endpoint and tightly rely on infura.io since we are not able to set up our full node due to funds. As we have known, most of the DApp developers have the same embarrassing situation as us. After shocked by the accident of infura.io, we are willing to build a decentralized infrastructure service network, and we name it the Apron Network.\n' +
      '\n' +
      'With Substrate 2.0 Framework, we are able to build a customized blockchain network easily, and we have the ability to integrate an API Gateway to manage blockchain API services in Apron Node. With the Apron Network, the blockchain node runners can provide Infrastructure service easily and get profit through this decentralized infrastructure services network.\n' +
      '\n' +
      '### Project Details\n' +
      '\n' +
      '#### Architecture  \n' +
      '\n' +
      'The Apron Network consists of **Apron Node**, **Arpon Market Contracts**, **Decentralized API Market**, and the **Apron SDK**.\n' +
      '\n' +
      '![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Architecture.jpg)\n' +
      '\n' +
      '* The Apron Node is the customized chain node for the Apron network built with Substrate 2.0. Besides blockchain-related features, it contains the full features of an API Gateway in the early versions. In future versions, more infrastructure features will be added. It should be run together with the blockchain node and operate by blockchain node runners. For example,  the owner of the Ethereum Full node can set up an Apron Node to interact with his Ethereum Full node through RPC, then the DApp developer can retrieve the information of his Apron Node from the Apron Network, and call the API like calling an API with infura.io.\n' +
      '* The Apron Market Contracts manage the API services information, the registration of API services, the registration of API users, and the billing of API usage. All the API information is stored in these contracts. The billing feature is implemented,  the API users have to pay **$ANT** to use these APIs and the API owners will get paid by **$ANT**. Everything is done through smart contracts. **$ANT** is the native token in Apron Network.\n' +
      '* Decentralized API Market lists all the API services registered and available for developers from the data in smart contracts. DApp developers search the API services according to their needs and choose the one with the proper price.\n' +
      '* The Apron SDK makes the use of Apron Network easier. DApp developers can integrate this SDK in their app to dynamic switch blockchain entry-point according to their needs.\n' +
      '\n' +
      '#### Substrate / Polkadot Integration\n' +
      '\n' +
      'The Apron Network can be run as a para-chain of Polkadot, and also can be run as an independent chain apart from Polkadot.\n' +
      '\n' +
      'The whole network is built on top of the Substate 2.0 Framework, and OCW (off-chain worker) is used to report API usage statistics on which the billing relies.\n' +
      '\n' +
      'All the contracts will be implemented with Ink!, and the front-end of Decentralized API Market will be on top of polkadot.js.\n' +
      '\n' +
      '#### Scenarios\n' +
      '\n' +
      '* Node Runners  \n' +
      '\n' +
      '![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Node.jpg)\n' +
      '\n' +
      'The above figure shows the role of each component act from the view of the blockchain node owner. To simply the scenario, we take an example. The para-chain node is running at the beginning, the Apron Node shown above is set up by the owner by staking some **$ANT**, and the Apron Node is accessible on the internet. The owner can configure Apron Node with the RPC entry point of the para-chain node, API access frequency, API access fee, and other limitations. After everything is configured, the Apron Node will be able to call the RPC interface of para-chain, and DApps will call the API through the Apron Node. The Apron Node calculates the API usage statistics of each caller, then stores this data through OCW (off-chain worker) on the chain for further billing.\n' +
      '\n' +
      '* DApp Developers  \n' +
      '\n' +
      '![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Usage.jpg)\n' +
      '\n' +
      'For DApp developers, there are two components that will be used. One is the Decentralized API Market, the other one is the Apron SDK. Firstly, DApp developers search the API services in the API service repositories ( which is part of the Decentralized API Market) on the webpage. After finding the proper API service, the DApp developer will generate an API access key with the help of Apron Market Contracts. Finally, the DApp developer develops the DApp with the API access key to use the related API services. Of course, the DApp developer should pay the fee of using the API services according to the fee addressed by the API service provider.\n' +
      '\n' +
      '#### Interface Specification\n' +
      '\n' +
      'The function provided by the pallet to report API usage statistics data is reportAPIUsage.\n' +
      '\n' +
      '```\n' +
      '1. reportAPIUsage\n' +
      '\n' +
      '- desc: Report the API usage statistics from API Gateway data.\n' +
      '- params: API Key\n' +
      '- return: the calls number\n' +
      '```\n' +
      '\n' +
      '### Ecosystem Fit\n' +
      '\n' +
      'Infura.io is the typical infrastructure services provider that is totally centralized.\n' +
      '\n' +
      'The Apron Network provides exactly the same API services as infura.io but in a decentralized way, thanks to Substrate 2.0 Framework which let us only focused on the logic on top of blockchain rather than re-develop a new blockchain. In the future, the Apron Network will provide a decentralized infrastructure services network.\n' +
      '\n' +
      '## Team :busts_in_silhouette:\n' +
      '\n' +
      '### Team members\n' +
      '\n' +
      '* Toney - CTO/Project Lead  \n' +
      '* Junjun - Full-stack Developer  \n' +
      '\n' +
      '### Contact\n' +
      '\n' +
      '- <https://apron.network>\n' +
      '\n' +
      '### Legal Structure\n' +
      '\n' +
      'No Legal Entity\n' +
      '\n' +
      "### Team's experience\n" +
      '\n' +
      'Toney\n' +
      '\n' +
      '* Over 13 years of experiences in Software Development\n' +
      '* Software Engineer in MS\n' +
      '* Mobile Game Developer  \n' +
      '* Blockchain Game Developer  \n' +
      '* The Chief Tech Officier of the team which wins TRON Accelerator 2018 Game Rewards  \n' +
      '\n' +
      'Junjun\n' +
      '\n' +
      '* Over 15 years of experiences in Software Development\n' +
      '* Former Senior Software Engineer in Lucent\n' +
      '* DApp Developer  \n' +
      '* Full-stack Developer\n' +
      '\n' +
      '### Team Code Repos\n' +
      '\n' +
      '* Apron Labs: <https://github.com/apron-network>\n' +
      '\n' +
      '### Team LinkedIn Profiles\n' +
      '\n' +
      '* [Toney](https://www.linkedin.com/in/yi-sui-297a9223/)\n' +
      '\n' +
      '## Development Roadmap :nut_and_bolt:\n' +
      '\n' +
      '### Overview\n' +
      '\n' +
      '* **Total Estimated Duration:** 3 months\n' +
      '* **Full-time equivalent (FTE):** 4\n' +
      '* **Total Costs:** 0.73 BTC\n' +
      '\n' +
      '### Milestone 1 Example — Implement Substrate Modules\n' +
      '\n' +
      '* **Estimated Duration:** 3 months\n' +
      '* **Full-time Equivalent (FTE):** 4\n' +
      '* **Costs:** 0.73 BTC\n' +
      '\n' +
      'In the first milestone, the features for the PoC will be implemented and tested by limited users.\n' +
      '\n' +
      'The following components will be included:\n' +
      '\n' +
      '* Apron Node  \n' +
      '* Apron Market Contracts  \n' +
      '* Decentralized API Market / Front End\n' +
      '* Apron SDK\n' +
      '\n' +
      '| Number | Deliverable | Specification |\n' +
      '| ------------- | ------------- | ------------- |\n' +
      '| 0a. | License | Apache 2.0',
    md_link:
      'https://raw.githubusercontent.com/Shweta2217/webhook_dummy/b19e02e39e5c7de88c5d8565df7833c5bd6bf137/applications/aa4.md',
    project_name: 'shweta ji network.',
    status: null,
    total_cost: { amount: '0.73', currency: 'btc' },
    total_duration: '3 months',
    team_id: '48142abf-85fd-4062-8e56-c719cb59bcce',
    level: '1',
    html_url:
      'https://github.com/Shweta2217/webhook_dummy/blob/b19e02e39e5c7de88c5d8565df7833c5bd6bf137/applications/aa4.md',
    legal_structure: { registered_address: '', registered_legal_entity: '' },
    totalMilestones: 1,
    milestones: []
  },
  team: {
    id: '48142abf-85fd-4062-8e56-c719cb59bcce',
    name: 'shweta teams',
    members: ['Toney - CTO/Project Lead', 'Junjun - Full-stack Developer'],
    projects: [[Object]]
  },
  milestones: [{ 'estimated duration': '3 months', costs: '0.73 btc' }],
  proposal: {
    id: '3fe9500e-fcd7-49c1-8ac2-8560fb9545c6',
    repos: ['Apron Labs: <https://github.com/apron-network>'],
    md_link:
      'https://raw.githubusercontent.com/Shweta2217/webhook_dummy/b19e02e39e5c7de88c5d8565df7833c5bd6bf137/applications/aa4.md',
    proposal_name: 'shweta ji network.',
    team_name: 'shweta teams'
  }
};

export const dbResponse = {
  saveProjectRes: {
    id: 'cdc345d0-89b1-4e41-a058-1ed8e3e84641',
    user_github_id: null,
    file_name: 'aa3.md',
    start_date: '2023 -09 - 29T09: 52: 52.000Z',
    payment_details: '15tv6rqswngwq1z5pim2yjmellvwnm5d4v',
    md_content:
      '# yoyoyo...\n' +
      ' \n' +
      '* **Team Name:** yoyo And Team\n' +
      '* **Payment Address:** 15tV6rQSwNgWQ1Z5pim2yJmELLvWNm5D4V\n' +
      '\n' +
      '## Project Overview :page_facing_up:\n' +
      '\n' +
      '### Overview\n' +
      '\n' +
      '#### Introduction\n' +
      '\n' +
      "The Apron Network's vision is to be the entry point of the Web3 World in the future. The goal of the Apron Network is to create the decentralized infrastructure for all the developers who want to build applications on top of the blockchain, the service providers who are running nodes for blockchain, and the users who are using applications based on blockchain.\n" +
      '\n' +
      'The blockchain infrastructure services are provided by seldom centralized service providers. Those service providers are commercial companies and earn profit by providing these services. In general speaking, there is no problem with such a business model that commercial companies provide infrastructure services and get paid by developers or users in the past ages. But NOT NOW. The main feature of blockchain is decentralization, while all the blockchain infrastructure services are built and maintained by commercial companies, and those systems are centralized, which is against the decentralization of blockchain. There is a potential issue of such a business model that the service providers can steal the blockchain from the community by manipulating the API accesses through their infrastructure services. Once the service providers manipulate the API accesses, there is no real blockchain anymore.\n' +
      '\n' +
      "Maybe you are still thinking that it sounds terrible but no one can prove it. Let's see the recent accident of infura.io. Almost all of the blockchain applications mainly rely on the API services from infura.io, but none of the builders of blockchain applications can imagine what will happen if infura.io manipulates the API services. Hopefully, infura.io worth our trust according to past services, and there is no manipulation found yet.\n" +
      '\n' +
      '**On Nov. 11th, 2020, the API services from infura.io are down, and the idea of Apron Network comes out.**\n' +
      '\n' +
      'The Apron Network is built by the Apron Labs powered by Substrate. It provides a Cross-chain Decentralized Infrastructure Services Network that will be used by blockchain node runners, DApp developers, the public chain community, and DApp users. Every DApp developer can discover the proper service provider for a specific blockchain through the decentralized infrastructure market on the Apron Network. The Apron Network can be run as a parachain of Polkadot.\n' +
      '\n' +
      'With the Apron Network,  the DApp developers can find their API endpoint, node runners can provide infrastructure services to get profit and all the infrastructure services will be decentralized on the two-layers infrastructure service network. The Apron Network will guaranty there is no infura.io accident anymore!\n' +
      '\n' +
      '#### Integration\n' +
      '\n' +
      'The Apron Network can be run as a parachain on Polkadot, or an independent chain. The Apron Network contains Apron Node and Apron Market. The Apron Node is built with Substrate 2.0 Framework, and the OCW (Off-chain worker) will be included for API manage records. Apron Market consists of Apron Market Contracts and Apron Market Front End. The contracts will be implemented with Ink!, and the front-end will be built with polkadot.js.\n' +
      '\n' +
      '#### Team Interest\n' +
      '\n' +
      'Most of the team members are DApp developers who suffer from the lacking of Ethereum API Endpoint and tightly rely on infura.io since we are not able to set up our full node due to funds. As we have known, most of the DApp developers have the same embarrassing situation as us. After shocked by the accident of infura.io, we are willing to build a decentralized infrastructure service network, and we name it the Apron Network.\n' +
      '\n' +
      'With Substrate 2.0 Framework, we are able to build a customized blockchain network easily, and we have the ability to integrate an API Gateway to manage blockchain API services in Apron Node. With the Apron Network, the blockchain node runners can provide Infrastructure service easily and get profit through this decentralized infrastructure services network.\n' +
      '\n' +
      '### Project Details\n' +
      '\n' +
      '#### Architecture  \n' +
      '\n' +
      'The Apron Network consists of **Apron Node**, **Arpon Market Contracts**, **Decentralized API Market**, and the **Apron SDK**.\n' +
      '\n' +
      '![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Architecture.jpg)\n' +
      '\n' +
      '* The Apron Node is the customized chain node for the Apron network built with Substrate 2.0. Besides blockchain-related features, it contains the full features of an API Gateway in the early versions. In future versions, more infrastructure features will be added. It should be run together with the blockchain node and operate by blockchain node runners. For example,  the owner of the Ethereum Full node can set up an Apron Node to interact with his Ethereum Full node through RPC, then the DApp developer can retrieve the information of his Apron Node from the Apron Network, and call the API like calling an API with infura.io.\n' +
      '* The Apron Market Contracts manage the API services information, the registration of API services, the registration of API users, and the billing of API usage. All the API information is stored in these contracts. The billing feature is implemented,  the API users have to pay **$ANT** to use these APIs and the API owners will get paid by **$ANT**. Everything is done through smart contracts. **$ANT** is the native token in Apron Network.\n' +
      '* Decentralized API Market lists all the API services registered and available for developers from the data in smart contracts. DApp developers search the API services according to their needs and choose the one with the proper price.\n' +
      '* The Apron SDK makes the use of Apron Network easier. DApp developers can integrate this SDK in their app to dynamic switch blockchain entry-point according to their needs.\n' +
      '\n' +
      '#### Substrate / Polkadot Integration\n' +
      '\n' +
      'The Apron Network can be run as a para-chain of Polkadot, and also can be run as an independent chain apart from Polkadot.\n' +
      '\n' +
      'The whole network is built on top of the Substate 2.0 Framework, and OCW (off-chain worker) is used to report API usage statistics on which the billing relies.\n' +
      '\n' +
      'All the contracts will be implemented with Ink!, and the front-end of Decentralized API Market will be on top of polkadot.js.\n' +
      '\n' +
      '#### Scenarios\n' +
      '\n' +
      '* Node Runners  \n' +
      '\n' +
      '![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Node.jpg)\n' +
      '\n' +
      'The above figure shows the role of each component act from the view of the blockchain node owner. To simply the scenario, we take an example. The para-chain node is running at the beginning, the Apron Node shown above is set up by the owner by staking some **$ANT**, and the Apron Node is accessible on the internet. The owner can configure Apron Node with the RPC entry point of the para-chain node, API access frequency, API access fee, and other limitations. After everything is configured, the Apron Node will be able to call the RPC interface of para-chain, and DApps will call the API through the Apron Node. The Apron Node calculates the API usage statistics of each caller, then stores this data through OCW (off-chain worker) on the chain for further billing.\n' +
      '\n' +
      '* DApp Developers  \n' +
      '\n' +
      '![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Usage.jpg)\n' +
      '\n' +
      'For DApp developers, there are two components that will be used. One is the Decentralized API Market, the other one is the Apron SDK. Firstly, DApp developers search the API services in the API service repositories ( which is part of the Decentralized API Market) on the webpage. After finding the proper API service, the DApp developer will generate an API access key with the help of Apron Market Contracts. Finally, the DApp developer develops the DApp with the API access key to use the related API services. Of course, the DApp developer should pay the fee of using the API services according to the fee addressed by the API service provider.\n' +
      '\n' +
      '#### Interface Specification\n' +
      '\n' +
      'The function provided by the pallet to report API usage statistics data is reportAPIUsage.\n' +
      '\n' +
      '```\n' +
      '1. reportAPIUsage\n' +
      '\n' +
      '- desc: Report the API usage statistics from API Gateway data.\n' +
      '- params: API Key\n' +
      '- return: the calls number\n' +
      '```\n' +
      '\n' +
      '### Ecosystem Fit\n' +
      '\n' +
      'Infura.io is the typical infrastructure services provider that is totally centralized.\n' +
      '\n' +
      'The Apron Network provides exactly the same API services as infura.io but in a decentralized way, thanks to Substrate 2.0 Framework which let us only focused on the logic on top of blockchain rather than re-develop a new blockchain. In the future, the Apron Network will provide a decentralized infrastructure services network.\n' +
      '\n' +
      '## Team :busts_in_silhouette:\n' +
      '\n' +
      '### Team members\n' +
      '\n' +
      '* Toney - CTO/Project Lead  \n' +
      '* Junjun - Full-stack Developer  \n' +
      '\n' +
      '### Contact\n' +
      '\n' +
      '- <https://apron.network>\n' +
      '\n' +
      '### Legal Structure\n' +
      '\n' +
      'No Legal Entity\n' +
      '\n' +
      "### Team's experience\n" +
      '\n' +
      'Toney\n' +
      '\n' +
      '* Over 13 years of experiences in Software Development\n' +
      '* Software Engineer in MS\n' +
      '* Mobile Game Developer  \n' +
      '* Blockchain Game Developer  \n' +
      '* The Chief Tech Officier of the team which wins TRON Accelerator 2018 Game Rewards  \n' +
      '\n' +
      'Junjun\n' +
      '\n' +
      '* Over 15 years of experiences in Software Development\n' +
      '* Former Senior Software Engineer in Lucent\n' +
      '* DApp Developer  \n' +
      '* Full-stack Developer\n' +
      '\n' +
      '### Team Code Repos\n' +
      '\n' +
      '* Apron Labs: <https://github.com/apron-network>\n' +
      '\n' +
      '### Team LinkedIn Profiles\n' +
      '\n' +
      '* [Toney](https://www.linkedin.com/in/yi-sui-297a9223/)\n' +
      '\n' +
      '## Development Roadmap :nut_and_bolt:\n' +
      '\n' +
      '### Overview\n' +
      '\n' +
      '* **Total Estimated Duration:** 3 months\n' +
      '* **Full-time equivalent (FTE):** 4\n' +
      '* **Total Costs:** 0.73 BTC\n' +
      '\n' +
      '### Milestone 1 Example — Implement Substrate Modules\n' +
      '\n' +
      '* **Estimated Duration:** 3 months\n' +
      '* **Full-time Equivalent (FTE):** 4\n' +
      '* **Costs:** 0.73 BTC\n' +
      '\n' +
      'In the first milestone, the features for the PoC will be implemented and tested by limited users.\n' +
      '\n' +
      'The following components will be included:\n' +
      '\n' +
      '* Apron Node  \n' +
      '* Apron Market Contracts  \n' +
      '* Decentralized API Market / Front End\n' +
      '* Apron SDK\n' +
      '\n' +
      '| Number | Deliverable | Specification |\n' +
      '| ------------- | ------------- | ------------- |\n' +
      '| 0a. | License | Apache 2.0 |\n' +
      '| 0b.',
    md_link:
      'https://github.com/Shweta2217/webhook_dummy/raw/349922cb951ffb49bd81eca7c83a0e403cda2ada/applications%2Faa3.md',
    project_name: 'yoyoyo...',
    status: 'active',
    total_cost: { amount: '0.73', currency: 'btc' },
    total_duration: '3 months',
    team_id: '389b5a79-881e-4975-8713-cc3d223572ca',
    level: '1',
    legal_structure: { registered_address: '', registered_legal_entity: '' },
    milestones: [],
    totalMilestones: 1
  },
  saveTeamsRes: {
    id: '389b5a79-881e-4975-8713-cc3d223572ca',
    name: 'yoyo and team',
    members: ['Toney - CTO/Project Lead', 'Junjun - Full-stack Developer'],
    projects: [
      {
        projectId: 'cdc345d0-89b1-4e41-a058-1ed8e3e84641',
        status: null
      }
    ]
  },
  proposalRes: [
    {
      id: 'c08cae11-d748-48ab-939f-a747e423c295',
      status: 'open',
      repos: ['Apron Labs: <https://github.com/apron-network>'],
      md_link:
        'https://github.com/Shweta2217/webhook_dummy/raw/68c1370f81aad04ddcc86cd303435e0f61c5c200/applications%2Faa3.md',
      team_name: 'yoyo and team',
      file_name: 'aa3.md',
      created_at: '2023-09-29T10:x01:13Z',
      updated_at: '2023-09-29T10:01:13Z',
      proposal_name: 'yoyoyo',
      milestones: [[Object]],
      pr_link: 'https://github.com/Shweta2217/webhook_dummy/pull/101',
      extrected_proposal_data:
        '{"project":{"id":"cdc345d0-89b1-4e41-a058-1ed8e3e84641","user_github_id":null,"start_date":null,"file_name":"aa3.md","payment_details":"15tv6rqswngwq1z5pim2yjmellvwnm5d4v","md_content":"# yoyoyo...\\n \\n* **Team Name:** yoyo And Team\\n* **Payment Address:** 15tV6rQSwNgWQ1Z5pim2yJmELLvWNm5D4V\\n\\n## Project Overview :page_facing_up:\\n\\n### Overview\\n\\n#### Introduction\\n\\nThe Apron Network\'s vision is to be the entry point of the Web3 World in the future. The goal of the Apron Network is to create the decentralized infrastructure for all the developers who want to build applications on top of the blockchain, the service providers who are running nodes for blockchain, and the users who are using applications based on blockchain.\\n\\nThe blockchain infrastructure services are provided by seldom centralized service providers. Those service providers are commercial companies and earn profit by providing these services. In general speaking, there is no problem with such a business model that commercial companies provide infrastructure services and get paid by developers or users in the past ages. But NOT NOW. The main feature of blockchain is decentralization, while all the blockchain infrastructure services are built and maintained by commercial companies, and those systems are centralized, which is against the decentralization of blockchain. There is a potential issue of such a business model that the service providers can steal the blockchain from the community by manipulating the API accesses through their infrastructure services. Once the service providers manipulate the API accesses, there is no real blockchain anymore.\\n\\nMaybe you are still thinking that it sounds terrible but no one can prove it. Let\'s see the recent accident of infura.io. Almost all of the blockchain applications mainly rely on the API services from infura.io, but none of the builders of blockchain applications can imagine what will happen if infura.io manipulates the API services. Hopefully, infura.io worth our trust according to past services, and there is no manipulation found yet.\\n\\n**On Nov. 11th, 2020, the API services from infura.io are down, and the idea of Apron Network comes out.**\\n\\nThe Apron Network is built by the Apron Labs powered by Substrate. It provides a Cross-chain Decentralized Infrastructure Services Network that will be used by blockchain node runners, DApp developers, the public chain community, and DApp users. Every DApp developer can discover the proper service provider for a specific blockchain through the decentralized infrastructure market on the Apron Network. The Apron Network can be run as a parachain of Polkadot.\\n\\nWith the Apron Network,  the DApp developers can find their API endpoint, node runners can provide infrastructure services to get profit and all the infrastructure services will be decentralized on the two-layers infrastructure service network. The Apron Network will guaranty there is no infura.io accident anymore!\\n\\n#### Integration\\n\\nThe Apron Network can be run as a parachain on Polkadot, or an independent chain. The Apron Network contains Apron Node and Apron Market. The Apron Node is built with Substrate 2.0 Framework, and the OCW (Off-chain worker) will be included for API manage records. Apron Market consists of Apron Market Contracts and Apron Market Front End. The contracts will be implemented with Ink!, and the front-end will be built with polkadot.js.\\n\\n#### Team Interest\\n\\nMost of the team members are DApp developers who suffer from the lacking of Ethereum API Endpoint and tightly rely on infura.io since we are not able to set up our full node due to funds. As we have known, most of the DApp developers have the same embarrassing situation as us. After shocked by the accident of infura.io, we are willing to build a decentralized infrastructure service network, and we name it the Apron Network.\\n\\nWith Substrate 2.0 Framework, we are able to build a customized blockchain network easily, and we have the ability to integrate an API Gateway to manage blockchain API services in Apron Node. With the Apron Network, the blockchain node runners can provide Infrastructure service easily and get profit through this decentralized infrastructure services network.\\n\\n### Project Details\\n\\n#### Architecture  \\n\\nThe Apron Network consists of **Apron Node**, **Arpon Market Contracts**, **Decentralized API Market**, and the **Apron SDK**.\\n\\n![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Architecture.jpg)\\n\\n* The Apron Node is the customized chain node for the Apron network built with Substrate 2.0. Besides blockchain-related features, it contains the full features of an API Gateway in the early versions. In future versions, more infrastructure features will be added. It should be run together with the blockchain node and operate by blockchain node runners. For example,  the owner of the Ethereum Full node can set up an Apron Node to interact with his Ethereum Full node through RPC, then the DApp developer can retrieve the information of his Apron Node from the Apron Network, and call the API like calling an API with infura.io.\\n* The Apron Market Contracts manage the API services information, the registration of API services, the registration of API users, and the billing of API usage. All the API information is stored in these contracts. The billing feature is implemented,  the API users have to pay **$ANT** to use these APIs and the API owners will get paid by **$ANT**. Everything is done through smart contracts. **$ANT** is the native token in Apron Network.\\n* Decentralized API Market lists all the API services registered and available for developers from the data in smart contracts. DApp developers search the API services according to their needs and choose the one with the proper price.\\n* The Apron SDK makes the use of Apron Network easier. DApp developers can integrate this SDK in their app to dynamic switch blockchain entry-point according to their needs.\\n\\n#### Substrate / Polkadot Integration\\n\\nThe Apron Network can be run as a para-chain of Polkadot, and also can be run as an independent chain apart from Polkadot.\\n\\nThe whole network is built on top of the Substate 2.0 Framework, and OCW (off-chain worker) is used to report API usage statistics on which the billing relies.\\n\\nAll the contracts will be implemented with Ink!, and the front-end of Decentralized API Market will be on top of polkadot.js.\\n\\n#### Scenarios\\n\\n* Node Runners  \\n\\n![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Node.jpg)\\n\\nThe above figure shows the role of each component act from the view of the blockchain node owner. To simply the scenario, we take an example. The para-chain node is running at the beginning, the Apron Node shown above is set up by the owner by staking some **$ANT**, and the Apron Node is accessible on the internet. The owner can configure Apron Node with the RPC entry point of the para-chain node, API access frequency, API access fee, and other limitations. After everything is configured, the Apron Node will be able to call the RPC interface of para-chain, and DApps will call the API through the Apron Node. The Apron Node calculates the API usage statistics of each caller, then stores this data through OCW (off-chain worker) on the chain for further billing.\\n\\n* DApp Developers  \\n\\n![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Usage.jpg)\\n\\nFor DApp developers, there are two components that will be used. One is the Decentralized API Market, the other one is the Apron SDK. Firstly, DApp developers search the API services in the API service repositories ( which is part of the Decentralized API Market) on the webpage. After finding the proper API service, the DApp developer will generate an API access key with the help of Apron Market Contracts. Finally, the DApp developer develops the DApp with the API access key to use the related API services. Of course, the DApp developer should pay the fee of using the API services according to the fee addressed by the API service provider.\\n\\n#### Interface Specification\\n\\nThe function provided by the pallet to report API usage statistics data is reportAPIUsage.\\n\\n```\\n1. reportAPIUsage\\n\\n- desc: Report the API usage statistics from API Gateway data.\\n- params: API Key\\n- return: the calls number\\n```\\n\\n### Ecosystem Fit\\n\\nInfura.io is the typical infrastructure services provider that is totally centralized.\\n\\nThe Apron Network provides exactly the same API services as infura.io but in a decentralized way, thanks to Substrate 2.0 Framework which let us only focused on the logic on top of blockchain rather than re-develop a new blockchain. In the future, the Apron Network will provide a decentralized infrastructure services network.\\n\\n## Team :busts_in_silhouette:\\n\\n### Team members\\n\\n* Toney - CTO/Project Lead  \\n* Junjun - Full-stack Developer  \\n\\n### Contact\\n\\n- <https://apron.network>\\n\\n### Legal Structure\\n\\nNo Legal Entity\\n\\n### Team\'s experience\\n\\nToney\\n\\n* Over 13 years of experiences in Software Development\\n* Software Engineer in MS\\n* Mobile Game Developer  \\n* Blockchain Game Developer  \\n* The Chief Tech Officier of the team which wins TRON Accelerator 2018 Game Rewards  \\n\\nJunjun\\n\\n* Over 15 years of experiences in Software Development\\n* Former Senior Software Engineer in Lucent\\n* DApp Developer  \\n* Full-stack Developer\\n\\n### Team Code Repos\\n\\n* Apron Labs: <https://github.com/apron-network>\\n\\n### Team LinkedIn Profiles\\n\\n* [Toney](https://www.linkedin.com/in/yi-sui-297a9223/)\\n\\n## Development Roadmap :nut_and_bolt:\\n\\n### Overview\\n\\n* **Total Estimated Duration:** 3 months\\n* **Full-time equivalent (FTE):** 4\\n* **Total Costs:** 0.73 BTC\\n\\n### Milestone 1 Example — Implement Substrate Modules\\n\\n* **Estimated Duration:** 3 months\\n* **Full-time Equivalent (FTE):** 4\\n* **Costs:** 0.73 BTC\\n\\nIn the first milestone, the features for the PoC will be implemented and tested by limited users.\\n\\nThe following components will be included:\\n\\n* Apron Node  \\n* Apron Market Contracts  \\n* Decentralized API Market / Front End\\n* Apron SDK\\n\\n| Number | Deliverable | Specification |\\n| ------------- | ------------- | ------------- |\\n| 0a. | License | Apache 2.0 |\\n| 0b. | Documentation | The documentation will be provided to show the whole achitecture of the Apron Network. |\\n| 0c. | Testing Guide | The testing guide will be provided to test each component. |\\n| 1. | Apron Node Repo | We will create a customized chain node with Substrate 2.0 Framework, it will contains the OCW module to report API usage statistics on-chain. |\\n| 2. | Apron Market Contracts Repo | The contracts will be implemented with Ink!, and it will handle all the API services related functions such as 1) Staking tokens to register API service for node runner, 2) Register and unregister API service for node runner, 3) Define the price of API service for node runner, 4) Apply API service access key for node runner and DApp developers, 5) Billing System of the API usage for node runner and DApp developers, 6)Interface to integrate with a DAO to solve dispute between node runner and DApp developer|\\n| 3. | Decentralized API Market / Front End Repo | It\'s a webpage working with Arpon Network, it\'s implemented based on polkadot.js as planned. |\\n| 4. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |\\n| 5. | Tutorial | We will write an tutorial about how to use Apron Network. |\\n| 6. | Article | We will write an article published on media channels. |\\n| 7. | DAO | A Apron DAO will be created to handle the governance of the Decentralized API Market. |\\n\\n## Future Plans\\n\\nCommunity Plan\\n\\n* Hire 3 more developers.  \\n* Hire 1 marketing adviser.  \\n* Recruit more contributors involved in our project.  \\n* Join Polkadot related events.  \\n* Bounty Program.  \\n* Publish articles on media channels to expose the Apron Network.  \\n\\nDevelopment Plan\\n\\n* The Apron Network will run as a parachain of the Kusama.  \\n* Support Kusama Node.  \\n* In phase 1, our goal is to achieve all the designed functions.  \\n* In phase 2, improve the stability of the Apron Network.\\n* In phase 3, provide decentralized quick node services.\\n* Finally, our goal is to provide the infrastructure services network.\\n\\n## Additional Information :heavy_plus_sign:\\n\\nCurrently we just start the first design of the Apron Network.\\n\\nThe project repo: <https://github.com/apron-network>\\n","md_link":"https://github.com/Shweta2217/webhook_dummy/raw/349922cb951ffb49bd81eca7c83a0e403cda2ada/applications%2Faa3.md","project_name":"yoyoyo...","status":null,"total_cost":{"amount":"0.73","currency":"btc"},"total_duration":"3 months","team_id":"389b5a79-881e-4975-8713-cc3d223572ca","level":"1","legal_structure":{"registered_address":"","registered_legal_entity":""},"totalMilestones":1,"milestones":[]},"team":{"id":"389b5a79-881e-4975-8713-cc3d223572ca","name":"yoyo and team","members":["Toney - CTO/Project Lead","Junjun - Full-stack Developer"],"projects":[{"projectId":"cdc345d0-89b1-4e41-a058-1ed8e3e84641","status":null}]}}',
      assignees: [],
      user_github_details: [[Object]],
      reviewers: []
    }
  ],
  updateRes: {
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1
  }
};

export const pullrequestOtherData = {
  reviewerData: {
    pull_request: {
      requested_reviewers: [
        {
          login: 'Shweta2217',
          id: 86247988,
          node_id: 'MDQ6VXNlcjg2MjQ3OTg4',
          avatar_url: 'https://avatars.githubusercontent.com/u/86247988?v=4'
        },
        {
          login: 'rahulsaharan10',
          id: 104487199,
          node_id: 'U_kgDOBjpZHw',
          avatar_url: 'https://avatars.githubusercontent.com/u/104487199?v=4'
        }
      ]
    },
    html_url: 'https://github.com/Shweta2217/webhook_dummy/pull/89'
  }
};
