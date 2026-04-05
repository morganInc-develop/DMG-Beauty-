import FloatingControls from "@/components/persistent/FloatingControls";

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-foudre-paper">
      <FloatingControls />
      <div className="grid-24 pt-[12rem]">
        <div className="col-span-24">
          <h1 className="tx-xl text-foudre-green">
            COMING
            <br />
            SOON.
          </h1>
          <p className="tx-p mt-4 text-foudre-green/60">
            This collection is being prepared. Check back shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
