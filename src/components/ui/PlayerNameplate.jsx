/** A compact player-card-inspired label; it intentionally contains no game stats. */
export function PlayerNameplate({ displayName, status = true }) {
  return (
    <div className="player-nameplate">
      {status && <span className="player-status" aria-label="Available" />}
      <span>{displayName}</span>
    </div>
  );
}
