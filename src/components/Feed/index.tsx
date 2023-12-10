import { ClipLoader } from 'react-spinners'
import { useGetPostsQuery } from '../../api/posts/posts.api'
import { Post } from '../../models'
import Snippet from '../Snippet'

const Feed = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery()

  return (
    <>
      {error && <h1>error</h1>}
      <div className="relative min-h-[100vh-245px]">
        {posts
          ? posts.map(({ id, author, language, data, createdAt }: Post) => (
              <Snippet
                key={id}
                author={author}
                language={language}
                data={data}
                createdAt={createdAt}
              />
            ))
          : null}
        {isLoading && (
          <ClipLoader
            cssOverride={{
              position: 'absolute',
              left: '48%',
            }}
          />
        )}
      </div>
    </>
  )
}

export default Feed
