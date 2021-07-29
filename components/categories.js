import Link from 'next/link'

export default function Categories({ categories }) {
  return (
    <span className="ml-1">
      under
      {categories.edges.length > 0 ? (
        categories.edges.map((category, index) => (
          <span key={index} className="ml-1">
            <Link href={`/categories/${category.node.slug}`}>
              <a>
                {category.node.name}
              </a>
            </Link>
          </span>
        ))
      ) : (
        <span className="ml-1">{categories.edges.node.name}</span>
      )}
    </span>
  )
}
