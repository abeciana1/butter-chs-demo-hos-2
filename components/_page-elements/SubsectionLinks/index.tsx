import {
    SubNavigationLinksI,
    SubsectionLinkI
} from '@/definitions/interfaces/_navigation'
import TextContent from '@/components/_styled/TextContent'
import { ColorE, FontWeightE, FontSizeE } from '@/definitions/enums'
import SiteLink from '@/components/_styled/SiteLink'

const SubNavLink: React.FC<SubsectionLinkI> = ({
    label,
    url
}) => {
    return (
        <li className="leading-7">
            <SiteLink
                linkText={label}
                href={url || '/'}
                color={ColorE.WHITE}
                fontSize={FontSizeE.SM}
                fontWeight={FontWeightE.MEDIUM}
            />
        </li>
    )
}

const SubNavigationLinks: React.FC<SubNavigationLinksI> = ({
    label,
    subsectionLinks,
    setKeep,
    setDisplay
}) => {
    return (
        <div
            onMouseEnter={() => setKeep(true)}
            onMouseLeave={() => {
                setKeep(false)
                setDisplay(false)
            }}
            className="bg-blue absolute left-0 w-full top-16 p-5 rounded-b-md gap-5 border-t-2 border-navy opacity-80 shadow-lg"
        >
            <TextContent
                text={label}
                color={ColorE.WHITE}
                fontWeight={FontWeightE.MEDIUM}
                fontSize={FontSizeE.XXXXL}
            />
            <ul className="mt-4 grid grid-cols-4 gap-4">
                {subsectionLinks?.map((link: SubsectionLinkI, index: number) => (
                    <SubNavLink
                        key={`${link?.label}-${index}`}
                        label={link?.label}
                        url={link?.url}
                    />
                ))}
            </ul>
        </div>
    )
}

export default SubNavigationLinks
