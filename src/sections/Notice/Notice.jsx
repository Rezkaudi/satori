
// styles
import Styles from './Notice.module.css'

// data
import NoticeData from './data.json'

// components
import YouTubeVideo from '@/components/YouTubeVideo/YouTubeVideo'

const Notice = () => {
    return (
        <section className={Styles.notice}>
            <div className={`container ${Styles.container}`}>
                <div className={Styles.noticeContent}>
                    <div className={Styles.left}>
                        <h1>{NoticeData.contentLeft}</h1>
                    </div>
                    <div className={Styles.right}>
                        <p>{NoticeData.contentRight1}</p>
                        <p>{NoticeData.contentRight2}</p>
                    </div>
                </div>
                <YouTubeVideo videoId={NoticeData.youtubeVideoId} autoplay={false} />
            </div>
        </section>
    )
}

export default Notice