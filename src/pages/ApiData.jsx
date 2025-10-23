import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../api/api';
import Card from '../components/Card';
import Layout from '../components/Layout';
import Button from '../components/Button';

export default function ApiData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const LIMIT = 10;

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchPosts(page, LIMIT);
        setPosts(prev => [...prev, ...data]);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [page]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const loadMore = () => setPage(prev => prev + 1);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Posts</h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
        />

        {/* Error */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPosts.map(post => (
            <Card key={post.id} title={post.title}>
              <p>{post.body}</p>
            </Card>
          ))}
        </div>

        {/* Loading */}
        {loading && <p className="mt-4 text-gray-500">Loading...</p>}

        {/* Load More Button */}
        {!loading && posts.length >= page * LIMIT && (
          <div className="flex justify-center mt-6">
            <Button variant="primary" onClick={loadMore}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
