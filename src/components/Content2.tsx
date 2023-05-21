import React from 'react';
import { Button, TitleHeader, TwoByTwoCards, OneByTwoTextImage, SimpleSection, OneByFourCards, Footer } from 'your-component-library'; // Adjust this line to import components from your library

// Header
export const HEADER: React.FC = () => (
    <TitleHeader
        title="Welcome to Logion"
        text="Logion provides blockchain infrastructure aimed at fostering safe digital ownership. Offering legally sound, certified, and user-friendly solutions."
        buttons={
            <>
                <Button label="Learn More" link="#about" />
                <Button label="Join Us" link="#contact" />
            </>
        }
    />
);

// Main
export const MAIN: React.FC = () => (
    <>
        <TwoByTwoCards
            title="Embracing the Future with Logion"
            card1={{
                image: {
                    fileName: "media/legal_protection.png",
                    alt: "blockchain",
                    height: "129px",
                },
                title: "Decentralized Legal Protection",
                text: "We provide an infrastructure that protects digital assets and related transactions, leveraging a decentralized network of legal officers."
            }}
            card2={{
                image: {
                    fileName: "media/legal_officers.png",
                    alt: "blockchain",
                    height: "129px",
                },
                title: "Network of Legal Officers",
                text: "With Logion, legal officers serve as decentralized Oracles, creating and managing legally binding transactions on the blockchain."
            }}
            card3={{
                image: {
                    fileName: "media/verified_issuers.png",
                    alt: "blockchain",
                    height: "129px",
                },
                title: "Verified Issuers Network",
                text: "Professionals across diverse fields can join Logion to record their legally binding work and become part of a decentralized network of real-world Oracles."
            }}
            card4={{
                image: {
                    fileName: "media/zkp.png",
                    alt: "blockchain",
                    height: "129px",
                },
                title: "ZKP Evidence System",
                text: "Our platform provides proof of records without revealing the content, ensuring the preservation of privacy and confidentiality."
            }}
            cardsHeight="375px" 
        />

        <OneByTwoTextImage
            title="Fostering the WEB 3.0"
            paragraphs={
                <>
                    <p>Logion is transforming the digital world by introducing legal protection to WEB3 transactions.</p>
                    <p>As the only public blockchain infrastructure, we assure data integrity and asset protection.</p>
                    <p>With us, you can be confident that your digital transactions are secure and legally bound.</p>
                </>
            }
            images={
                <>
                    <Image
                        fileName="media/world.png"
                        alt="world image"
                        width="100%"
                    />
                </>
            }
            theme="bright"
        />

        <SimpleSection
            paragraphs={
                <>
                    <p>Our protection derives from an institutional and independent network of legal officers. They operate the blockchain protocol, guarantee the compliance of every transaction, and serve as the point of contact for the enforcement of the legal rights attached to them.</p>
                </>
            }
        />

        <OneByFourCards
            title="Legal Officers at Logion"
            // Card 1 to 4, etc...
        />
    </>
);

// Footer
export const FOOTER: React.FC = () => (
    <Footer 
        text="© 2023 Logion. All rights reserved."
        links={
            <>
                <a href="#privacy-policy">Privacy Policy</a>
                <a href="#terms-of-service">Terms of Service</a>
            </>
        }
    />
);

// Complete Page
export const LandingPage: React.FC = () => (
    <>
        <HEADER />
        <MAIN />
        <FOOTER />
    </>
);
