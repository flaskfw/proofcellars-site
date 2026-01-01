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
        <div className="mt-12 border-t border-border pt-12">
            <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-primary">
                    Multiple Payout Options. Zero Fees.
                </h3>
                <p className="mt-2 text-secondary">
                    We pay immediately upon verification via your preferred method.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                {methods.map((method) => (
                    <span
                        key={method}
                        className="inline-flex items-center rounded-full bg-surface-hover px-4 py-2 text-sm font-medium text-primary border border-border"
                    >
                        {method}
                    </span>
                ))}
            </div>
        </div>
    );
}
