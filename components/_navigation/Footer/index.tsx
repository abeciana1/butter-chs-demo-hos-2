import { use } from 'react'
import { getNavMenu } from '@/lib/butter'
import { headers } from 'next/headers';
import Link from 'next/link'
import PolicyLinkSection from '@/components/_footer/PolicyLinks'
import Nondiscrimination from '@/components/_footer/Nondiscrimination'
import TextContent from '@/components/_styled/TextContent';
import { ColorE, FontSizeE, FontWeightE } from '@/definitions/enums';
import { FooterDataI, LinkFieldsI } from '@/definitions/interfaces/_footer'
import FooterNavigationLink from '@/components/_footer/FooterNavigationLinks'
import SocialLinks from '@/components/_footer/SocialLinks'

const Footer = () => {
    const headersList = use(headers());
    const isPreview = headersList.get("x-search-param")
    const navContent = use(getNavMenu(isPreview as string, 'footer_menu', 'footer-menu'))

    const {
        medical_center_name,
        address,
        phone,
        social_links,
        policy_links,
        links,
        nondiscrimination_notice
    } = navContent?.data?.fields as FooterDataI

    return (
        <footer className='bg-lightGrey mt-12 pt-20'>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-32 gap-10 place-content-evenly'>
                <section className='max-w-64'>
                    <Link
                        href='/'
                        className='text-blue hover:text-navy text-xl font-medium'
                        title={medical_center_name}
                    >
                        {medical_center_name}
                    </Link>
                    <div className='space-y-1 text-black'>
                        {address}
                    </div>
                    <div className='font-bold text-sm text-black'>
                        {phone}
                    </div>
                    {social_links &&
                        <SocialLinks
                            facebook={social_links?.facebook}
                            facebook_username={social_links?.facebook_username}
                            instagram={social_links?.instagram}
                            instagram_username={social_links?.instagram_username}
                            twitter={social_links?.twitter}
                            twitter_username={social_links?.twitter_username}
                        />
                    }
                    {(policy_links && policy_links?.length > 0) &&
                        <PolicyLinkSection links={policy_links} />
                    }
                    <div className='mt-5'>
                        <TextContent
                            text={`Copyright ©${new Date().getFullYear()}. All rights reserved.`}
                            fontSize={FontSizeE.SM}
                            fontWeight={FontWeightE.NORMAL}
                            color={ColorE.BLACK}
                        />
                    </div>
                </section>
                {links?.map((link: LinkFieldsI, index: number) => {
                    return (
                        <FooterNavigationLink key={index} navLink={link} />
                    )
                })}
            </section>
            <Nondiscrimination text={nondiscrimination_notice} />
        </footer>
    )
}

export default Footer