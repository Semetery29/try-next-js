export const metadata = {
    title: 'DahsBoard | Next Hero',
    description: 'Next Hero',
}

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div>Sidebar</div>
            {children}
        </div>
    );
};

export default DashboardLayout;