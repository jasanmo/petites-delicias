import styles from './post-body.module.css'
import ContentImage from './content-image'

export default function PostBody({ content }) {

  return (
    <div className="max-w-2xl mx-auto">
      { content.includes('<img')
        ?
        <div className={styles.content}>
          <ContentImage content={content}/>
        </div>
        :
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{__html:content}}
        />
      }
    </div>
  )
}
