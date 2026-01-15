export default function PaymentMethods() {
    const methods = [
        'Zelle',
        'PayPal',
        'Venmo',
        'Cash App',
        'Crypto (USDC/BTC/ETH)',
        'Business Check',
        'Cash (Local Drop-off)',
    ];

    return (
        <div className="mt-12 border-t border-[var(--color-divider)] pt-12">
            <div className="text-center mb-8">
                <h3>
                    Multiple Payout Options. Zero Fees.
                </h3>
                <p className="mt-2 text-[var(--color-text-muted)]">
                    We pay immediately upon verification via your preferred method.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                {methods.map((method) => (
                    <span
                        key={method}
                        className="inline-flex items-center rounded-sm bg-[var(--color-surface-2)] px-4 py-2 text-sm font-medium text-[var(--color-heading)] border border-[var(--color-border)]"
                    >
                        {method}
                    </span>
                ))}
            </div>
        </div>
    );
}
