import { getGlobalContent } from '@/lib/butter'
import { use } from 'react'
import cx from 'classnames'
import { FontWeightE } from '@/definitions/enums'
import ButtonLink from '@/components/_styled/ButtonLink'

interface AnnouncementFields {
    label: string;
    cta: string;
    background_color: string;
    text_color: string;
    font_weight: {
        font_weight: FontWeightE;
    };
}

interface Announcement {
    fields: AnnouncementFields;
}

// Define the API response type
type AnnouncementResponse = Announcement | Announcement[] | null;


const AnnouncementDataFetch = () => {
    let announcements = use(getGlobalContent('announcement_bar_comp')) as AnnouncementResponse;

    if (!announcements) return null;

    const announcementList = Array.isArray(announcements) ? announcements : [announcements];

    return (
        <>
            {announcementList.map((announcement, index) => (
                <AnnouncementBar key={index} announcement={announcement.fields} />
            ))}
        </>
    );
};


const AnnouncementBar: React.FC<{ announcement: AnnouncementFields }> = ({ announcement }) => {
    const { label, cta, background_color, text_color, font_weight } = announcement;
    console.log('font_weight', font_weight)

    return (
        <div
            style={{ backgroundColor: background_color, color: text_color || '#000' }}
            className={cx('flex justify-center text-lg py-2', {
                ['font-light']: font_weight?.font_weight === FontWeightE.LIGHT,
                ['font-medium']: font_weight?.font_weight === FontWeightE.MEDIUM,
                ['font-normal']: font_weight?.font_weight === FontWeightE.NORMAL,
                ['font-bold']: font_weight?.font_weight === FontWeightE.BOLD,
            })}
        >
            <p>{label}</p>
            <ButtonLink
                linkText={cta}
                link='/'
                fontWeight={FontWeightE.NORMAL}
                buttonColor=''
            />
        </div>
    );
};

export default AnnouncementDataFetch