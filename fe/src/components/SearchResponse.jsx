import React, { useState, useEffect } from 'react';

export const SearchResponse = ({ apiResponse }) => {
  const matches = apiResponse ? apiResponse.data.matches : [];

  // Function to truncate the content to 20 words
  const truncateContent = (content, wordLimit) => {
    const words = content.split(' ');
    if (words.length <= wordLimit) {
      return content;
    }
    const truncatedWords = words.slice(0, wordLimit);
    return truncatedWords.join(' ') + '...';
  };

  // Check if there are matches to display
  const hasMatches = matches.length > 0;

  return (
    <div className="container">
      {hasMatches && (
        <div className="rounded-lg bg-white p-3 shadow-md">
          <h2 className="p-3 text-left text-gray-500 font-semibold text-sm">Suggested Resources:</h2>
          {hasMatches && (
            <table className="table table-bordered table-striped">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-gray-500">URL</th>
                  <th className="text-gray-500">Content</th>
                </tr>
              </thead>
              <tbody>
                {matches.map(match => (
                  <tr key={match.id}>
                    <td>
                      <a href={match.metadata.URL} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                        {match.metadata.URL}
                      </a>
                    </td>
                    <td className="pl-4">{truncateContent(match.metadata.content, 20)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
