import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, coverImage, slug}) {
  const image = (
    <Image
      src={coverImage?.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      alt={`Cover Image for ${title}`}
      width={coverImage?.mediaDetails.width}
      height={coverImage?.mediaDetails.height}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={slug}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
