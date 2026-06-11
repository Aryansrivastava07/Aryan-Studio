"use client";

export function ToastContainer({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex w-full max-w-sm flex-col gap-3 px-4 md:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-3xl border p-4 shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out ${
            toast.variant === "error"
              ? "border-red-300 bg-red-50 text-red-900"
              : "border-sky-300 bg-sky-50 text-sky-900"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <p className="font-label-md text-label-md uppercase tracking-[0.18em] opacity-90">
                {toast.variant === "error" ? "Error" : "Success"}
              </p>
              <p className="font-body-md text-body-md leading-snug">
                {toast.message}
              </p>
            </div>
            <button
              type="button"
              className="text-current opacity-70 hover:opacity-100"
              onClick={() => onDismiss(toast.id)}
              aria-label="Dismiss notification"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
