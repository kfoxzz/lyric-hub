import React from "react";
import { Link } from "react-router-dom";

function Track(props) {
  const { track } = props;

  function truncateArtist(artist_name) {
    let artist = artist_name;
    if (artist.length > 40) {
      return artist.slice(0, 40) + "...";
    } else {
      return artist;
    }
  }

  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{truncateArtist(track.artist_name)}</h5>
          <p className="card-text">
            <strong>
              {" "}
              <i className="fas fa-play"></i> Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              {" "}
              <i className="fas fa-compact-disc"></i> Album
            </strong>
            : {track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right"></i> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Track;
