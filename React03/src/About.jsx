import React, { useEffect, useState } from 'react';
// Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt={product.product_name} />
        <div className="card-body">
          <h5 className="card-title">{product.product_name}</h5>
          <p className="card-text">Brand: {product.brand}</p>
          <p className="card-text">Category: {product.category}</p>
          <p className="card-text">Price: ${product.price.toFixed(2)}</p>
          <p className="card-text">Quantity: {product.quantity}</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Fetch products from the database URL
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);  // Initially show all products
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle search input change
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on the search query
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);  // Reset to first page when search query changes
  }, [searchQuery, products]);

  // Paginate the filtered products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-danger text-center">Error: {error}</p>;

  return (
    <div className="container">
      <h2 className="text-center my-4">About Us</h2>

      {/* Search Bar */}
      <div className="mb-4 text-center">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="row">
        {currentItems.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination text-center my-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= filteredProducts.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default About;
