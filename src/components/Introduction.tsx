import { Button } from "./commons/Button";
import { ImageWithFallback } from "./commons/ImageWithFallback";

export function Introduction() {
    const scrollToRegistration = () => {
        const element = document.getElementById('registration');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Master Product Management & Product Ownership
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Transform your career with our comprehensive e-learning program. Learn from industry experts and become a certified Product Master & Product Owner.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={scrollToRegistration}
                                className="bg-blue-700 hover:bg-blue-800 text-lg px-8 py-3"
                            >
                                Start Learning Today
                            </Button>
                            <Button
                                variant="outline"
                                className="border-blue-700 text-blue-700 hover:bg-blue-50 text-lg px-8 py-3"
                                onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                View Curriculum
                            </Button>
                        </div>
                        <div className="mt-8 flex items-center space-x-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-700">500+</div>
                                <div className="text-sm text-gray-600">Students Trained</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-700">95%</div>
                                <div className="text-sm text-gray-600">Success Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-700">4.8/5</div>
                                <div className="text-sm text-gray-600">Student Rating</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:ml-8">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1630672790237-38eeb57cb60b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwbWFuYWdlbWVudCUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc1ODg4MDQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Product management team meeting"
                            className="w-full h-96 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}