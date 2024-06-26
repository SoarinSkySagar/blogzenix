import Image from 'next/image'

export default function BlogCard(props) {
  return (
    <div key={props.post.title} className="flex flex-col rounded-2xl shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <Image className="h-48 w-full object-cover" src={props.post.imageUrl} alt="" height={1000} width={1000} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-pink-600">
                    <a href={props.post.category.href} className="hover:underline">
                      {props.post.category.name}
                    </a>
                  </p>
                  <a href={props.post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{props.post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{props.post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={props.post.author.href}>
                      <span className="sr-only">{props.post.author.name}</span>
                      <Image className="h-10 w-10 rounded-full" src={props.post.author.imageUrl} alt="" height={100} width={100} />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={props.post.author.href} className="hover:underline">
                        {props.post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={props.post.datetime}>{props.post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{props.post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}
